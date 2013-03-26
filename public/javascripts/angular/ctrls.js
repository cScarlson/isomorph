

app.controller('AppCtrl', function($scope, $routeParams, $location, $http){
	$scope.obj = {key: 'val'};
});


app.controller('SAMPLECtrl', function($scope, $routeParams, $location, $http){
	console.log('Reached SAMPLECtrl!!!');
});


app.controller('MapCtrl', function($scope, $routeParams, $location, $http){
	console.log('Reached MapCtrl!!!');
});


app.controller('ChatCtrl', function($scope, $routeParams, $location, $http){
	console.log('Reached ChatCtrl!!!');
});


app.controller('BlogCtrl', function($scope, $routeParams, $location, $http){
	console.log('Reached BlogCtrl!!!');
});


app.controller('FilesCtrl', function($scope, $routeParams, $location, $http){
	console.log('Reached FilesCtrl!!!');
});


app.controller('TasksCtrl', function($scope, $routeParams, $location, $http){
	console.log('Reached TasksCtrl!!!');
});


app.controller('NewTaskCtrl', function($scope, $routeParams, $location, $http){
	console.log('Reached NewTaskCtrl!!!');
});


app.controller('ViewTaskCtrl', function($scope, $routeParams, $location, $http){
	var idParam = $routeParams.id;
	routeProvider.when('/tasks/:id/', {templateUrl: '/tasks/' + idParam});
	$location.path('/tasks/' + idParam + '/');
});


app.controller('EditTaskCtrl', function($scope, $routeParams, $location, $http){
	var idParam = $routeParams.id;
	
	$scope.formVals = {
		method: $('#method').val(),
		task: $('#task').val()
	};
	
	$scope.submitEdit = function(){
		console.log('yay!... you submitted...:', $scope.formVals.task);
	};
	
	routeProvider.when('/tasks/:id/edit/', {templateUrl: '/tasks/' + idParam + '/edit'});
	$location.path('/tasks/' + idParam + '/edit/');
});


app.controller('DeleteTaskCtrl', function($scope, $routeParams, $location, $http){
	var idParam = $routeParams.id;
	routeProvider.when('/tasks/:id/delete/', {templateUrl: '/tasks/' + idParam + '/delete'});
	$location.path('/tasks/' + idParam + '/delete/');
});








