'use strict';

describe('Filters', function() {
  beforeEach(module('itcFrontendApp'));

  var $filter;

  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
  }));

  describe('orderObjectBy', function() {
    var given, expectedResult;

    beforeEach(function() {
      given = {
        2010: '2010',
        2015: '2015',
        2011: '2011',
        2013: '2013'
      };

      expectedResult = [
        '2015',
        '2013',
        '2011',
        '2010'
      ];
    });

    it('should return an sorted array of each key\'s data', function() {
      var result = $filter('orderObjectBy')(given, 'date');
      expect(result).toEqual(expectedResult);
    });

    it('should return a reversed array when reverse is true', function() {
      var result = $filter('orderObjectBy')(given, 'date', true);
      expect(result).toEqual(expectedResult.reverse());
    });
  });
});
