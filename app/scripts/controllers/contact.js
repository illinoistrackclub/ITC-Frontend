'use strict';

angular.module('itcFrontendApp')

.controller('ContactCtrl', function($scope, $window) {
  // Opens mailto link in new tab/window
  // BUG: Chrome hates mailto links. Not our fault. Works on mobile and other browsers
  $scope.emailCoach = function(email) {
    $window.open('mailto:' + email);
  };

  $scope.xcCoaches = [{
    name: 'Julia Shultz',
    position: 'President',
    email: 'illinoisxcclub+president@gmail.com',
    image: '/images/contacts/xc_president.jpg'
  }, {
    name: 'Josh Mollway',
    position: 'Head Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/tf_distance.jpg'
  }, {
    name: 'Alex Kogen',
    position: 'Treasurer',
    email: 'illinoisxcclub+treasurer@gmail.com',
    image: '/images/contacts/xc_treasurer.jpg'
  }, {
    name: 'Riley Maloney',
    position: 'Gender Minority Captain',
    email: 'illinoisxcclub+genderminority@gmail.com',
    image: '/images/contacts/xc_genderminority.jpg'
  }, {
    name: 'Evan Patel',
    position: 'Secretary',
    email: 'illinoisxcclub+secretary@gmail.com',
    image: '/images/contacts/xc_secretary.jpg'
  }, {
    name: 'Riley Maloney',
    position: 'Social & Fundraising Chair',
    email: 'illinoisxcclub+social@gmail.com',
    image: '/images/contacts/xc_social.jpg'
  }, {
    name: 'Bryan Himmel',
    position: 'Home Meet Coordinator',
    email: 'illinoisxcclub+meetcoord@gmail.com',
    image: '/images/contacts/xc_home_meet.jpg'
  }, {
    name: 'Connor Farrell',
    position: 'Travel Coordinator',
    email: 'illinoisxcclub+travel@gmail.com',
    image: '/images/contacts/xc_travel.jpg'
  }, {
    name: 'Jarod Meyer',
    position: 'Webmaster',
    email: 'illinoisxcclub+webmaster@gmail.com',
    image: '/images/contacts/xc_webmaster.jpg'
  }];

  $scope.tfCoaches = [{
    name: 'Alex Bienduga',
    position: 'President',
    email: 'illinoistfclub+president@gmail.com',
    image: '/images/contacts/tf_president.jpg'
  }, {
    name: 'Keith Lee',
    position: 'Head Coach and Mid D Coach',
    email: 'illinoistfclub+coach@gmail.com',
    image: '/images/contacts/tf_hc.jpg'
  }, {
    name: 'Noel Brindise',
    position: 'Treasurer',
    email: 'illinoistfclub+treasurer@gmail.com',
    image: '/images/contacts/tf_treasurer.jpg'
  }, {
    name: 'Cody Lund',
    position: 'Secretary',
    email: 'illinoistfclub+secretary@gmail.com',
    image: '/images/contacts/tf_secretary.jpg'
  }, {
    name: 'Shan Amin',
    position: 'Social & Fundraising Chair',
    email: 'illinoistfclub+social@gmail.com',
    image: '/images/contacts/tf_social.jpg'
  }, {
    name: 'Sean Frintner',
    position: 'Home Meet Coordinator',
    email: 'illinoistfclub+meetcoord@gmail.com',
    image: '/images/contacts/tf_home_meet.jpg'
  },{
    name: 'Michael Jang',
    position: 'Travel Coordinator & Hurdles Coach',
    email: 'illinoistfclub+travel@gmail.com',
    image: '/images/contacts/tf_travel.jpg'
  },{
    name: 'Josh Mollway',
    position: 'Webmaster',
    email: 'illinoistfclub+webmaster@gmail.com',
    image: '/images/contacts/tf_webmaster.jpg'
  },{
    name: 'Becky Haight',
    position: 'Sprints Coach',
    email: 'rhaight2@illinois.edu ',
    image: '/images/contacts/tf_sprints.jpg'
  },{
    name: 'Richard Skogsberg',
    position: 'Distance Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/tf_distance.jpg'
  },{
    name: 'Josh Feldman',
    position: 'Steeplechase Coach',
    email: 'jmfeldm2@illinois.edu',
    image: '/images/contacts/tf_steeple.jpg'
  },{
    name: 'Inga Augustaitis',
    position: 'Throws Coach',
    email: 'ingaa2@illinois.edu',
    image: '/images/contacts/tf_throws.jpg'
  },{
    name: 'Justin Nebel',
    position: 'Jumps Coach',
    email: 'jrnebel2@illinois.edu ',
    image: '/images/contacts/tf_jumps.jpg'
  }];
});