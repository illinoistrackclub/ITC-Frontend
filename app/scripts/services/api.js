'use strict';

angular.module('itcFrontendApp')

.service('Api', function($http) {

  var urlBase = 'http://illinoistrackclub.herokuapp.com/';

  this.getAllAthletes = function() {
    return $http.get(urlBase + 'athletes/');
  };

  this.getAllAthletesBy = function(filter) {
    return $http.get(urlBase + 'athletes/?' + filter);
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

  this.getAllMeetsBy = function(filter) {
    return $http.get(urlBase + 'meets/?' + filter);
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
