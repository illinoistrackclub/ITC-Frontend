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
    date: 'September 8, 2017',
    location: 'Aurora, IL'
  }, {
    event: 'Augustana Brissman-Lundeen Invitational',
    date: 'September 22, 2017',
    location: 'Rock Island, IL'
  }, {
    event: 'Lucian Rosa Invitational',
    date: 'October 7, 2017',
    location: 'Somers, WI'
  }, {
    event: 'NIRCA Cross Country Regionals',
    date: 'October 21, 2017',
    location: 'Iowa City, IA'
  }, {
    event: 'NIRCA Cross Country Nationals',
    date: 'November 11, 2017',
    location: 'East Lansing, MI'
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
  }, {
    event: 'Illinois Club Relays',
    date: 'February 24, 2018',
    location: 'Champaign, IL',
    important: true,
    link: 'home_meets/clubrelays'
  }];

  $scope.outdoorMeets = [{
    event: 'Rose Hulman',
    date: 'March 17, 2018',
    location: 'Terre Haute, IN'
  }, {
    event: 'WashU Invite',
    date: 'March 30, 2018',
    location: 'St. Louis, MO'
  }, {
    event: 'NIRCA Track & Field Nationals',
    date: 'April 14-15, 2017',
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
