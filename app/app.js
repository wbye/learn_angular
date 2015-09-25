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
            'snippet': 'Fast just got faster with Nexus S.',
            'age':1
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age':2
        }, {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age':3
        }];

        $scope.orderProp = "age";

        // console.log($filter("filter"));

        $scope.jsJquery =function(value,index,array){
            if(value.name=='Nexus S'){
                return true;
            }else{
                return false;
            }
        }
        $scope.friends =
          [{name:'John', phone:'555-1212', age:10},
           {name:'Mary', phone:'555-9876', age:19},
           {name:'Mike', phone:'555-4321', age:21},
           {name:'Adam', phone:'555-5678', age:35},
           {name:'Julie', phone:'555-8765', age:29}];
          

          // $scope.predicate = 'age';
          // $scope.reverse = true;
          // $scope.order = function(predicate) {
          //   $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
          //   $scope.predicate = predicate;
          // };
        var orderBy = $filter("orderBy");
        
        $scope.order = function(predicate,reverse){
            $scope.friends = orderBy($scope.friends,predicate,reverse);
        }

        $scope.order('-age',false);

        var underwood = 'underwood';

        $scope.card = {
            name:function(newName){
                return arguments.length?(underwood = newName):underwood;
            }
        };
    }
]);
