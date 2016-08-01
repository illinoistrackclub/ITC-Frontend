'use strict';

angular.module('itcFrontendApp')

.filter('xcTime', function() {
  return function(seconds) {
    console.log(seconds);
    var time = moment.duration(seconds, 'seconds').format('m:ss');
    console.log(time);
    return time;
  };
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
