'use strict';

angular.module('vr.controllers', [])
  .controller('Ctrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActiveMenu = function(path) {
      return path === $location.path();
    };
  }]);
