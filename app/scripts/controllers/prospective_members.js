'use strict';

angular.module('itcFrontendApp')

.controller('ProspectiveMembersCtrl', function($scope, $mdDialog) {
	$scope.open = function(ev){
	    $mdDialog.show({
	      controller: 'ProspectiveMembersSurveyCtrl',
	      templateUrl: 'ProspectiveMembersSurvey.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:false,
	      fullscreen: true
	    })
  };
});
angular.module('itcFrontendApp').controller('ProspectiveMembersSurveyCtrl', function($scope, $mdDialog) {
	$scope.submit = function(){
		$mdDialog.show( 
			$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Thank you!')
        .textContent('You will be added to our email list shortly')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
    	);
    }
	$scope.cancel = function(){
		$mdDialog.hide();
	}
});	