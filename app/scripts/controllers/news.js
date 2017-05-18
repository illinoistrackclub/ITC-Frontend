'use strict';

angular.module('itcFrontendApp')

.controller('NewsCtrl', function(Api, $http, $q, $scope) {
  // Sort news such that most recent articles are on top
  var sortByDate = function(array) {
    array.sort(function(a, b) { return new Date(a.post_datetime).getTime() - new Date(b.post_datetime).getTime(); });
	};

  // Organize news by year
  var hashNewsToYear = function(news) {
    var newsByYear = {};

    angular.forEach(news, function(post) {
      var year = new Date(post.post_datetime).getFullYear();
      if (newsByYear[year]) {
        newsByYear[year].push(post);
      } else {
        newsByYear[year] = [ post ];
      }
    });

    return newsByYear;
  };

  var getNews = function() {
    Api.getAllNews().then(function(response) {
      //Grab the news from response
      var news = response.data;

      // Sort it
      sortByDate(news);
      // Hash it by year
      $scope.news = hashNewsToYear(news);

      // Loading is done, let view know
      $scope.isLoadingNews = false;
    });
  };

  // Get news immediately when page is loaded.
  getNews();
  // Set current year to be default year?
  $scope.curYear = '' + new Date().getFullYear();
  $scope.isLoadingNews = true;
});
