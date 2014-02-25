var main = require("../main.js");

describe('getting answer later', function() {
  it('gives me the answer, eventually', function() {

    // FIXME
    // so far this test always passes, because
    // the test runner has no idea it's async
    // - change this so the test reveals the wrong
    // answer is being yielded by main.answerLater();
    // should see: 'Uncaught AssertionError: expected 43 to equal 42'

    main.answerLater(function(answer) {
      assert.equal(answer,42);
    });

  });
});
