var encryptHelper = F.helpers.encrypt;
var crypto =  require('crypto');



exports.install = function() {
	F.route('/', view_index);
	F.route('/encrypt', encrypt, ['get', 'post']);
};



function view_index() {
	var self = this;



	self.view('index', {name: 'Alain'});
}


function encrypt() {

	var self = this,
			body = self.body,
			algorithm = 'aes-256-ctr',
			inp = {},
			out;
	
console.log('self: ', self.req)
	
	inp = {
		name: body.name,
		message: body.message,
		expiration: body.expiration,
		passphrase: body.passphrase
	}

	var passphrase = inp.passphrase;


	function encrypt(text){
	  var cipher = crypto.createCipher(algorithm, passphrase)
	  var crypted = cipher.update(text,'utf8','hex')
	  crypted += cipher.final('hex');
	  return crypted;
	}

	function decrypt(text){
	  var decipher = crypto.createDecipher(algorithm, passphrase)
	  var dec = decipher.update(text,'hex','utf8')
	  dec += decipher.final('utf8');
	  return dec;
	}
	
	
	if(body.mode == 'encrypt') {
		if(inp.name.length > 0) {
			if(inp.message.length > 0)  {
				inp = JSON.stringify(inp);
				out = encrypt(inp);
			} else {
				out = {error: "Sorry, your message doesn't match our requirements"};
			}
		} else {
			out = {error: "Sorry, your name doesn't match our requirements."};
		}


		console.log('enc: ', out)
	}
	else {
		out = decrypt(body.secretMsg || '')

		out = JSON.parse(out);
		console.log('dec: ', out)

		if(out.expiration < new Date().toISOString().split('T')[0] && out.expiration != '') {
			out = {error: "Sorry, your message has either expired or not decryptable"};
			console.log("EXPIRED")
		} 


	}	

	console.log('out: ', out)
	self.plain(out);

}