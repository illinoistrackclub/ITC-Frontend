'use strict';

angular.module('itcFrontendApp')

.controller('ContactCtrl', function($scope, $window) {
  // Opens mailto link in new tab/window
  // BUG: Chrome hates mailto links. Not our fault. Works on mobile and other browsers
  $scope.emailCoach = function(email) {
    $window.open('mailto:' + email);
  };

  $scope.xcCoaches = [{
    name: 'Muneeb Ansari',
    position: 'President',
    email: 'illinoisxcclub+president@gmail.com',
    image: '/images/contacts/xc_president.jpg'
  }, {
    name: 'Richard Skogsberg',
    position: 'Head Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/tf_distance.jpg'
  }, {
    name: 'Mariela Marquez',
    position: 'Treasurer',
    email: 'illinoisxcclub+treasurer@gmail.com',
    image: '/images/contacts/xc_treasurer.jpg'
  }, {
    name: 'Anneliese Schulz',
    position: 'Gender Minority Captain',
    email: 'illinoisxcclub+genderminority@gmail.com',
    image: '/images/contacts/tf_secretary.jpg'
  }, {
    name: 'Cody Lund',
    position: 'Secretary',
    email: 'illinoisxcclub+secretary@gmail.com',
    image: '/images/contacts/xc_secretary.jpg'
  }, {
    name: 'Riley Maloney',
    position: 'Social & Fundraising Chair',
    email: 'illinoisxcclub+social@gmail.com',
    image: '/images/contacts/xc_social.jpg'
  }, {
    name: 'Sean Frintner',
    position: 'Home Meet Coordinator',
    email: 'illinoisxcclub+meetcoord@gmail.com',
    image: '/images/contacts/xc_home_meet.jpg'
  }, {
    name: 'Austin Kuehr',
    position: 'Travel Coordinator',
    email: 'illinoisxcclub+travel@gmail.com',
    image: '/images/contacts/xc_travel.jpg'
  }, {
    name: 'Mackenzie Bach',
    position: 'Webmaster',
    email: 'illinoisxcclub+webmaster@gmail.com',
    image: '/images/contacts/xc_webmaster.jpg'
  }];

  $scope.tfCoaches = [{
    name: 'Mateusz Lopez',
    position: 'President & Jumps Coach',
    email: 'illinoistfclub+president@gmail.com',
    image: '/images/contacts/tf_president.jpg'
  }, {
    name: 'Tyler Splitt',
    position: 'Head Coach',
    email: 'illinoistfclub+coach@gmail.com',
    image: '/images/contacts/tf_hc.jpg'
  }, {
    name: 'Noel Brindise',
    position: 'Treasurer',
    email: 'illinoistfclub+treasurer@gmail.com',
    image: '/images/contacts/tf_treasurer.jpg'
  }, {
    name: 'Leonel Rodriguez',
    position: 'Secretary',
    email: 'illinoistfclub+secretary@gmail.com',
    image: '/images/contacts/tf_secretary.jpg'
  }, {
    name: 'Adriana Miltko',
    position: 'Social & Fundraising Chair',
    email: 'illinoistfclub+social@gmail.com',
    image: '/images/contacts/tf_social.jpg'
  }, {
    name: 'Sean Frintner',
    position: 'Home Meet Coordinator',
    email: 'illinoistfclub+meetcoord@gmail.com',
    image: '/images/contacts/tf_home_meet.jpg'
  }, {
    name: 'Michael Jang',
    position: 'Travel Coordinator & Hurdles Coach',
    email: 'illinoistfclub+travel@gmail.com',
    image: '/images/contacts/tf_travel.jpg'
  }, {
    name: 'Muneeb Ansari',
    position: 'Webmaster',
    email: 'illinoistfclub+webmaster@gmail.com',
    image: '/images/contacts/tf_webmaster.jpg'
  }, {
    name: 'Becky Haight',
    position: 'Sprints Coach',
    email: 'rhaight2@illinois.edu ',
    image: '/images/contacts/tf_sprints.jpg'
  },
  {
    name: 'Keith Lee',
    position: 'Mid-D Coach',
    email: 'keithclee@gmail.com',
    image: '/images/contacts/tf_midd.jpg'
  },
   {
    name: 'Richard Skogsberg',
    position: 'Distance Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/tf_distance.jpg'
  },

  {name: 'Josh Feldman',
    position: 'Steeplechase Coach',
    email: 'jmfeldm2@illinois.edu',
    image: '/images/contacts/tf_steeple.jpg'
  },

   {
    name: 'Thomas Nute ',
    position: 'Throws Coach',
    email: '    tnute2@illinois.edu',
    image: '/images/contacts/tf_throws.jpg'
  }];
});