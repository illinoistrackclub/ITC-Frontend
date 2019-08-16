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
    event: 'Aurora University Spartan Classic',
    date: 'September 13, 2019',
    location: 'Oakhurst Forest Preserve, Aurora, IL'
  }, {
    event: 'Augustana College Brissman Lundeen Invitational',
    date: 'October 4, 2019',
    location: 'Saukie Golf Course, Rock Island, IL',
  }, {
    event: 'Lewis University Lewis Crossover',
    date: 'October 12, 2019',
    location: 'Lewis XC Course, Romeoville, IL',
  }, {
    event: 'NIRCA Great Plains Regional',
    date: 'November 2, 2019',
    location: 'UIUC Arboretum, Urbana, IL'
  }, {
    event: 'NIRCA Cross Country Nationals',
    date: 'November 16, 2019',
    location: 'Pole Green Park, Hanover County, VA'
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
    event: 'WashU Invitational',
    date: 'March 29, 2019',
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
    location: 'Oxford, OH',
    important: true,
    // link: 'https://clubrunning.org/races/race_info.php?race=766'
  },{
    event: 'True Blue Open',
    date: 'April 27, 2019',
    location: 'Jacksonville, IL'
  },{
    event: 'NCC Dr. Keeler',
    date: 'May 9-10, 2019',
    location: 'Naperville, IL'
  },{
    event: 'NCC Gregory',
    date: 'May 15-16, 2019',
    location: 'Naperville, IL'
  }];
});
