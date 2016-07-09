'use strict';

angular.module('itcFrontendApp')

.service('Api', function($http) {

  var urlBase = 'localhost:8000/';

  this.getAllAthletes = function() {
    return $http.get(urlBase + 'athletes/');
  };

  this.getAthlete = function(id) {
    return $http.get(urlBase + 'athletes/getAthlete/' + id + '/');
  };

  this.getAllEvents = function() {
    return $http.get(urlBase + 'events/');
  };

  this.getEvent = function(id) {
    return $http.get(urlBase + 'events/getEvent/' + id + '/');
  };

  this.getAllMeets = function() {
    return $http.get(urlBase + 'meets/');
  };

  this.getMeet = function(id) {
    return $http.get(urlBase + 'meets/getMeet/' + id + '/');
  };

  this.getAllResults = function() {
    return $http.get(urlBase + 'results/');
  };

  this.getResult = function(id) {
    return $http.get(urlBase + 'results/getResult/' + id + '/');
  };
});
