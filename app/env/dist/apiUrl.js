'use strict';

angular.module('itcFrontendApp')

.service('ApiUrl', function() {
  this.getUrl = function() {
    return 'https://illinoistrackclub.herokuapp.com/';
  };
});
