'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var $scope, $window;
  var ContactCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$rootScope_, _$window_) {
    $scope = _$rootScope_.$new();
    $window = _$window_;

    ContactCtrl = $controller('ContactCtrl', {
      $scope: $scope
    });
  }));

  describe('emailCoach', function() {
    it('should open a mailto link', function() {
      var email = 'party@horse.com';
      spyOn($window, 'open');

      $scope.emailCoach(email);
      expect($window.open).toHaveBeenCalledWith('mailto:' + email);
    });
  });

  it('should have a config array of XC coaches', function() {
    expect($scope.xcCoaches).toEqual(jasmine.any(Array));

    angular.forEach($scope.xcCoaches, function(coach) {
      expect(coach).toEqual(jasmine.any(Object));
    });
  });

  it('should have a config array of TF coaches', function() {
    expect($scope.tfCoaches).toEqual(jasmine.any(Array));

    angular.forEach($scope.tfCoaches, function(coach) {
      expect(coach).toEqual(jasmine.any(Object));
    });
  });
});
