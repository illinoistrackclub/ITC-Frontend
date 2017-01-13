'use strict';

angular.module('itcFrontendApp')

.controller('ContactCtrl', function($scope, $window) {
  $scope.emailCoach = function(email) {
    $window.open('mailto:' + email);
  };

  $scope.xcCoaches = [{
    name: 'Michael Frintner',
    position: 'President',
    email: 'illinoisxcclub+president@gmail.com',
    image: '/images/contacts/itc_wings.png'
  }, {
    name: 'Ryan Somerfield',
    position: 'Head Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Emma Burkhardt',
    position: 'Gender Minority Captain',
    email: 'illinoisxcclub+genderminority@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Mariela Marquez',
    position: 'Treasurer',
    email: 'illinoisxcclub+treasurer@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Arturo Woodward-Montes',
    position: 'Secretary',
    email: 'illinoisxcclub+secretary@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Megan Frintner',
    position: 'Social & Fundraising Chair',
    email: 'illinoisxcclub+social@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Sean Bruyere',
    position: 'Home Meet Coordinator',
    email: 'illinoisxcclub+meetcoord@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Jared Ripoli',
    position: 'Travel Coordinator',
    email: 'illinoisxcclub+travel@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Chris Kennedy',
    position: 'Webmaster',
    email: 'illinoisxcclub+webmaster@gmail.com',
    image: '/images/contacts/placeholder.png'
  }];

  $scope.tfCoaches = [{
    name: 'Michael Frintner',
    position: 'President',
    email: 'illinoistfclub+president@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Jared Ripoli',
    position: 'Head Coach',
    email: 'illinoistfclub+coach@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Andy Briggs',
    position: 'Treasurer',
    email: 'illinoistfclub+treasurer@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Anneliese Schultz',
    position: 'Secretary',
    email: 'illinoistfclub+secretary@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Emily Foley',
    position: 'Social & Fundraising Chair',
    email: 'illinoistfclub+social@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Sean Bruyere',
    position: 'Home Meet Coordinator',
    email: 'illinoistfclub+meetcoord@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Mateusz Lopez',
    position: 'Travel Coordinator',
    email: 'illinoistfclub+travel@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Tyler Splitt',
    position: 'Webmaster',
    email: 'illinoistfclub+webmaster@gmail.com',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Mike Kreiser',
    position: 'Sprints Coach',
    email: 'mkreise2@illinois.edu',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Tyler Splitt',
    position: 'Mid-D Coach',
    email: '',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Ryan Somerfield',
    position: 'Distance & Steeplechase Coach',
    email: '',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Mateusz Lopez',
    position: 'Jumps Coach',
    email: '',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Abby Ralph',
    position: 'Hurdles Coach',
    email: '',
    image: '/images/contacts/placeholder.png'
  }, {
    name: 'Ali Djokic ',
    position: 'Throws Coach',
    email: '',
    image: '/images/contacts/placeholder.png'
  }];
});