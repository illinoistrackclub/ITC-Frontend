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

  // $scope.outdoorMeets = [{
  //   event: 'NIRCA Track & Field Nationals',
  //   date: 'April 8-9, 2017',
  //   location: 'Bloomington, IN'
  // }];
});
