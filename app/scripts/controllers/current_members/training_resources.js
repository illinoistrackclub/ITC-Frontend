'use strict';

angular.module('itcFrontendApp')

.controller('TrainingResourcesCtrl', function($mdDialog, $scope, TAGS) {
    $scope.tags = TAGS;

    $scope.body_section = null;
    $scope.body_part = '';
    $scope.exercise = '';

    $scope.video = {};

    $scope.links = [
        {
            title: 'Link 1',
            link: 'http://www.facebook.com'
        },
        {
            title: 'Link 2',
            link: 'http://www.google.com'
        }
    ];

    $scope.videos = [
        {
            url: 'https://www.youtube.com/watch?v=t2b8UdqmlFs',
            title: 'Test Video Pls Ignore 1',
            body_section: TAGS.BODYSECTION.legs,
            body_part: TAGS.BODYSECTION.legs.body_parts.quads,
            exercise: TAGS.EXERCISE.strength
        },
        {
            url: 'https://www.youtube.com/watch?v=t2b8UdqmlFs',
            title: 'Test Video Pls Ignore 2',
            body_section: TAGS.BODYSECTION.legs,
            body_part: TAGS.BODYSECTION.legs.body_parts.calves,
            exercise: TAGS.EXERCISE.strength
        },
        {
            url: 'https://www.youtube.com/watch?v=t2b8UdqmlFs',
            title: 'Test Video Pls Ignore 3',
            body_section: TAGS.BODYSECTION.legs,
            body_part: TAGS.BODYSECTION.legs.body_parts.quads,
            exercise: TAGS.EXERCISE.strength
        }
    ]

    $scope.videoFilter = function(vid) {
        let keep_flag = true;
        if($scope.body_part != '' && $scope.body_part != null){
            keep_flag = vid.body_part === $scope.body_part;
        }
        if($scope.body_section != null && keep_flag){
            keep_flag = vid.body_section === $scope.body_section;
        }
        if($scope.exercise != '' && keep_flag){
            keep_flag = vid.exercise === $scope.exercise;
        }
        return keep_flag;
    }

    $scope.filteredVideos = $scope.videos.filter($scope.videoFilter);

    $scope.filterVideos = function() {
        $scope.filteredVideos = $scope.videos.filter($scope.videoFilter);
    }

    $scope.clearFilters = function() {
        $scope.body_section = null;
        $scope.body_part = '';
        $scope.exercise = ''; 
        $scope.filterVideos();  
    }

    $scope.openVideo = function(vid) {
        $scope.video = vid;
        $mdDialog.show({
            templateUrl: 'views/dialogs/videoView.html',
            clickOutsideToClose: true,
            fullscreen: true,
            scope: $scope,
            preserveScope: true
        });
    }

    $scope.closeVideo = function() {
        $mdDialog.hide()
    }
});
