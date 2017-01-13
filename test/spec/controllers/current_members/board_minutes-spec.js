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

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});