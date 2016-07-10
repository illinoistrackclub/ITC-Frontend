'use strict';

describe('Controller: NewsCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var NewsCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    NewsCtrl = $controller('NewsCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
