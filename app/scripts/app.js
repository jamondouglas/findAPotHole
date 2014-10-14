'use strict';

/**
 * @ngdoc overview
 * @name findapotholeApp
 * @description
 * # findapotholeApp
 *
 * Main module of the application.
 */
angular
  .module('findapotholeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/practice',{
        templateUrl: 'views/practice.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// .directive('ngSparkline', function() {
//     return {
//       restrict: 'A',
//       require: '^ngCity',
//       scope: {
//         ngCity: '@'
//       },
//       template: '<div class="sparkline"><h4>Weather for {{ngModel}}</h4></div>'
//     };
//   });
 
