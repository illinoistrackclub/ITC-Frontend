'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var Api, $http, $q, $scope, $timeout;
  var getAllMeetsByRequest, loadAthletesRequest;
  var ResultsCtrl;

  // Initialize the controller
  beforeEach(inject(function (_Api_, $controller, _$http_, _$q_, _$rootScope_, _$timeout_) {
    Api = _Api_;
    $http = _$http_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $timeout = _$timeout_;

    getAllMeetsByRequest = $q.defer();
    loadAthletesRequest = $q.defer();

    spyOn(Api, 'getAllMeetsBy').and.returnValue(getAllMeetsByRequest.promise);
    spyOn(Api, 'getAllAthletesBy').and.returnValue(loadAthletesRequest.promise);

    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: $scope
    });
  }));


  var itShouldLoadMeets = function(season, scopeProperty) {
    it('should call Api to get filtered meets', function() {
      expect(Api.getAllMeetsBy).toHaveBeenCalledWith('season=' + season);
    });

    describe('after promise resolves', function() {
      var meets, expectedMeets;

      beforeEach(function() {
        meets = [{
          date: '2010-01-04'
        }, {
          date: '2011-01-02'
        }, {
          date: '2010-01-02'
        }];

        expectedMeets = {
          2010: [ meets[2], meets[0] ],
          2011: [ meets[1] ]
        };
      });

      it('should sort and hash meets by year', function() {
        getAllMeetsByRequest.resolve({ data: meets });
        $scope.$digest();

        expect($scope[scopeProperty]).toEqual(expectedMeets);
      });
    });
  };


  describe('initialization', function() {
    itShouldLoadMeets('XC', 'crossCountryMeets');
    itShouldLoadMeets('Indoor', 'indoorMeets');
    itShouldLoadMeets('Outdoor', 'outdoorMeets');
  });

  describe('loadAthletes', function() {
    var deferredRequest;
    beforeEach(function() {
      $scope.athleteText = 'Mike';

      deferredRequest = $q.defer();

      spyOn($q, 'defer').and.returnValue(deferredRequest);
    });

    it('should call Api to search athletes by text', function() {
      $scope.loadAthletes();
      expect(Api.getAllAthletesBy).toHaveBeenCalledWith('search=' + $scope.athleteText);
    });

    it('should return a promise', function() {
      expect($scope.loadAthletes()).toEqual(deferredRequest.promise);
    });

    describe('after promise resolves', function() {
      it('should resolve such that $scope.items will be assigned by Material', function() {
        var expectedItems = 'different items';
        spyOn(deferredRequest, 'resolve');

        $scope.loadAthletes();
        loadAthletesRequest.resolve({ data: expectedItems });
        $scope.$digest();

        expect(deferredRequest.resolve).toHaveBeenCalledWith(expectedItems);
      });
    });
  });
});
