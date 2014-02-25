var main = require("../main.js");

describe('using setup and teardown - read in console', function() {

  beforeEach(function() {
    console.log("outer beforeEach");
  });

  describe("can be used to make many assertions on a single setup",function() {

    before(function() {
      console.log("     inner before");
    });

    beforeEach(function() {
      console.log("           inner beforeEach");
    });


    it('a', function() {
      console.log("           test a");
    });

    it('b', function() {
      console.log("           test b");
    });

    describe("can be nested deeply",function() {
      before(function() {
        console.log("       nested inner before");
      });

      beforeEach(function() {
        console.log("           nested inner beforeEach");
      });

      it("c",function() {
        console.log("           test c");
      });

    });

  });
});
