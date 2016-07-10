'use strict';

describe('Controller: RacesCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var $scope;
  var RacesCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$rootScope_) {
    $scope = _$rootScope_.$new();

    RacesCtrl = $controller('RacesCtrl', {
      $scope: $scope
    });
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
