'use strict';

angular.module('itcFrontendApp')

.controller('BoardMinutesCtrl', function($scope) {
  $scope.trackMinutes = {
    2019: [{
      link: 'https://drive.google.com/open?id=1dbKleqnLouJJWPDLCS3zXvNQBYsybXym84s70KqmTJg',
      date: 'January 13, 2019',
    }, {
      link: 'https://drive.google.com/open?id=1PW7tsDDycmhYSIltYbfmZd3JI6h8E2FF62wf3h1KP5M',
      date: 'January 20, 2019',
    }, {
      link: 'https://drive.google.com/open?id=1pPGDd8hMaPOjEiXuCv9THswKUouWWOqftMBGu-i5Kv0',
      date: 'January 27, 2019',
    }, {
      link: 'https://drive.google.com/open?id=1t5wK-sS8X5PtUff8gZtraLDT0TyfknSaJFF2cPjD6u0',
      date: 'February 10, 2019',
    }, {
      link: 'https://drive.google.com/open?id=1TsURhp-dc7-SPO0yyvXZjMZABCm1OjwuRbvZ8bKZVVM',
      date: 'February 17, 2019',
    }, {
      link: 'https://drive.google.com/open?id=15n42iBzxDJZB-rvaLMuWtkVBLWDlviff2RjB_sKPb48',
      date: 'March 10, 2019',
    }, {
      link: 'https://docs.google.com/document/d/1fbCpPlANxZG7xxKCU8aYQLsKcIZatS2VxrEOFuig1sI/edit?usp=sharing',
      date: 'March 31, 2019',
    }, {
      link: 'https://docs.google.com/document/d/1mRl8jBDTscrhl6Ok_cIdp3ilm0i857f_IHLc-uCl3Lg/edit?usp=sharing',
      date: 'April 28, 2019',
    }],
    2018: [{
        link: 'https://docs.google.com/document/d/1VsAYPdkpLx2glKY176U52s6H16tmmi9A_FpiW04Wjl8/edit?usp=sharing',
        date: 'January 15, 2018',
      }, {
        link: 'https://docs.google.com/document/d/1yfVv4h4ooH6gtPrKZ-JC8tG81vYzWiSG4j3teKSQVi0/edit?usp=sharing',
        date: 'January 21, 2018',
      }, {
        link: 'https://docs.google.com/document/d/1UqYl5cVmnxC1_FctGfxszh6HvtiFIO41TCu6d1431Us/edit?usp=sharing',
        date: 'January 28, 2018',
      }, {
        link: 'https://docs.google.com/document/d/1qxMZqEoQHU-AYkuxEwZhkuamPZJksdbTyeDMTEeF-H4/edit?usp=sharing',
        date: 'February 4, 2018',
      },{
        link: 'https://docs.google.com/document/d/1vkfWBN9eh4oapRQLPEz-WORaITRJuRiyD676Eg52vWo/edit?usp=sharing',
        date: 'February 11, 2018',
      },{
        link: 'https://docs.google.com/document/d/1LMvI9EGhvQvm0G0xabsaQYxIuxp1UrFKsh8J3DjQZbk/edit?usp=sharing',
        date: 'February 18, 2018',
      },{
        link: 'https://docs.google.com/document/d/1zZWCVS6PLEFk77owMyFTEVCeIP3-gE3QdOdZGFLnyms/edit?usp=sharing',
        date: 'March 4, 2018',
      },{
        link: 'https://docs.google.com/document/d/1TpoyJkp_QWSRbJO11BVo0IrYk-ydJFgvTtbCvdWl07g/edit?usp=sharing',
        date: 'March 11, 2018',
      },{
        link: 'https://docs.google.com/document/d/1LMWDFcXQCxuwr00M5cFOC_2SZQdV31Xi70qtuSN4ocs/edit?usp=sharing',
        date: 'April 1, 2018',
      },{
        link: 'https://docs.google.com/document/d/1kfk1wVBkc97cdRW_pOnKMACweZ7XSGW8fJs6WNivc8Q/edit?usp=sharing',
        date: 'April 8, 2018',
      },{
        link: 'https://docs.google.com/document/d/1ozq7SbRXMIkySXiZTmlu5od_gBqUx6q8ebVNYsGJOcM/edit?usp=sharing',
        date: 'April 29, 2018',
      }],
    2017: [{
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSNk5DY0poenNfZlE',
        date: 'January 16, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSZndzS2toa0hvYnc',
        date: 'January 22, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSakdoQmRKS2lCZVk',
        date: 'January 29, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nScHE4UXJHNHVvV0U',
        date: 'February 5, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSbHdCRzV4a25fcm8',
        date: 'February 12, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSdWh6TGtFb1huWUk',
        date: 'February 19, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSU0ZzY29JVGNWbTg',
        date: 'February 26, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSOXRVSng2Wm16RTg',
        date: 'March 5, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSc0ZCeURYQUtRNHM',
        date: 'March 12, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSN2E4TXVMYjRDRkU',
        date: 'March 27, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSZEVTckpKV2JhYnc',
        date: 'April 2, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSU18wZ3AyMlJUV0k',
        date: 'April 17, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSTFl3MlJfS3JZNkE',
        date: 'April 23, 2017',
      }, {
        link: 'https://docs.google.com/document/d/1gLx107jBqzhFHD6HlEtjl85Dp5XNwpbM-oKw6idALUk/edit?usp=sharing',
        date: 'April 30, 2017',
      }, {
        link: 'https://drive.google.com/file/d/0Bx3ZveflTDHUNmVCVGVoOW5FbU55XzdJOUZ4UGNGd3JpT2tF/view?usp=sharing',
        date: 'May 7, 2017',
      }, {
        link: 'https://docs.google.com/document/d/10Xd8YWPmYBqA_YuHgL-mgEIVJhgpDX1lWGvD5VyvXkg/edit?usp=sharing',
        date: 'August 26, 2017',
      }, {
        link: 'https://docs.google.com/document/d/1QtH0OKuGQSGVA7aM2xggypuduCTmNi3O3C-85sJcbfs/edit?usp=sharing',
        date: 'October 15, 2017',
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
    }]
  };

  $scope.crossMinutes = {
    2019: [{ 
      link: 'https://docs.google.com/document/d/16DytcJaylr7n49szGXyNJyGylE-zkwV0AAYPpwc4a24/edit?usp=sharing',
      date: 'April 22, 2019',
    }, {
      link: 'https://docs.google.com/document/d/1XPtXm9bGRJQ3ElHbtd2684UNnKji_Njkf3eeP3UrTCE/edit?usp=sharing',
      date: '2019 XC Season ALL'
    },],
    2018: [{
      link: 'https://drive.google.com/open?id=1MdL22rd-fJtcvHa60P6m5oAkt4lSgXVa',
      date: 'April 25, 2018',
    }, {
      link: 'https://drive.google.com/open?id=1t5vLvi_fw6ctCt6EwSn8w9--MgY5j1SI',
      date: 'August 25, 2018',
    }, {
      link: 'https://drive.google.com/open?id=1hxhSjtWXep7x2O42q2x7tiU-E54-NmmL',
      date: 'September 3, 2018',
    },{
      link: 'https://drive.google.com/open?id=1tW3QMpv-Uv5BiqxlHdEsF2byH50zeqLw',
      date: 'September 30, 2018',
    },{
      link: 'https://drive.google.com/open?id=1MVkUIBGmlURcQJE01EAeFkkPl6f_pOyNzp_qaZi5GBM',
      date: 'October 7, 2018',
    },{
      link: 'https://drive.google.com/open?id=178z8pd2YO52D5WkxUOcAYcIFa2Itm00U',
      date: 'October 14, 2018',
    },],
    2017: [{
        link: 'https://drive.google.com/open?id=1q05QaN7gdHIo4HawbBGy2vBmJl6uO52yMwN6oR6CT-Y',
        date: 'April 2, 2017',
      }, {
        link: 'https://drive.google.com/file/d/0B3UZgvAnCpURQTQ5SXU5TU5NaUk/view?usp=sharing',
        date: 'April 23, 2017',
      }, {
        link: 'https://drive.google.com/open?id=0B3UZgvAnCpURN1dmSHlzTUhfLTg',
        date: 'August 26, 2017',
      },{
        link: 'https://drive.google.com/open?id=0B3UZgvAnCpURcHkwMWhKWHhSZGM',
        date: 'September 4, 2017',
      },{
        link: 'https://drive.google.com/open?id=0B3UZgvAnCpURUEpFbVpMLXJsWm8',
        date: 'September 10, 2017',
      },],
    2016: [{
      link: 'https://drive.google.com/open?id=0B9IJ7PBOO1nSc2tQbEp0Tm5jdVU',
      date: 'May 8, 2016',
    }],
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
  	}]
  };
});