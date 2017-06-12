var encryptHelper = F.helpers.encrypt;


exports.install = function() {
	F.route('/', view_index);
	F.route('/graphql', view_graphql);
	F.route('/encrypt', encrypt);


	
	// F.use('graphql', function(req, res, next, options={
	// 	schema,
	// 	graphiql: true
	// }){

	// })
};

function view_index() {
	var self = this;



	self.view('index', {name: 'Alain'});
}

function view_graphql() {
	var self = this;
	

	F.use('gql', '/graphql');
	self.plain('HIII')
}

function encrypt() {
	var self = this;
	var pass = self.body.pass;

	console.log('---HERE---', encryptHelper)



	self.plain('pass!!!');
}