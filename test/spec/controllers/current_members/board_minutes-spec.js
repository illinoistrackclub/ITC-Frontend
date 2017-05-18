'use strict';

describe('Controller: BoardMinutesCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var $scope;
  var BoardMinutesCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$rootScope_) {
    $scope = _$rootScope_.$new();

    BoardMinutesCtrl = $controller('BoardMinutesCtrl', {
      $scope: $scope
    });
  }));

  it('should have a config object of track minutes', function() {
    expect($scope.trackMinutes).toEqual(jasmine.any(Object));
  });

  it('should have a config object of cross minutes', function() {
    expect($scope.crossMinutes).toEqual(jasmine.any(Object));
  });
});