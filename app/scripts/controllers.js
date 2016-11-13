'use strict';
angular.module('confusionApp').controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;

    $scope.dishes = menuFactory.getDishes();

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
    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        var dish=menuFactory.getDish(parseInt($stateParams.id, 10));
        $scope.dish = dish;
    }])

    .controller('DishCommentController', ['$scope', function($scope) {

        //Step 1: Create a JavaScript object to hold the comment from the form
        $scope.feedback = {
            name : '',
            stars : '5',
            theComments : '',
            date : ''
        };

        $scope.submitComment = function () {

            //Step 2: This is how you record the date
            $scope.feedback.date = new Date().toISOString();

            // Step 3: Push your comment into the dish's comment array
            //$scope.dish.comments.push($scope.feedback);
            $scope.dish.comments.push({rating: $scope.feedback.stars,
                comment: $scope.feedback.theComments, author: $scope.feedback.name, date:$scope.feedback.date});

            //Step 4: reset your form to pristine
            $scope.commentForm.$setPristine();

            //Step 5: reset your JavaScript object that holds your comment
            $scope.feedback = {
                name : '',
                stars : '5',
                theComments : '',
                date : ''
            };
        }
    }])
;