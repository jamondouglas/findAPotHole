'use strict';
var app = angular.module('findapotholeApp');

app.directive('ngSparkline', function() {
	var url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=7&callback=JSON_CALLBACK&q=";
  return {
    restrict: 'A',
    require: '^ngCity',
    scope: {
      //ngCity: '='
      ngCity: '@'
    },
    template: '<div class="sparkline"><h4>Weather for {{ngCity}}</h4></div>',
    controller: ['$scope', '$http', function($scope, $http) {
		  $scope.getTemp = function() {
			  $http({
			    method: 'JSONP',
			    url: url + $scope.ngCity
			  }).success(function(data) {
			  	console.dir(data);
			    var weather = [];
			    angular.forEach(data.list, function(value){
			      weather.push(value);
			    });
			    $scope.weather = weather;
			  });
			};
    }],
  link: function(scope, iElement, iAttrs, ctrl){
  	console.dir(arguments);
		scope.getTemp(iAttrs.ngCity);
		scope.$watch('weather', function(newVal){
			if(newVal){
				var highs = [],
				width= 200,
				height = 80;
			}
		});
    }
  };
});

app.directive('ngCity',function(){
	return{
		controller: function($scope){}
	};
});