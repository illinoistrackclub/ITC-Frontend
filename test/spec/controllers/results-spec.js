'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

  var Api, $http, $q, $scope, $timeout;
  var getAllMeetsByRequest, loadAthletesRequest, getAllTopPerformancesRequest, getAllRecordsRequest;
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
    getAllTopPerformancesRequest = $q.defer();
    getAllRecordsRequest = $q.defer();

    spyOn(Api, 'getAllMeetsBy').and.returnValue(getAllMeetsByRequest.promise);
    spyOn(Api, 'getAllAthletesBy').and.returnValue(loadAthletesRequest.promise);
    spyOn(Api, 'getAllTopPerformances').and.returnValue(getAllTopPerformancesRequest.promise);
    spyOn(Api, 'getAllRecords').and.returnValue(getAllRecordsRequest.promise);

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

  var itShouldLoadTopPerformances = function() {
    it('should call Api to get all top performances', function() {
      expect(Api.getAllTopPerformances).toHaveBeenCalled();
    });

    describe('after promise resolves', function() {
      var performances, expectedPerformances;

      beforeEach(function() {
        performances = {
          "XC": [
            {
              "name": "4000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "6000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "8000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5.2 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }
          ],
          "Indoor": [
            {
              "name": "55m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "60m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "300m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "600m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "1000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "Mile Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "3000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "60m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x200m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x1600m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "SMR (2-2-4-8)",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "DMR (12-4-8-1600)",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }
          ],
          "Outdoor": [
            {
              "name": "100m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "1500m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "10000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "100m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "110m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "400m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "3k Steeplechase",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x100m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Discus",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Hammer Throw",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Javelin",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }
          ]
        };

        expectedPerformances = {
          "XC": [
            {
              "name": "4000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "6000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "8000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5.2 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }
          ],
          "Indoor": [
            {
              "name": "55m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "60m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "300m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "600m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "1000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "Mile Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "3000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "60m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x200m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x1600m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "SMR (2-2-4-8)",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "DMR (12-4-8-1600)",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }
          ],
          "Outdoor": [
            {
              "name": "100m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "1500m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "10000m Run",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "100m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "110m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "400m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "3k Steeplechase",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x100m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1},{"performance":3}],
                "femaleRecords": [{"performance":2}, {"performance":4}]                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Discus",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Hammer Throw",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }, {
              "name": "Javelin",
              "performances": {
                "maleRecords": [{"performance":3},{"performance":1}],
                "femaleRecords": [{"performance":4}, {"performance":2}]                
              }
            }
          ]
        };
      });

      it('should load top performances', function() {
        getAllTopPerformancesRequest.resolve({ data: performances });
        $scope.$digest();

        expect($scope.topPerformances).toEqual(expectedPerformances);
      });
    });
  };

  var itShouldLoadRecords = function() {
    it('should call Api to get all records', function() {
      expect(Api.getAllRecords).toHaveBeenCalled();
    });

    describe('after promise resolves', function() {
      var records, expectedRecords;

      beforeEach(function() {
        records = {
          "XC": [
            {
              "name": "4000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "6000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "8000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5.2 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }
          ],
          "Indoor": [
            {
              "name": "55m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "60m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "300m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "600m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "1000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "Mile Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "3000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "60m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x200m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x1600m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "SMR (2-2-4-8)",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "DMR (12-4-8-1600)",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }
          ],
          "Outdoor": [
            {
              "name": "100m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "1500m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "10000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "100m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "110m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "400m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "3k Steeplechase",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x100m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Discus",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Hammer Throw",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Javelin",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }
          ]
        };

        expectedRecords = {
          "XC": [
            {
              "name": "4000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "6000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "8000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5.2 Mile Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }
          ],
          "Indoor": [
            {
              "name": "55m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "60m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "300m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "600m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "1000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "Mile Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "3000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "60m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x200m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x1600m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "SMR (2-2-4-8)",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "DMR (12-4-8-1600)",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }
          ],
          "Outdoor": [
            {
              "name": "100m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "200m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "400m Dash",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "800m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "1500m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "5000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "10000m Run",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "100m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "110m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "400m Hurdles",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "3k Steeplechase",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x100m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x400m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "4x800m Relay",
              "performances": {
                "maleRecords": [{"performance":1}],
                "femaleRecords": [{"performance":2}],                
              }
            }, {
              "name": "Long Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Triple Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "High Jump",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Shot Put",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Discus",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Hammer Throw",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }, {
              "name": "Javelin",
              "performances": {
                "maleRecords": [{"performance":3}],
                "femaleRecords": [{"performance":4}]                
              }
            }
          ]
        };
      });

      it('should load records', function() {
        getAllRecordsRequest.resolve({ data: records });
        $scope.$digest();

        expect($scope.records).toEqual(expectedRecords);
      });
    });
  };

  describe('initialization', function() {
    itShouldLoadMeets('XC', 'crossCountryMeets');
    itShouldLoadMeets('Indoor', 'indoorMeets');
    itShouldLoadMeets('Outdoor', 'outdoorMeets');
    itShouldLoadTopPerformances();
    itShouldLoadRecords();
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
