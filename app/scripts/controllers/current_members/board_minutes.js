'use strict';

angular.module('itcFrontendApp')

.controller('BoardMinutesCtrl', function($scope) {
  $scope.trackMinutes = {
    2014: [{
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSaHlvejJVcFBaRG8',
      date: 'April 6, 2014',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSbXkzVVNOZkdMT1U',
      date: 'April 20, 2014',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSUzRNakVtTGJlVkU',
      date: 'April 28, 2014',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSZzBEdFZDZUl1c0k',
      date: 'May 4, 2014',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nScnNlc3MySzRjSzg',
      date: 'May 11, 2014',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nScmxoQ3FycVRyVGc',
      date: 'August 23, 2014',
	}],
	2015: [{
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSYjY1MHJYUWd5dzg',
      date: 'January 18, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSeVhmeS1aWU5kQjQ',
      date: 'January 25, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSeDRKT1RXLWNCWjA',
      date: 'February 1, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSdHUxSjdSWnhVUzA',
      date: 'February 8, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSeV9yMm96QnZFSFU',
      date: 'February 15, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSMjNiY21yUlIteUE',
      date: 'February 22, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSaHhwQ3VtT252UU0',
      date: 'March 1, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSWndEbmIxeTJLWHM',
      date: 'March 8, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSQ3dKdXVkeXJyems',
      date: 'March 17, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSaXNwdThNOWxTRU0',
      date: 'March 29, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSVm9LeDh6QTdtdEE',
      date: 'April 12, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSbThFd1lCb0VIdlE',
      date: 'May 10, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSLWtwMTZieWJkSTA',
      date: 'August 20, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSQS1sNXJBamo4R00',
      date: 'October 18, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSeEF6TGVKUlNjbHM',
      date: 'December 6, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSNnpsWXg0UDc0WUU',
      date: 'December 13, 2015',
	}],
	2016: [{
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSU3N0NHNnVURRY0k',
      date: 'January 24, 2016',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSbHU1MVVhS3IyUXM',
      date: 'January 31, 2016',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSY20yWHlnVl9ZV28',
      date: 'February 7, 2016',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSWnFjak5EdGE0MUU',
      date: 'February 21, 2016',
    }, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSYzVyeHJFWFlNdmM',
      date: 'February 28, 2016',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSTE9PUGw5SnJ3Q0E',
      date: 'March 6, 2016',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSWHd5eF9CUU9BTEk',
      date: 'May 8, 2016',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nScjJKY3FJWXFOTG8',
      date: 'November 15, 2016',
	}, {
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSS0RraGdCcF9NQlE',
      date: 'December 4, 2016',
	}],
  };
  $scope.crossMinutes = {
	2015: [{
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURWW5rdnhQR3RrQmM',
      date: 'August 23, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURWUY3YlZoWk5jdFk',
      date: 'August 30, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURV2dtWE1pcmx0VUU',
      date: 'September 7, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURblMyVEpsV3FFZzg',
      date: 'September 13, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURNExjSTBCUzJibk0',
      date: 'September 20, 2015',
    }, {
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURNXVLZmtMVU4wQlk',
      date: 'September 27, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURV25ZVkNqdWpZMjQ',
      date: 'October 4, 2015',
	}, {
      link: 'https://drive.google.com/open?id=0B3UZgvAnCpURM19Qa2xfdlpNNlk',
      date: 'October 18, 2015',
	}],
	2016: [{
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSc2tQbEp0Tm5jdVU',
      date: 'May 8, 2016',
    }],
  };
});