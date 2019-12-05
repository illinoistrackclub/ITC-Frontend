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
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  }, {
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  }, {
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  }, {
    event: 'NIRCA Cross Country Regionals',
    date: 'TBA',
    location: 'TBA'
  }, {
    event: 'NIRCA Cross Country Nationals',
    date: 'TBA',
    location: 'Hanover County, VA'
  }];

  $scope.indoorMeets = [{
    event: 'Titan First Chance',
    date: 'December 7, 2019',
    location: 'Bloomington, IL'
  },{
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'  
  },{
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'  
  },{
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  }, 
  {
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  }, 
  {
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  }, 
  {
    event: 'Illinois Club Relays',
    date: 'February 29, 2020',
    location: 'Champaign, IL',
    important: true,
    link: 'home_meets/clubrelays'
  }];

  $scope.outdoorMeets = [{
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  },{
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  },{
    event: 'TBA',
    date: 'TBA',
    location: 'TBA'
  },{
    event: 'NIRCA Track & Field Nationals',
    date: 'April 13-14, 2019',
    location: 'Oxford, OH',
    important: true,
    // link: 'https://clubrunning.org/races/race_info.php?race=766'
  }];
});
