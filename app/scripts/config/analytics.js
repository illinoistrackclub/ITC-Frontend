'use strict';

angular.module('itcFrontendApp')

// Routing for the site. Each view is defined in each 'when' object
// templateUrl = the HTML file
// controller = the JS file
.constant('ANALYTICS', {
  CONSTITUTIONS: {
    ITC: 'Opened ITC Constitution',
    IXC: 'Opened IXC Constitution'
  },
  MEDIA: {
    PHOTOS: 'Went to Facebook photos page'
  },
  SOCIAL: {
    FACEBOOK: 'Went to Facebook page',
    INSTAGRAM: 'Went to Instagram page',
    TWITTER: 'Went to Twitter page',
    YOUTUBE: 'Went to YouTube page'
  }
});