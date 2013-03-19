
/**
 * Module dependencies.
 */

var express	=	require('express')
  , routes =	require('./routes')
  , user =		require('./routes/user')
  , tasks =		require('./routes/tasks')
  , http =		require('http')
  , path =		require('path')
  , util =		require('util')
  , fs =		require('fs')					// fileSystem				/files
  , mongoose =	require('mongoose')				// MongoDB					/tasks
  , mysql =		require('mysql')				// MySQL Database			/blog
  , async =		require('async')				// asynchronous utilities
  , cmdr =		require('commander')			// command line utility
  , request =	require('request');				// request utilities

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(__dirname + '/other'));
}).configure('development', function(){
  app.use(express.errorHandler());
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var io = require('socket.io').listen(server)
	, nicknames = [];

/**
 * Tasks App GET Routes
 */
app.get('/', routes.index);
app.get('/users', user.list);				// Authentication?...OAuth?
app.get('/SAMPLE', routes.SAMPLE);	// demo
app.get('/map', routes.map);		// leaflet
app.get('/chat', routes.chat);		// socket.io
app.get('/blog', routes.blog);		// mysql
app.get('/files', routes.files);	// fs
// tasks uses MongoDB
app.get('/tasks', tasks.tasks);
app.get('/tasks/new', tasks.new);
app.get('/tasks/:id', tasks.task);
app.get('/tasks/:id/edit', tasks.edit);
app.get('/tasks/:id/delete', tasks['delete']);

/**
 * Tasks App POST Routes
 */
app.post('/tasks', tasks.post);

/**
 * Tasks App PUT Routes
 */
app.put('/tasks/:id', tasks.put);

/**
 * Tasks App DELETE Routes
 */
app.del('/tasks/:id', tasks.del);

io.sockets.on('connection', function(soc){
	soc.emit('connected', {text: 'connected'});
	
	soc.on('nickname', function(data, callback){
		if(nicknames.indexOf(data) != -1){
			callback(false);
		}else{
			nicknames.push(data);
			soc.nickname = data;
			io.sockets.emit('nicknames', nicknames);
			console.log('Nicknames are', nicknames);
			callback(true);
		}
	});
	
	soc.on('user message', function(data){
		io.sockets.emit('user message', {
			nick: soc.nickname,
			message: data
		});
	});
	
	soc.on('disconnect', function(){
		nicknames.splice(nicknames.indexOf(soc.nickname), 1);
		soc.broadcast.emit('nicknames', nicknames);
	});
	
});


/**
 * MongoDB
 */
mongoose.connect('mongodb://localhost/isomorph', function(err){
	if(!err){
		console.log('connected to mongoDB successfully');
	}else{
		throw err;
	}
});

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

Task = new Schema({
	task: String
}), Task = mongoose.model('Task', Task);

/**
 * MySQL
 */
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'cody',
  password : '334583oh!4',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/

cmdr
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (cmdr.peppers) console.log('  - peppers');
if (cmdr.pineapple) console.log('  - pineappe');
if (cmdr.bbq) console.log('  - bbq');
console.log('  - %s cheese', cmdr.cheese);

















