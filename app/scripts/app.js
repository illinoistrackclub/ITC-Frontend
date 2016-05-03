'use strict';

/**
 * @ngdoc overview
 * @name itcFrontendApp
 * @description 
 * # Main module of the application. 
 * 
 * This sets up universal settings
 */

angular
  .module('itcFrontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])

  /**
   * @ngdoc overview
   * @name  config module
   * @description 
   * # Config module of the application
   * 
   * $routeProvider sets up the routes (urls) and controllers (js files) of the site
   */

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
