'use strict';

describe('Controller: ClubRelaysCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var ClubRelaysCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    ClubRelaysCtrl = $controller('ClubRelaysCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
