var assert = require('assert');
var calc = require('../calc');


describe("simple calculator",function(){

	it('should add 1 and 1 and get 2',function(){

		assert.equal(calc.add(1,1),2);
	})

	it('should subtract 4 and 2 and get 2',function(){

		assert.equal(calc.subtract(4,2),2);
	})	

})