'use strict';

describe('Controller: ProspectiveMembersCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var ProspectiveMembersCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    ProspectiveMembersCtrl = $controller('ProspectiveMembersCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
