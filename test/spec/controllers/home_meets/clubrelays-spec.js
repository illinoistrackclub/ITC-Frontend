'use strict';

describe('Controller: ClubPeaksCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var ClubPeaksCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    ClubPeaksCtrl = $controller('ClubPeaksCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
