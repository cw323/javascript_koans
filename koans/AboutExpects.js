describe("About Expects", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should expect true", function() {
    expect(true).toBeTruthy(); //This should be true
  });

  //exepctation: should be true, values that are false when truthy: falase, 0, "", null, undefined, and NaN

  //To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () { 
	  var expectedValue = 2;
	  var actualValue = 1 + 1;
	
	  expect(actualValue === expectedValue).toBeTruthy(); //expect 2 === 1+1 to be true
  });  

  //Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () { 
	  var expectedValue = 2;
	  var actualValue = 1 + 1;
	
  // toEqual() compares using common sense equality.
	  expect(actualValue).toEqual(expectedValue); //expect 2 to equal 1+1
  });

  //Sometimes you need to be really exact about what you "type".
  it("should assert equality with ===", function () { 
	  var expectedValue = '2';
	  var actualValue = (1 + 1).toString(); //this is changing the value to a string, expected value should be a string "2"
	
  // toBe() will always use === to compare.
	  expect(actualValue).toBe(expectedValue);
  });  

  //Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
	  expect(1 + 1).toEqual(2); //compares using common sense equality
  });
});
