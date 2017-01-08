'use strict';

angular.module('itcFrontendApp')

.controller('ResultsCtrl', function(Api, EVENTS, $http, $q, $scope, _) {
  var sortByDate = function(array) {
    array.sort(function(a, b) { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
    array.reverse();
  };

  var hashMeetsToYear = function(meetsByYear, meets) {
    angular.forEach(meets, function(meet) {
      var year = new Date(meet.date).getFullYear();
      if (meetsByYear[year]) {
        meetsByYear[year].push(meet);
      } else {
        meetsByYear[year] = [ meet ];
      }
    });
  };

  var getMeets = function(season, scopeProperty) {
    Api.getAllMeetsBy('season=' + season).then(function(response) {
      var meets = response.data;
      var meetsByYear = {};

      sortByDate(meets);
      hashMeetsToYear(meetsByYear, meets);

      $scope[scopeProperty] = meetsByYear;
    });
  };

  var getTopPerformances = function() {
    Api.getAllTopPerformances().then(function(response) {
      var topPerformances = response.data;
      $scope.topPerformances = {};

      _.forEach(EVENTS, function(events, season) {
        $scope.topPerformances[season] = [];
        _.forEach(events, function(event) {
          $scope.topPerformances[season].push(_.find(topPerformances[season], { 'name': event }));
        });
      });
    });
  };

  var getRecords = function() {
    Api.getAllRecords().then(function(response) {
      var records = response.data;
      $scope.records = {};

      _.forEach(EVENTS, function(events, season) {
        $scope.records[season] = [];
        _.forEach(events, function(event) {
          $scope.records[season].push(_.find(records[season], { 'name': event }));
        });
      });
    });
  };

  getMeets('XC', 'crossCountryMeets');
  getMeets('Indoor', 'indoorMeets');
  getMeets('Outdoor', 'outdoorMeets');
  getTopPerformances();
  getRecords();

  $scope.events = EVENTS;
  $scope.loadAthletes = function() {
    var deferred = $q.defer();

    Api.getAllAthletesBy('search=' + $scope.athleteText).then(function(response) {
      deferred.resolve( response.data );
    });

    return deferred.promise;
  };
});
