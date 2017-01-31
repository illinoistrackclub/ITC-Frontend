'use strict';

angular.module('itcFrontendApp')

.controller('ContactCtrl', function($scope, $window) {
  $scope.emailCoach = function(email) {
    $window.open('mailto:' + email);
  };

  $scope.xcCoaches = [{
    name: 'Muneeb Ansari',
    position: 'President',
    email: 'illinoisxcclub+president@gmail.com',
    image: '/images/contacts/xc_president.jpg'
  }, {
    name: 'Ryan Somerfield',
    position: 'Head Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/xc_hc.jpg'
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
    name: 'Michael Frintner',
    position: 'President',
    email: 'illinoistfclub+president@gmail.com',
    image: '/images/contacts/tf_president.jpg'
  }, {
    name: 'Jared Ripoli',
    position: 'Head Coach',
    email: 'illinoistfclub+coach@gmail.com',
    image: '/images/contacts/tf_hc.jpg'
  }, {
    name: 'Andy Briggs',
    position: 'Treasurer',
    email: 'illinoistfclub+treasurer@gmail.com',
    image: '/images/contacts/tf_treasurer.jpg'
  }, {
    name: 'Anneliese Schulz',
    position: 'Secretary',
    email: 'illinoistfclub+secretary@gmail.com',
    image: '/images/contacts/tf_secretary.jpg'
  }, {
    name: 'Emily Foley',
    position: 'Social & Fundraising Chair',
    email: 'illinoistfclub+social@gmail.com',
    image: '/images/contacts/tf_social.jpg'
  }, {
    name: 'Sean Bruyere',
    position: 'Home Meet Coordinator',
    email: 'illinoistfclub+meetcoord@gmail.com',
    image: '/images/contacts/tf_home_meet.jpg'
  }, {
    name: 'Mateusz Lopez',
    position: 'Travel Coordinator & Jumps Coach',
    email: 'illinoistfclub+travel@gmail.com',
    image: '/images/contacts/tf_travel.jpg'
  }, {
    name: 'Tyler Splitt',
    position: 'Webmaster & Mid-D Coach',
    email: 'illinoistfclub+webmaster@gmail.com',
    image: '/images/contacts/tf_webmaster.jpg'
  }, {
    name: 'Mike Kreiser',
    position: 'Sprints Coach',
    email: 'mkreise2@illinois.edu',
    image: '/images/contacts/tf_sprints.jpg'
  }, 
  // {
  //   name: 'Tyler Splitt',
  //   position: 'Mid-D Coach',
  //   email: 'tylersplitt@gmail.com',
  //   image: '/images/contacts/tf_midd.jpg'
  // },
   {
    name: 'Ryan Somerfield',
    position: 'Distance & Steeplechase Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/tf_distance.jpg'
  }, 
  // {
  //   name: 'Mateusz Lopez',
  //   position: 'Jumps Coach',
  //   email: 'mlopez41@illinois.edu',
  //   image: '/images/contacts/tf_jumps.jpg'
  // },
  {
    name: 'Abby Ralph',
    position: 'Hurdles Coach',
    email: 'arralph2@illinois.edu',
    image: '/images/contacts/tf_hurdles.jpg'
  }, {
    name: 'Ali Djokic ',
    position: 'Throws Coach',
    email: '  djokic2@illinois.edu',
    image: '/images/contacts/tf_throws.jpg'
  }];
});