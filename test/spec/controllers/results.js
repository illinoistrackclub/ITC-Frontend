'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var $scope;
  var ResultsCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$rootScope_) {
    $scope = _$rootScope_.$new();

    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: $scope
    });
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
