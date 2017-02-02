'use strict';

angular.module('itcFrontendApp')

.filter('xcTime', function() {
  // Filter always returns a function that the view applies to an array
  return function(seconds) {
    // XC times are easy. Only need in mm:ss format aka 13:45.
    // This single m allows for small time to be 9:45 instead of 09:45
    return moment.duration(seconds, 'seconds').format('m:ss');
  };
})

.filter('trackTime', function() {
  return function(seconds) {
    // Format the time and seconds
    var time = moment.duration(seconds, 'seconds').format('m:ss');
    // Deal with the milliseconds
    // 1. Gets milliseconds by gettings the reminder when diving by 1
    // 2. Rounds to 2 decimal points --> Returns '0.xx' e.g. '0.75'
    // 3. Chop the 0 off and append the '.XX' eg. '.75'
    time += ((seconds % 1).toFixed(2)).substring(1,4);

    return time;
  };
})

.filter('trackDist', function() {
  return function(distance) {
    return distance.toFixed(2) + 'm';
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
})

.filter('n12br', function(){
  return function(data) {
    return data.replace(/\r\n?/g, '<br />');
  };
})

.filter('results', function(_) {
  return _.memoize(function(items) {
    var preFiltered = [];

    angular.forEach(items, function(item) {
      preFiltered.push(item);
    });

    var filtered = {};

    angular.forEach(preFiltered, function(result) {
      filtered[result.event.season] = {};
    });

    angular.forEach(preFiltered, function(result) {
      filtered[result.event.season][result.event.name] = [];
    });

    angular.forEach(preFiltered, function(result) {
      filtered[result.event.season][result.event.name].push(result);
    });

    angular.forEach(filtered, function(seasons) {
      angular.forEach(seasons, function(results) {
        results.sort(function (a, b) {
          return (a.performance > b.performance ? 1 : -1);
        });
        if(results[0].distanceResult){
          results.reverse();
        }
      });
    });

    return filtered;
  });
})

.filter('relayNames', function(_) {
  return function(items) {
    if(items.length === 1){
      return [items[0].name];
    }
    var filtered = [];

    angular.forEach(items, function(item) {
      filtered.push(_.last(item.name.split(' ')));
    });

    var stringFilt = filtered.join(', ');

    return [stringFilt];
  };
});