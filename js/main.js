'use strict';

angular.module('vr', [
  'ngRoute',
  'vr.controllers'
])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'partials/me.html'
      });

      $routeProvider.when('/code', {
        templateUrl: 'partials/code.html'
      });

      $routeProvider.when('/blog', {
        templateUrl: 'partials/blog.html'
      });

      $routeProvider.when('/resume', {
        templateUrl: 'partials/resume.html'
      });

      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }
  ]);
