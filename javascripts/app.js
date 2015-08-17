var demoApp = angular.module('demoApp', [
  'elsap-autoComplete',
]);

demoApp.controller('demoCtrl', ['$scope', function($scope){
	$scope.ObjSource = [{
		value: 'C',
		data: 'C'
	},{
		value: 'C++',
		data: 'C++'
	},{
		value: 'Java',
		data: 'Java'
	},{
		value: 'C#',
		data: 'C#'
	},{
		value: 'Php',
		data: 'Php'
	},{
		value: 'Ruby',
		data: 'Ruby'
	},{
		value: 'Javascript',
		data: 'Javascript'
	},{
		value: 'Pascal',
		data: 'Pascal'
	},{
		value: 'Python',
		data: 'Python'
	},{
		value: 'Go',
		data: 'Go'
	},{
		value: 'COBOL',
		data: 'COBOL'
	},{
		value: 'FORTRAN',
		data: 'FORTRAN'
	}];
	
	$scope.selectFunc = function(sugg) {
		if(sugg && sugg.value) {
			alert('You selected ' + sugg.value);
		}
	}
}]);