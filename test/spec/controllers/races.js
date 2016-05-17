'use strict';

describe('Controller: RacesCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var RacesCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    RacesCtrl = $controller('RacesCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
