
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'NeighborNet' });
};

exports.SAMPLE = function(req, res){
	res.render('partials/SAMPLE', { title: 'SAMPLE' });
};

exports.map = function(req, res){
	res.render('partials/map', { title: 'Map' });
};

exports.chat = function(req, res){
	res.render('partials/chat', { title: 'Chat' });
};

exports.blog = function(req, res){
	res.render('partials/blog', { title: 'Blog' });
};

exports.files = function(req, res){
	res.render('partials/files', { title: 'Files' });
};








