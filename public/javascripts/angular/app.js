var routeProvider
	, app = angular.module('myModule', ['ngResource']).config(function($routeProvider){
	
	routeProvider = $routeProvider;
	$routeProvider
		.when('/', {templateUrl: '/login', controller: 'AppCtrl'})
		.when('/home', {templateUrl: '/', controller: 'AppCtrl'})
		.when('/login', {templateUrl: '/login', controller: 'AppCtrl'})
		.when('/SAMPLE', {templateUrl: '/SAMPLE', controller: 'SAMPLECtrl'})
		.when('/map', {templateUrl: '/map', controller: 'MapCtrl'})
		.when('/chat', {templateUrl: '/chat', controller: 'ChatCtrl'})
		.when('/blog', {templateUrl: '/blog', controller: 'BlogCtrl'})
		.when('/files', {templateUrl: '/files', controller: 'FilesCtrl'})
		.when('/tasks', {templateUrl: '/tasks', controller: 'TasksCtrl'})
		.when('/tasks/new', {templateUrl: '/tasks/new', controller: 'NewTaskCtrl'})
		.when('/tasks/:id', {templateUrl: '/tasks', controller: 'ViewTaskCtrl'})
		.when('/tasks/:id/edit', {templateUrl: '/tasks', controller: 'EditTaskCtrl'})
		.when('/tasks/:id/delete', {templateUrl: '/tasks', controller: 'DeleteTaskCtrl'})
		.otherwise({redirectTo: '/login'});
		//console.log('$routeProvider', $routeProvider);
		
})

/*.controller('ViewTaskCtrl', function($scope, $routeParams, $location, $http){

	console.log('this is master', $routeParams.id, routeProvider);
	var idParam = $routeParams.id;
	routeProvider
		.when(
			'/tasks/:id',
			{templateUrl: '/tasks/' + idParam + '/view', controller: 'ViewTaskCtrl'}
		);
	$location.path('/tasks/' + idParam + '');
	
})*/

;

/*
app.controller('Ctrl', function($scope, $routeParams, $location, $http){
	alert('u reached the Ctrl thang');
})
*/

/**
 * RESOURCES

$routeParams:
http://stackoverflow.com/questions/11534710/angularjs-how-to-use-routeparams-in-generating-the-templateurl/12187357#12187357


 */
