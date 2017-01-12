'use strict';

describe('service: Api', function() {
  beforeEach(module('itcFrontendApp'));

  var Api, $http, $q, urlBase;
  var httpGet;

  beforeEach(inject(function(_Api_, _$http_, _$q_) {
    Api = _Api_;
    $http = _$http_;
    $q = _$q_;

    // urlBase = 'http://illinoistrackclub.herokuapp.com/';
    urlBase = 'http://localhost:8000/';

    httpGet = $q.defer();

    spyOn($http, 'get').and.returnValue(httpGet.promise);
  }));

  var itShouldCallGET = function(getOptions) {
    it('should call GET on the server', function() {
      var options = getOptions();
      expect($http.get).toHaveBeenCalledWith(options.url);
    });
  };

  var itShouldCallGETWithCache = function(getOptions) {
    it('should call GET on the server', function() {
      var options = getOptions();
      expect($http.get).toHaveBeenCalledWith(options.url, options.cache);
    });
  };


  var itShouldReturnAPromise = function(getOptions) {
    it('should return a promise', function() {
      var options = getOptions();
      expect(options.funcReturn).toBe(options.promise);
    });
  };

  describe('getAllAthletes', function() {
    itShouldCallGET(function() {
      return {
        run: Api.getAllAthletes(),
        url: urlBase + 'athletes/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllAthletes(),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllAthletesBy', function() {
    var filter;

    beforeEach(function() {
      filter = 'search=some name';
    });

    itShouldCallGET(function() {
      return {
        run: Api.getAllAthletesBy(filter),
        url: urlBase + 'athletes/?' +  filter
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllAthletesBy(filter),
        promise: httpGet.promise
      };
    });
  });

  describe('getAthlete', function() {
    var id;

    beforeEach(function() {
      id = 5;
    });

    itShouldCallGET(function() {
      return {
        run: Api.getAthlete(id),
        url: urlBase + 'athletes/getAthlete/' +  id + '/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAthlete(id),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllEvents', function() {
    itShouldCallGET(function() {
      return {
        run: Api.getAllEvents(),
        url: urlBase + 'events/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllEvents(),
        promise: httpGet.promise
      };
    });
  });

  describe('getEvent', function() {
    var id;

    beforeEach(function() {
      id = 5;
    });

    itShouldCallGET(function() {
      return {
        run: Api.getEvent(id),
        url: urlBase + 'events/getEvent/' +  id + '/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getEvent(id),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllTopPerformances', function() {
    itShouldCallGETWithCache(function() {
      return {
        run: Api.getAllTopPerformances(),
        url: urlBase + 'events/getTopPerformances/',
        cache: {cache:true}
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllTopPerformances(),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllRecords', function() {
    itShouldCallGETWithCache(function() {
      return {
        run: Api.getAllRecords(),
        url: urlBase + 'events/getRecords/',
        cache: {cache:true}
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllRecords(),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllMeets', function() {
    itShouldCallGET(function() {
      return {
        run: Api.getAllMeets(),
        url: urlBase + 'meets/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllMeets(),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllMeetsBy', function() {
    var filter;

    beforeEach(function() {
      filter = 'host=some host';
    });

    itShouldCallGET(function() {
      return {
        run: Api.getAllMeetsBy(filter),
        url: urlBase + 'meets/?' +  filter
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllMeetsBy(filter),
        promise: httpGet.promise
      };
    });
  });

  describe('getMeet', function() {
    var id;

    beforeEach(function() {
      id = 5;
    });

    itShouldCallGET(function() {
      return {
        run: Api.getMeet(id),
        url: urlBase + 'meets/getMeet/' +  id + '/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getMeet(id),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllResults', function() {
    itShouldCallGET(function() {
      return {
        run: Api.getAllResults(),
        url: urlBase + 'results/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllResults(),
        promise: httpGet.promise
      };
    });
  });

  describe('getResult', function() {
    var id;

    beforeEach(function() {
      id = 5;
    });

    itShouldCallGET(function() {
      return {
        run: Api.getResult(id),
        url: urlBase + 'results/getResult/' +  id + '/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getResult(id),
        promise: httpGet.promise
      };
    });
  });

    describe('getAllNews', function() {
    itShouldCallGET(function() {
      return {
        run: Api.getAllNews(),
        url: urlBase + 'news/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllNews(),
        promise: httpGet.promise
      };
    });
  });

  describe('getAllNewsBy', function() {
    var filter;

    beforeEach(function() {
      filter = 'host=some host';
    });

    itShouldCallGET(function() {
      return {
        run: Api.getAllNewsBy(filter),
        url: urlBase + 'news/?' +  filter
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getAllNewsBy(filter),
        promise: httpGet.promise
      };
    });
  });

  describe('getNews', function() {
    var id;

    beforeEach(function() {
      id = 5;
    });

    itShouldCallGET(function() {
      return {
        run: Api.getNews(id),
        url: urlBase + 'news/getNews/' +  id + '/'
      };
    });

    itShouldReturnAPromise(function() {
      return {
        funcReturn: Api.getNews(id),
        promise: httpGet.promise
      };
    });
  });
});
