'use strict';
angular.module('confusionApp').controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;

    $scope.dishes = menuFactory.getDishes();

    $scope.dishes = dishes;

    $scope.select = function(setTab) {
        this.tab = setTab;

        if (setTab === 2) {
            this.filtText = "appetizer";
        }
        else if (setTab === 3) {
            this.filtText = "mains";
        }
        else if (setTab === 4) {
            this.filtText = "dessert";
        }
        else {
            this.filtText = "";
        }
    };

    $scope.isSelected = function (checkTab) {
        return (this.tab === checkTab);
    };

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };



}])

    .controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = {mychannel:"", firstName:"", lastName:"",
            agree:false, email:"" };
        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])

    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {
                    mychannel: "", firstName: "", lastName: "",
                    agree: false, email: ""
                };
                $scope.feedback.mychannel = "";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])
;