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
    date: 'December 1, 2018',
    location: 'Bloomington, IL'
  },{
    event: 'John Craft Invite',
    date: 'January 19, 2019',
    location: 'Charleston, IL'  
  },{
    event: 'Titan Open',
    date: 'January 26, 2019',
    location: 'Bloomington, IL'  
  },{
    event: 'Jim Green Invite',
    date: 'February 2, 2019',
    location: 'Jacksonville, IL'
  }, 
  {
    event: 'UIndy Invite',
    date: 'February 9, 2019',
    location: 'Indianapolis, IN'
  }, 
  {
    event: 'GVSU Big Meet',
    date: 'February 9, 2019',
    location: 'Allendale, MI'
  }, 
  {
    event: 'Illinois Club Relays',
    date: 'February 23, 2019',
    location: 'Champaign, IL',
    important: true,
    link: 'home_meets/clubrelays'
  }];

  $scope.outdoorMeets = [{
    event: 'WashU Mini Meet',
    date: 'March 24, 2019',
    location: 'St. Louis, MO'
  },{
    event: 'John Creer Invitational',
    date: 'March 30, 2019',
    location: 'Lindenwood, MO'
  },{
    event: 'Millikin',
    date: 'April 6, 2019',
    location: 'Decatur, IL'
  },{
    event: 'NIRCA Track & Field Nationals',
    date: 'April 13-14, 2019',
    location: 'Miami, OH',
    important: true,
    //link: 'http://www.clubrunning.org/races/race_info.php?race=460'
  },{
    event: 'True Blue Open',
    date: 'April 27, 2019',
    location: 'Jacksonville, IL'
  },{
    event: 'NCC Dr. Keeler',
    date: 'May 19-10, 2019',
    location: 'Naperville, IL'
  },{
    event: 'NCC Gregory',
    date: 'May 15-16, 2019',
    location: 'Naperville, IL'
  }];
});
