'use strict';

angular.module('itcFrontendApp')

.controller('illinoistrackclubController', function($location, $scope) {
  $scope.goTo = function(state) {
    $location.path(state);
  };
});
