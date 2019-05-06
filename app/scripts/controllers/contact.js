'use strict';

angular.module('itcFrontendApp')

.controller('ContactCtrl', function($scope, $window) {
  // Opens mailto link in new tab/window
  // BUG: Chrome hates mailto links. Not our fault. Works on mobile and other browsers
  $scope.emailCoach = function(email) {
    $window.open('mailto:' + email);
  };

  $scope.xcCoaches = [{
    name: 'Julia Schultz',
    position: 'President',
    email: 'illinoisxcclub+president@gmail.com',
    image: '/images/contacts/xc_president.jpg'
  }, {
    name: 'Josh Mollway',
    position: 'Head Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/xc_hc.jpg'
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
    name: 'Nate Sun',
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
    name: 'Cody Lund',
    position: 'Head Coach',
    email: 'illinoistfclub+coach@gmail.com',
    image: '/images/contacts/tf_hc.jpg'
  }, {
    name: 'Andrew Rhode',
    position: 'Treasurer',
    email: 'illinoistfclub+treasurer@gmail.com',
    image: '/images/contacts/tf_treasurer.jpg'
  }, {
    name: 'Evan Patel',
    position: 'Secretary',
    email: 'illinoistfclub+secretary@gmail.com',
    image: '/images/contacts/tf_secretary.jpg'
  }, {
    name: 'Shan Amin',
    position: 'Social & Fundraising Chair',
    email: 'illinoistfclub+social@gmail.com',
    image: '/images/contacts/tf_social.jpg'
  }, {
    name: 'Bryan Himmel',
    position: 'Home Meet Coordinator',
    email: 'illinoistfclub+meetcoord@gmail.com',
    image: '/images/contacts/tf_home_meet.jpg'
  },{
    name: 'Andy Marszewski',
    position: 'Travel Coordinator',
    email: 'illinoistfclub+travel@gmail.com',
    image: '/images/contacts/tf_travel.jpg'
  },{
    name: 'Matthew Beckerman',
    position: 'Webmaster',
    email: 'illinoistfclub+webmaster@gmail.com',
    image: '/images/contacts/tf_webmaster.jpg'
  },{
    name: 'Alex Bienduga',
    position: 'Sprints Coach',
    email: 'ajb3@illinois.edu',
    image: '/images/contacts/tf_sprints.jpg'
  },{
    name: 'Josh Mollway',
    position: 'Distance Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/tf_distance.jpg'
  },{
    name: 'Patrick Willhalm',
    position: 'Mid D Coach',
    email: 'illinoistfclub+midd@gmail.com',
    image: '/images/contacts/tf_midd.jpg'
  }, {
    name: 'Justin Ostrem',
    position: 'Steeplechase Coach',
    email: 'jostrem2@illinois.edu',
    image: '/images/contacts/tf_steeple.jpg'
  },{
    name: 'Desarae Echevarria',
    position: 'Hurdles Coach',
    email: 'desarae2@illinois.edu',
    image: '/images/contacts/tf_hurdles.jpg'
  },{
    name: 'Inga Augustaitis',
    position: 'Throws Coach',
    email: 'ingaa2@illinois.edu',
    image: '/images/contacts/tf_throws.jpg'
  },{
    name: 'Jad Karajeh',
    position: 'Jumps Coach',
    email: 'karajeh2@illinois.edu',
    image: '/images/contacts/tf_jumps.jpg'
  }];
});