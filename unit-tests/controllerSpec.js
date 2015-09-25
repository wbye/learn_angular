describe("PhoneCat controllers",function(){
	describe("PhoneListCtrl",function(){
		var scope,ctrl;

		//load module
		beforeEach(module('phonecatApp'));

		//load controller,set scope
		beforeEach(function(){
			inject(function($controller){
				scope = {};
				ctrl = $controller('PhoneListCtrl',{ $scope:scope });
			});
		});

		//inject $controller
		it("should create 'phones' model with 3 phones",function(){
			expect(scope.phones.length).toBe(3);
		});

        it('should set the default value of orderProp model', function() {
          expect(scope.orderProp).toBe('age');
        });
	});
});