// var options = {};

F.middleware('graphql', function(req, res, next, options){
	// alert('!!!');
	console.log('IN MIDDLEWARE')
	next();
})


F.use('graphql', '/graphql')