'use strict';

angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL',  function($resource, baseURL) {


        var promotions = [
            {
                _id:0,
                name:'Weekend Grand Buffet',
                image: 'images/buffet.png',
                label:'New',
                price:'19.99',
                description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
            }

        ];

        this.getDishes = function(){

            return $resource(baseURL + "dishes/:id", null, {'update':{method:'PUT'}});

        };

        // implement a function named getPromotion
        // that returns a selected promotion.
        this.getPromotion = function(index) {
            return $resource(baseURL + "promotions/:id", null, null);
        }

    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        var corpfac = {};

        // Implement two functions, one named getLeaders,
        // the other named getLeader(index)
        // Remember this is a factory not a service
        corpfac.getLeaders = function() {
            return $resource(baseURL + "leadership/:id", null, null);
        };
        return corpfac;

    }])

    .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        var fbfac = {};

        fbfac.getFeedback = function() {
            return $resource(baseURL + "feedback/:id", null, {
                'save': {
                    method: 'POST'
                }
            })
        };
        return fbfac;

    }])

;