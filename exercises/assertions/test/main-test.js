var main = require("../main.js");

suite('using assertions', function() {

  // README
  // for each of these tests, you should be able to use
  // a single assertion to make it fail in a descriptive way
  // http://chaijs.com/api/assert/

  test('has a descriptive way of checking for equality', function() {
    chai.assert.changeMe(5,10);
  });

  test("can check for equality between object's properties", function() {
    chai.assert.changeMe({name: "bob"},{name: "sue"});
  });

  test("can check for length of array", function() {
    chai.assert.changeMe([1,2,3],5);
  });

  test("can say when an exception was not thrown", function() {
    chai.assert.changeMe(function() {
      // safe
    });
  });

  test("can say when a string doesn't match a regexp", function() {
    chai.assert.changeMe("sue");
  });

});
