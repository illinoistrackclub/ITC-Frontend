'use strict';

angular.module('itcFrontendApp')

.controller('NewsCtrl', function(Api, $http, $q, $scope) {
  var sortByDate = function(array) {
    array.sort(function(a, b) { return new Date(b.post_datetime).getTime() - new Date(a.post_datetime).getTime(); });
    array.reverse();
	};

  var hashNewsToYear = function(newsByYear, news) {
    angular.forEach(news, function(post) {
      var year = new Date(post.post_datetime).getFullYear();
      if (newsByYear[year]) {
        newsByYear[year].push(post);
      } else {
        newsByYear[year] = [ post ];
      }
    });
  };

  var getNews = function() {
    Api.getAllNews().then(function(response) {
      var news = response.data;
      var newsByYear = {};

      sortByDate(news);
      hashNewsToYear(newsByYear, news);
      $scope.news = newsByYear;
    });
	  $scope.curYear = ''+new Date().getFullYear();
    $scope.isLoadingNews = false;
  };

  getNews();
  $scope.isLoadingNews = true;
});
