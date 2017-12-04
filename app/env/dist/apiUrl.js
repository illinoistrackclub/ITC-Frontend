'use strict';

angular.module('itcFrontendApp')

.service('ApiUrl', function() {
  this.getUrl = function() {
    return 'http://illinoistrackclub.herokuapp.com/';
  };
});
