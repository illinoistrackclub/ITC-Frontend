'use strict';

angular.module('itcFrontendApp')

.filter('xcTime', function() {
  return function(seconds) {
    return moment.duration(seconds, 'seconds').format('m:ss');
  };
})

.filter('trackTime', function() {
  return function(seconds) {
    var time = moment.duration(seconds, 'seconds').format('m:ss.SS');

    if (_.last(time.split('.')).length > 2) {
      time = time.slice(0, -1);
    }

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
