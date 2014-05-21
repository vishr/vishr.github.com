'use strict';

angular.module('vr', [
  'ngRoute',
  'vr.controllers'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'tpl/me.html'
  });
  $routeProvider.when('/code', {
    templateUrl: 'tpl/code.html'
  });
  $routeProvider.when('/blog', {
    templateUrl: 'tpl/blog.html'
  });
  $routeProvider.when('/resume', {
    templateUrl: 'tpl/resume.html'
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);
