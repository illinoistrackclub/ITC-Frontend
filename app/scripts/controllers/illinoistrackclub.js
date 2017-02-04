'use strict';

angular.module('itcFrontendApp')

.controller('illinoistrackclubController', function(ANALYTICS, $location, $scope) {
  $scope.goTo = function(state) {
    $location.path(state);
  };

  $scope.getAnalyticsEvent = function(event) {
    console.log(ANALYTICS[event]);
    return ANALYTICS[event];
  }
});
