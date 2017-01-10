'use strict';

describe('Controller: TrainingResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var TrainingResourcesCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    TrainingResourcesCtrl = $controller('TrainingResourcesCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
