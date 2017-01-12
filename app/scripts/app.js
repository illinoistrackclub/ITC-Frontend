'use strict';

angular
  .module('itcFrontendApp', [
    'angulartics',
    'angulartics.google.analytics',
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
.constant('_', window._)
.config(function($mdThemingProvider) {

  var lightText = $mdThemingProvider.extendPalette('orange', {
    'contrastDefaultColor': 'light'
  });

  $mdThemingProvider.definePalette('orange', lightText);

  $mdThemingProvider.theme('default')
    .primaryPalette('orange');
});
