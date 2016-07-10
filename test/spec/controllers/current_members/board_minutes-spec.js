'use strict';

describe('Controller: BoardMinutesCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var BoardMinutesCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    BoardMinutesCtrl = $controller('BoardMinutesCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
