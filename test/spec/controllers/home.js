'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var HomeCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    HomeCtrl = $controller('HomeCtrl', {});
  }));

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
