
var koa = require('koa');
var mvc = require('mvc');
var app = koa();

require('./controllers.js');

app.use(function *resources(next){
	try{
		yield mvc.handle(this);
		if(this.body == null) this.status = 404;
	}
	catch(e)
	{
		throw e;
	}
	yield next;
});

mvc.createApplication({physicalPath: __dirname, virtualPath: "/"}).start();
app.listen(8124);

console.log(__filename);
console.log('Server running at http://127.0.0.1:8124/, ctrl + c exit.');

process.on('exit', function() {
	// following callback will not execute
	setTimeout(function() {
	console.log('Main event loop is stopped, this callback will not execute!');
	}, 0);
	console.log('Server is exiting ...');
});

process.on('SIGINT', function() {
    console.log('Server get SIGINT, ready to exit...');
	var times = 5;
	var id = setInterval(function() {
		console.log(times--)
		if(times) return;
		clearInterval(id);
		process.exit();
	}, 1000);
});

process.on('uncaughtException', function(err){
	console.log('uncaughtException: ' + err);
}); 

