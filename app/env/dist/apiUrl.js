'use strict';

angular.module('itcFrontendApp')

.service('ApiUrl', function() {
  this.getUrl = function() {
    return 'http://localhost:8000/#/races';
  };
});
