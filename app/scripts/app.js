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
})
.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];

    angular.forEach(items, function(item) {
      filtered.push(item);
    });

    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });

    if (reverse) {
      filtered.reverse();
    }

    return filtered;
  };
});
