'use strict';

angular.module('itcFrontendApp')

.filter('xcTime', function() {
  return function(seconds) {
    return moment.duration(seconds, 'seconds').format('m:ss');
  };
})

.filter('trackTime', function(_) {
  return function(seconds) {
    var time = moment.duration(seconds, 'seconds').format('m:ss');
    time += ((seconds % 1).toFixed(2)).substring(1,4);

    if (_.last(time.split('.')).length > 2) {
      time = time.slice(0, -1);
    }

    return time;
  };
})

.filter('trackDist', function() {
  return function(distance) {
    var distStr = distance.toString();
    if(distStr.length === 1){
      distStr = distStr.concat('.00');
    }
    if(distStr.length === 3){
      distStr = distStr.concat('0');
    }
    return distStr.concat('m');
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