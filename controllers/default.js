var encryptHelper = F.helpers.encrypt;
var crypto =  require('crypto');



exports.install = function() {
	F.route('/', view_index);
	// F.route('/graphql', view_graphql);
	F.route('/encrypt', encrypt, ['get', 'post']);


	
	// F.use('graphql', function(req, res, next, options={
	// 	schema,
	// 	graphiql: true
	// }){

	// })
};

function view_index() {
	var self = this;

console.log('NOW: ', new Date().toISOString().split('T')[0]);

	self.view('index', {name: 'Alain'});
}

// function view_graphql() {
// 	var self = this;
	

// 	F.use('gql', '/graphql');
// 	self.plain('HIII')
// }

function encrypt() {
	var self = this,
			body = self.body,
			algorithm = 'aes-256-ctr',
			inp = {},
			out;
	
	console.log('body: ', body)
	
	inp = {
		name: body.name,
		message: body.message,
		expiration: body.expiration
	}

	inp = JSON.stringify(inp);

console.log('inp: ', inp)

	function encrypt(text){
	  var cipher = crypto.createCipher(algorithm,'body.passphrase')
	  var crypted = cipher.update(text,'utf8','hex')
	  crypted += cipher.final('hex');
	  return crypted;
	}

	function decrypt(text){
	  var decipher = crypto.createDecipher(algorithm,'body.passphrase')
	  var dec = decipher.update(text,'hex','utf8')
	  dec += decipher.final('utf8');
	  return dec;
	}
	
	
	if(body.mode == 'encrypt') {
		out = encrypt(inp);
		console.log('enc: ', out)
	}
	else {
		// console.log('exp: ', body.expiration, 'now: ', new Date().toISOString().split('T')[0])

		out = decrypt(body.secretMsg || '')

		out = JSON.parse(out);
		console.log('dec: ', out)

		if(out.expiration < new Date().toISOString().split('T')[0]) {
			var out = {error: "Sorry, your message has either expired or not decryptable"};
			console.log("EXPIRED")
		} 


	}		 
	console.log('out: ', out)
	self.plain(out);

}