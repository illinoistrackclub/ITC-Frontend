'use strict';

angular.module('itcFrontendApp')

.controller('ContactCtrl', function($scope, $window) {
  $scope.emailCoach = function(email) {
    $window.open('mailto:' + email);
  };

  $scope.xcCoaches = [{
    name: 'Michael Fritner',
    position: 'President',
    email: 'illinoisxcclub+president@gmail.com',
    image: null
  }, {
    name: 'Ryan Somerfield',
    position: 'Head Coach',
    email: 'illinoisxcclub+coach@gmail.com',
    image: null
  }, {
    name: 'Emma Burkhardt',
    position: 'Gender Minority Captain',
    email: 'illinoisxcclub+genderminority@gmail.com',
    image: null
  }, {
    name: 'Mariela Marquez',
    position: 'Treasurer',
    email: 'illinoisxcclub+treasurer@gmail.com',
    image: null
  }, {
    name: 'Arturo Woodward-Montes',
    position: 'Secretary',
    email: 'illinoisxcclub+secretary@gmail.com',
    image: null
  }, {
    name: 'Megan Fritner',
    position: 'Social & Fundraising Chair',
    email: 'illinoisxcclub+social@gmail.com',
    image: null
  }, {
    name: 'Sean Bruyere',
    position: 'Home Meet Coordinator',
    email: 'illinoisxcclub+meetcoord@gmail.com',
    image: null
  }, {
    name: 'Jared Ripoli',
    position: 'Travel Coordinator',
    email: 'illinoisxcclub+travel@gmail.com',
    image: null
  }, {
    name: 'Chris Kennedy',
    position: 'Webmaster',
    email: 'illinoisxcclub+webmaster@gmail.com',
    image: null
  }];

  $scope.tfCoaches = [{
    name: 'Michael Fritner',
    position: 'President',
    email: 'illinoistfclub+president@gmail.com',
    image: null
  }, {
    name: 'Jared Ripoli',
    position: 'Head Coach',
    email: 'illinoistfclub+coach@gmail.com',
    image: null
  }, {
    name: 'Andy Briggs',
    position: 'Treasurer',
    email: 'illinoistfclub+treasurer@gmail.com',
    image: null
  }, {
    name: 'Anneliese Schultz',
    position: 'Secretary',
    email: 'illinoistfclub+secretary@gmail.com',
    image: null
  }, {
    name: 'Emily Foley',
    position: 'Social & Fundraising Chair',
    email: 'illinoistfclub+social@gmail.com',
    image: null
  }, {
    name: 'Sean Bruyere',
    position: 'Home Meet Coordinator',
    email: 'illinoistfclub+meetcoord@gmail.com',
    iamge: null
  }, {
    name: 'Mateusz Lopez',
    position: 'Travel Coordinator',
    email: 'illinoistfclub+travel@gmail.com',
    image: null
  }, {
    name: 'Tyler Splitt',
    position: 'Webmaster',
    email: 'illinoistfclub+webmaster@gmail.com',
    image: null
  }, {
    name: 'Mike Kreiser',
    position: 'Sprints Coach',
    email: 'mkreise2@illinois.edu',
    image: null
  }, {
    name: 'Tyler Splitt',
    position: 'Mid-D Coach',
    email: '',
    image: null
  }, {
    name: 'Ryan Somerfield',
    position: 'Distance & Steeplechase Coach',
    email: '',
    image: null
  }, {
    name: 'Mateusz Lopez',
    position: 'Jumps Coach',
    email: '',
    image: null
  }, {
    name: 'Abby Ralph',
    position: 'Hurdles Coach',
    email: '',
    image: null
  }, {
    name: 'Ali Djokic ',
    position: 'Throws Coach',
    email: '',
    image: null
  }];
});
