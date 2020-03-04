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
  },{
    event: 'NIRCA Great Plains Regional',
    date: 'TBA',
    location: 'TBA'
  },{
    event: 'NIRCA Cross Country Nationals',
    date: 'TBA',
    location: 'Mechanicsville, VA'
  }];

  $scope.indoorMeets = [{
    event: 'Titan First Chance',
    date: 'December 7, 2019',
    location: 'Bloomington, IL'
  },{
    event: 'IWU Titan Open',
    date: 'February 1, 2020',
    location: 'Bloomington, IL'  
  }, {
    event: 'UIndy Team Invitational',
    date: 'February 15, 2020',
    location: 'Indianapolis, IN'  
  }, {
    event: 'UChicago Margaret Bradley Invite',
    date: 'February 22, 2020',
    location: 'Chicago, IL'  
  }, {
    event: 'Illinois Club Relays',
    date: 'February 29, 2020',
    location: 'Champaign, IL',
    important: true,
    link: 'home_meets/clubrelays'
  }];

  $scope.outdoorMeets = [{
    event: 'IWU Polar Bear Invitational',
    date: 'March 28, 2020',
    location: 'Marion, IN'
  },{
    event: 'NIRCA Track & Field Nationals',
    date: 'April 4-5, 2020',
    location: 'Oxford, OH',
    important: true,
    // link: 'https://clubrunning.org/races/race_info.php?race=766'
  },{
    event: 'EIU Big Blue Classic',
    date: 'April 11, 2020',
    location: 'Charleston, IL'
  },{
    event: 'True Blue Open',
    date: 'April 25, 2020',
    location: 'Jacksonville, IL'
  },{
    event: 'Dr. Keeler Invitational',
    date: 'May 7-8, 2020',
    location: 'Naperville, IL'
  },{
    event: 'Gregory Invitational',
    date: 'May 13-14, 2020',
    location: 'Naperville, IL'
  }];
});
