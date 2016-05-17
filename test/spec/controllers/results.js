'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var ResultsCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    ResultsCtrl = $controller('ResultsCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
