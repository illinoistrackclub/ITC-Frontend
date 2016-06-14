'use strict';

describe('Controller: ProspectiveMembersCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var $mdDialog, $scope;
  var ProspectiveMembersCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$mdDialog_, _$rootScope_) {
    $mdDialog = _$mdDialog_;
    $scope = _$rootScope_.$new();

    spyOn($mdDialog, 'alert');
    spyOn($mdDialog, 'cancel');
    spyOn($mdDialog, 'show');

    ProspectiveMembersCtrl = $controller('ProspectiveMembersCtrl', {
      $scope: $scope
    });
  }));

  describe('$scope.openEmailSurvey', function() {
    it('should open a dialog', function() {
      $scope.openEmailSurvey();

      expect($mdDialog.show).toHaveBeenCalled();
    });
  });

  describe('$scope.submitSurvey', function() {
    it('should open a dialog', function() {
      $scope.submitSurvey();

      expect($mdDialog.show).toHaveBeenCalled();
    });

    it('should open an alert dialog', function() {
      $scope.submitSurvey();

      expect($mdDialog.alert).toHaveBeenCalled();
    });
  });

  describe('$scope.cancelSurvey', function() {
    it('should cancel the dialog', function() {
      $scope.cancelSurvey();

      expect($mdDialog.cancel).toHaveBeenCalled();
    });
  });
});
