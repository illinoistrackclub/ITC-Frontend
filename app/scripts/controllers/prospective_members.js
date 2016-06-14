'use strict';

angular.module('itcFrontendApp')

.controller('ProspectiveMembersCtrl', function($mdDialog, $scope) {
  $scope.openEmailSurvey = function() {
    $mdDialog.show({
      templateUrl: 'views/dialogs/emailSurvey.html',
      clickOutsideToClose: false,
      fullscreen: true,
      scope: $scope
    });
  };

  $scope.submitSurvey = function() {
    $mdDialog.show(
      $mdDialog.alert({
        clickOutsideToClose: true,
        title: 'Thank You!',
        textContent: 'You will be added to our email list shortly',
        ok: 'Continue'
      })
    );
  };

  $scope.cancelSurvey = function() {
    $mdDialog.cancel();
  };
});
