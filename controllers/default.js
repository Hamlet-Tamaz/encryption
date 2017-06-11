exports.install = function() {
	F.route('/', view_index);
	F.route('/graphql', view_graphql);

	
	F.use('graphql', '/graphql');
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
	

	// self.redirect('/')
}