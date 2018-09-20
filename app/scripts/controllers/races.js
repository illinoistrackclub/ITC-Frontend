'use strict';

angular.module('itcFrontendApp')

.controller('RacesCtrl', function($location, $scope) {
  // Opens club relays view when you click on club relays
  $scope.openMeet = function(view) {
    if (view) {
      $location.path(view);
    }
  };

  $scope.crossMeets = [{
    event: 'Aurora Spartan Classic',
    date: 'September 7, 2018',
    location: 'Aurora, IL'
  }, {
    event: 'Olivet Nazarene University Midwest Intercollegiate',
    date: 'September 28, 2018',
    location: 'Bourbonnais, IL'
  }, {
    event: 'Lewis University Conference Crossover',
    date: 'October 6, 2018',
    location: 'Romeoville, IL'
  }, {
    event: 'NIRCA Cross Country Regionals',
    date: 'October 20, 2018',
    location: 'Urbana, IL'
  }, {
    event: 'NIRCA Cross Country Nationals',
    date: 'November 10, 2018',
    location: 'Lexington, KY'
  }];

  $scope.indoorMeets = [{
    event: 'Titan First Chance',
    date: 'December 2, 2017',
    location: 'Bloomington, IL'
  }, {
    event: 'Illini Open***',
    date: 'January 13, 2018',
    location: 'Champaign, IL'
  },{
    event: 'John Craft Invite',
    date: 'January 20, 2018',
    location: 'Charleston, IL'
  }, {
    event: 'IWU Titan Open',
    date: 'January 27, 2018',
    location: 'Bloomington, IL'
  }, 
  {
    event: 'Olivet Nazarene Invitational',
    date: 'February 3, 2018',
    location: 'Bourbonnais, IL'
  }, 
  {
    event: 'GVSU Big Meet',
    date: 'February 10, 2018',
    location: 'Allendale, MI'
  }, 
  {
    event: 'Illinois Orange and Blue',
    date: 'February 17, 2018',
    location: 'Champaign, IL'
  },
  {
    event: 'Illinois Club Relays',
    date: 'February 24, 2018',
    location: 'Champaign, IL',
    important: true,
    link: 'home_meets/clubrelays'
  }];

  $scope.outdoorMeets = [{
    event: 'Augustana College Early Spring Opener',
    date: 'March 24, 2018',
    location: 'Rock Island'
  }, {
    event: 'WashU Invite',
    date: 'March 30, 2018',
    location: 'St. Louis, MO'
  }, {
    event: 'John Creer Invitational',
    date: 'March 31, 2018',
    location: 'Lindenwood, MO'
  },{
    event: 'Western Illinois Lee Calhoun Memorial',
    date: 'April 7, 2018',
    location: 'Macomb, IL'
  },{
    event: 'NIRCA Track & Field Nationals',
    date: 'April 14-15, 2018',
    location: 'Bloomington, IN',
    important: true,
    //link: 'http://www.clubrunning.org/races/race_info.php?race=460'
  }, {
    event: 'Illinois Club Peaks',
    date: 'April 21, 2018',
    location: 'Champaign, IL',
    important: true,
    link: 'home_meets/clubpeaks'
  }, {
    event: 'NCC Dr. Keeler',
    date: 'May 10-11, 2018',
    location: 'Naperville, IL'
  }, {
    event: 'NCC Gregory',
    date: 'May 16-17, 2018',
    location: 'Naperville, IL'
  }];
});
