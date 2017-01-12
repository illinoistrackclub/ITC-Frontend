'use strict';

describe('Controller: NewsCtrl', function () {

  // load the controller's module
  beforeEach(module('itcFrontendApp'));

<<<<<<< HEAD
  var Api, $http, $q, $scope, $timeout;
  var getAllNewsRequest;
  var NewsCtrl;

  // Initialize the controller
  beforeEach(inject(function (_Api_, $controller, _$http_, _$q_, _$rootScope_, _$timeout_) {
    Api = _Api_;
    $http = _$http_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $timeout = _$timeout_;

    getAllNewsRequest = $q.defer();

    spyOn(Api, 'getAllNews').and.returnValue(getAllNewsRequest.promise);

    NewsCtrl = $controller('NewsCtrl', {
      $scope:$scope
    });
  }));

  var itShouldLoadNews = function() {
    it('should call Api to get news', function() {
      expect(Api.getAllNews).toHaveBeenCalled();
    });

    describe('after promise resolves', function() {
      var news, expectedNews;

      beforeEach(function() {
        news = [{
          post_datetime: '2017-01-09T19:44:00Z'
        }, {
          post_datetime: '2017-01-09T20:44:00Z'
        }, {
          post_datetime: '2016-01-09T19:44:00Z'
        }, {
          post_datetime: '2013-01-09T19:44:00Z'
        }, {
          post_datetime: '2016-01-09T20:44:00Z'
        }, {
          post_datetime: '2012-01-09T19:44:00Z'
        }, {
          post_datetime: '2011-01-09T19:44:00Z'
        }, {
          post_datetime: '2015-01-09T19:44:00Z'
        }, {
          post_datetime: '2014-01-09T19:44:00Z'
        }];

        expectedNews = {
          2017: [{post_datetime: '2017-01-09T19:44:00Z'},{post_datetime: '2017-01-09T20:44:00Z'}],
          2016: [{post_datetime: '2016-01-09T19:44:00Z'},{post_datetime: '2016-01-09T20:44:00Z'}],
          2015: [{post_datetime: '2015-01-09T19:44:00Z'}],
          2014: [{post_datetime: '2014-01-09T19:44:00Z'}],
          2013: [{post_datetime: '2013-01-09T19:44:00Z'}],
          2012: [{post_datetime: '2012-01-09T19:44:00Z'}],
          2011: [{post_datetime: '2011-01-09T19:44:00Z'}]
        };
      });
      
      it('should sort and hash news by year', function() {
        getAllNewsRequest.resolve({ data: news});
        $scope.$digest();

        expect($scope.news).toEqual(expectedNews);
      });
    });
  };

  describe('initialization', function() {
    itShouldLoadNews();
=======
  var NewsCtrl;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    NewsCtrl = $controller('NewsCtrl', {});
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
>>>>>>> ryan
  });
});
