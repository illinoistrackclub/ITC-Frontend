'use strict';

describe('Controller: RacesCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var $location, $scope;
  var RacesCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$location_, _$rootScope_) {
    $location = _$location_;
    $scope = _$rootScope_.$new();

    spyOn($location, 'path');

    RacesCtrl = $controller('RacesCtrl', {
      $scope: $scope
    });
  }));

  it('should have a config array of XC meets', function() {
    expect($scope.crossMeets).toEqual(jasmine.any(Array));
    expect($scope.crossMeets.length).not.toEqual(0);

    angular.forEach($scope.crossMeets, function(meet) {
      expect(meet).toEqual(jasmine.any(Object));
    });
  });

  it('should have a config array of indoor meets', function() {
    expect($scope.indoorMeets).toEqual(jasmine.any(Array));
    expect($scope.indoorMeets.length).not.toEqual(0);

    angular.forEach($scope.indoorMeets, function(meet) {
      expect(meet).toEqual(jasmine.any(Object));
    });
  });

  it('should have a config array of outdoor meets', function() {
    expect($scope.outdoorMeets).toEqual(jasmine.any(Array));
    expect($scope.outdoorMeets.length).not.toEqual(0);

    angular.forEach($scope.outdoorMeets, function(meet) {
      expect(meet).toEqual(jasmine.any(Object));
    });
  });

  describe('openMeet', function() {
    it('should call location.path if a view is given', function() {
      var view = 'some view';
      $scope.openMeet(view);

      expect($location.path).toHaveBeenCalledWith(view);
    });

    it('should ignore a call without a view', function() {
      $scope.openMeet();

      expect($location.path).not.toHaveBeenCalled();
    });
  });
});
