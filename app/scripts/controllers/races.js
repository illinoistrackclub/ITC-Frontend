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
    event: 'EIU Walt Crawford Invite',
    date: 'August 28, 2016',
    location: 'Charleston, IL'
  }, {
    event: 'Augustana Brissman-Lundeen Invitational',
    date: 'September 12, 2016',
    location: 'Rock Island, IL'
  }, {
    event: 'Lucian Rosa Invitational',
    date: 'October 9, 2016',
    location: 'Somers, WI'
  }, {
    event: 'NIRCA Cross Country Regionals',
    date: 'October 23, 2016',
    location: 'Ames, IA'
  }, {
    event: 'NIRCA Cross Country Nationals',
    date: 'November 11, 2016',
    location: 'Hershey, PA'
  }];

  $scope.indoorMeets = [{
    event: 'John Craft Invite',
    date: 'January 21, 2017',
    location: 'Charleston, IL'
  }, {
    event: 'IWU Titan Open',
    date: 'January 28, 2017',
    location: 'Bloomington, IL'
  }, {
    event: 'ONU Invite',
    date: 'February 4, 2017',
    location: 'Bourbonnais, IL'
  }, {
    event: 'GVSU Big Meet',
    date: 'February 11, 2017',
    location: 'Allendale, MI'
  }, {
    event: 'Monmouth Invitational',
    date: 'February 11, 2017',
    location: 'Monmouth, IL'
  }, {
    event: 'Illinois Club Relays',
    date: 'February 25, 2017',
    location: 'Champaign, IL',
    important: true,
    link: 'clubrelays'
  }];

  $scope.outdoorMeets = [{
    event: 'Rose Hulman',
    date: 'March 18, 2017',
    location: 'Terre Haute, IN'
  }, {
    event: 'WashU Invite',
    date: 'March 31, 2017',
    location: 'St. Louis, MO'
  }, {
    event: 'Lindenwood John Creer Invitational',
    date: 'April 1, 2017',
    location: 'St. Charles, MO'
  }, {
    event: 'NIRCA Track & Field Nationals',
    date: 'April 8-9, 2017',
    location: 'Bloomington, IN',
    important: true,
    //link: 'http://www.clubrunning.org/races/race_info.php?race=460'
  }, {
    event: 'Illinois Twilight',
    date: 'April 22, 2017',
    location: 'Champaign, IL'
  }, {
    event: 'Illinois Club Peaks',
    date: 'April 29, 2017',
    location: 'Champaign, IL'
  }, {
    event: 'NCC Dr. Keeler',
    date: 'May 15, 2017',
    location: 'Naperville, IL'
  }, {
    event: 'NCC Gregory',
    date: 'May 22, 2017',
    location: 'Naperville, IL'
  }];
});
