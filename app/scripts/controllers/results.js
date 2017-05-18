'use strict';

angular.module('itcFrontendApp')

.controller('ResultsCtrl', function(Api, EVENTS, $http, $q, $scope, _) {
  // Sorts meets so that the earliest meet is first
  var sortByDate = function(array) {
    array.sort(function(a, b) { return new Date(a.date).getTime() - new Date(b.date).getTime(); });
  };

  var hashMeetsToYear = function(meets) {
    var meetsByYear = {};

    angular.forEach(meets, function(meet) {
      var year = new Date(meet.date).getFullYear();
      if (meetsByYear[year]) {
        meetsByYear[year].push(meet);
      } else {
        meetsByYear[year] = [ meet ];
      }
    });

    return meetsByYear;
  };

  var getMeets = function(season, scopeProperty) {
    // Go get all of the meets from the API
    Api.getAllMeetsBy('season=' + season).then(function(response) {
      var meets = response.data;

      // Sort the meets by date
      sortByDate(meets);
      // Hash the meets by year
      $scope[scopeProperty] = hashMeetsToYear(meets);

      // Stop loading animation on meets page
      $scope.isLoadingMeets = false;
    });
  };

  var getTopPerformances = function() {
    // Go get the top performances from the API
    Api.getAllTopPerformances().then(function(response) {
      var topPerformances = response.data;
      $scope.topPerformances = {};

      // Map the top performances by season in the order provided by EVENTS
      _.forEach(EVENTS, function(events, season) {
        $scope.topPerformances[season] = [];
        _.forEach(events, function(event) {
          $scope.topPerformances[season].push(_.find(topPerformances[season], { 'name': event }));
        });
      });

      // Stop the loading animation on the top performances page
      $scope.isLoadingTP = false;
    });
  };

  var getRecords = function() {
    // Go get all of the records from API
    Api.getAllRecords().then(function(response) {
      var records = response.data;
      $scope.records = {};

      // Map the records by season in the order provided by EVENTS
      _.forEach(EVENTS, function(events, season) {
        $scope.records[season] = [];
        _.forEach(events, function(event) {
          $scope.records[season].push(_.find(records[season], { 'name': event }));
        });
      });

      // Stop loading animation on records page
      $scope.isLoadingRec = false;
    });
  };

  // Define events for ordering
  $scope.events = EVENTS;

  // Gets meets for each season (kinda bad how this is done)
  getMeets('XC', 'crossCountryMeets');
  getMeets('Indoor', 'indoorMeets');
  getMeets('Outdoor', 'outdoorMeets');

  // Gets all top performances
  getTopPerformances();
  // Gets all records
  getRecords();

  // Set loading to true
  $scope.isLoadingRec = true;
  $scope.isLoadingTP = true;
  $scope.isLoadingMeets = true;

  // Used om Athlete Search by the autocomplete search form.
  $scope.loadAthletes = function() {
    // Create a promise
    var deferred = $q.defer();

    // Send for search data
    Api.getAllAthletesBy('search=' + $scope.athleteText).then(function(response) {
      // Resolve promise we returned earlier with search results data
      deferred.resolve( response.data );
    });

    // Return promise to be resolved when search results return
    return deferred.promise;
  };

  $scope.$watch('selectedAthlete', function(newAthlete, oldAthlete) {
    if (newAthlete && oldAthlete !== newAthlete) {
      $scope.athletePerformances = undefined;
      $scope.athletePRs = undefined;

      $scope.loadingAthlete = true;

      var request1 = Api.getAthleteResults(newAthlete.id);
      var request2 = Api.getAthletePRs(newAthlete.id);

      $q.all([request1, request2]).then(function(responses) {
        setupAthleteResults(responses[0].data);
        setupAthletePRs(responses[1].data);

        $scope.loadingAthlete = false;
      });
    }
  });

  var setupAthleteResults = function(performances) {
    $scope.athletePerformances = {};

    // Map the performances by season in the order provided by EVENTS
    _.forEach(EVENTS, function(events, season) {
      $scope.athletePerformances[season] = [];

      _.forEach(events, function(event) {
        var foundResults = _.find(performances[season], { 'name': event });

        if (foundResults) {
          $scope.athletePerformances[season].push(foundResults);
        }
      });

      if ($scope.athletePerformances[season].length === 0) {
        delete $scope.athletePerformances[season];
      }
    });
  };

  var setupAthletePRs = function(performances) {
    $scope.athletePRs = {};

    _.forEach(EVENTS, function(events, season) {
      $scope.athletePRs[season] = [];

      _.forEach(events, function(event) {
        var foundResults = _.find(performances[season], { 'name': event });

        if (foundResults) {
          $scope.athletePRs[season].push(foundResults);
        }
      });

      if ($scope.athletePRs[season].length === 0) {
        delete $scope.athletePRs[season];
      }
    });
  };
});
