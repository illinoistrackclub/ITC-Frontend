'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var ContactCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    ContactCtrl = $controller('ContactCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
