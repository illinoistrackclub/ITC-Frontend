'use strict';

describe('Controller: IllinoistrackclubCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var $location, $scope;
  var ITCCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller, _$location_, _$rootScope_) {
    $location = _$location_;
    $scope = _$rootScope_.$new();

    spyOn($location, 'path');

    ITCCtrl = $controller('illinoistrackclubController', {
      $scope: $scope
    });
  }));

  describe('goTo', function() {
    it('should call location.path with the passed state', function() {
      var state = 'some state';
      $scope.goTo(state);

      expect($location.path).toHaveBeenCalledWith(state);
    });
  });
});
