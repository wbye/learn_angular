'use strict';

// Declare app level module which depends on views, and components
angular.module('phonecatApp', []).controller("PhoneListCtrl", ['$scope','$rootScope', function($scope,rootScope) {

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

   var scope = rootScope.$new();
   
    scope.name = 'misko';
    scope.counter = 0;

    expect(scope.counter).toEqual(0);
    
    scope.$watch('name', function(newValue, oldValue) {
      console.log(newValue,oldValue);
      scope.counter = scope.counter + 1;
    });
    
    expect(scope.counter).toEqual(0);
    setTimeout(function(){

        scope.$digest();
        // the listener is always called during the first $digest loop after it was registered
        expect(scope.counter).toEqual(1);

    },2000)
    console.log(scope.$eval("name + counter"));
    // scope.$digest();
    // // but now it will not be called unless the value changes
    // expect(scope.counter).toEqual(1);

    // scope.name = 'adam';
    // scope.$digest();
    // expect(scope.counter).toEqual(2);

    $scope.$on("test",function(){
        console.log(arguments);
    });
    $scope.test= function(){
        $scope.$emit("test",222);
    };
    $scope.test_broad= function(){
        rootScope.$broadcast("test",222);
    };
    rootScope.$on("$destroy",function(){
        console.log("child destroy happen");
    });
    $scope.$on("$destroy",function(){
        // $scope.$broadcast("$destroy");
        // console.log("child destroy happen");
    });
    $scope.test_desotry = function(){
        $scope.$destroy();
    };
    function expect(expectValue){
        if(this instanceof expect){

        }else{
            return new expect(expectValue);
        };
        this.expectValue =expectValue;
        
        this.toEqual=function(value){
            console.log(value === this.expectValue);
        }
        return this;
    }
}]);
