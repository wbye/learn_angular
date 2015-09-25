'use strict';

// Declare app level module which depends on views, and components
angular.module('phonecatApp', []).controller("PhoneListCtrl", [
    '$scope',
    '$rootScope',
    '$timeout',
    '$filter',
    function($scope, rootScope, $timeout,$filter) {

        $scope.phones = [{
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'
        }, {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'
        }];

        $scope.name = "world";

        // console.log($filter("filter"));

        $scope.jsJquery =function(value,index,array){
            if(value.name=='Nexus S'){
                return true;
            }else{
                return false;
            }
        }
    }
]);
