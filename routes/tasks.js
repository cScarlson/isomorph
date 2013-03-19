/**
 * All Routes for Tasks App
 */


/**
 * GET '/tasks'
 */
exports.tasks = function(req, res){
	Task.find({}, function(err, docs){
		if(!err){
			res.render('partials/tasks/tasks', {
				title: 'Tasks',
				docs: docs
			});
		}else{
			throw err;
		}
	});
};

exports.task = function(req, res){
	console.log('@routeParam:', req.params.id);
	Task.findById(req.params.id, function(err, doc){
		if(!err){
			res.render('partials/tasks/tasks', {
				title: 'Task: ' + doc.task, docs: [], doc: doc
			});
		}else{console.log('______________' + req.params.id + '__________');
			res.redirect('partials/tasks/tasks');
		}
	});
};

/**
 * POST to '/tasks'
 */
exports.post = function(req, res){
	var task = new Task(req.body.task);
	task.save(function(err){
		if(!err){
			res.redirect('/#/tasks');
		}else{
			res.redirect('/#/tasks/new');
		}
	});
};

/**
 * POST/PUT to '/tasks/:id'
 */
exports.put = function(req, res){
	Task.findById(req.params.id, function(err, doc){
		if(!err){
			doc.task = req.body.task.task;
			doc.save(function(err){
				if(!err){
					//req.flash('info', 'Updated Task');
					res.redirect('partials/tasks');
				}else{
					req.flash('error', err);
					res.redirect('partials/tasks');
				}
			});
		}else{
			res.redirect('partials/tasks/' + req.params.id + '/edit');
		}
	});
};

/**
 * POST/DEL to '/tasks/:id'
 */
exports.del = function(req, res){
	var task = Task.findById(req.body.task.task, function(err, doc){
		!err && task.remove();
		res.redirect('partials/tasks');
	});
};

/**
 * GET '/tasks/new'
 * 'tasks/new' makes POST req to '/tasks'
 */
exports.new = function(req, res){
	res.render('partials/tasks/new', {title: 'Add Task'});
};

/**
 * GET '/tasks/:id/edit'
 * 'tasks/edit' makes POST/PUT req to '/tasks/:id'
 */
exports.edit = function(req, res){
	Task.findById(req.params.id, function(err, doc){
		if(!err){console.log('@@@@@ HIT EDIT');
			res.render('partials/tasks/edit', {
				title: 'Edit Task View',
				doc: doc
			});
		}else{
			res.redirect('partials/tasks/edit');
		}
	});
};

/**
 * GET '/tasks/:id/delete'
 * 'tasks/edit' makes POST/PUT req to '/tasks/:id'
 */
exports['delete'] = function(req, res){
	var task = Task.findById(req.params.id, function(err, doc){
		res.render('partials/tasks/delete', {title: 'Delete Task?', doc: doc});
	});
};






