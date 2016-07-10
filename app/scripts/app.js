'use strict';

angular
  .module('itcFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
.config(function($mdThemingProvider) {

  var lightText = $mdThemingProvider.extendPalette('orange', {
    'contrastDefaultColor': 'light'
  });

  $mdThemingProvider.definePalette('orange', lightText);

  $mdThemingProvider.theme('default')
    .primaryPalette('orange');
});
