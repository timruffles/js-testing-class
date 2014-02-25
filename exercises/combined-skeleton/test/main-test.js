var main = require("../main.js");

describe('testing system', function() {
  beforeEach(function() {
  });
  it('has access to your code', function() {
    assert.isDefined(main.defined);
  });
  it('integrates dependencies', function() {
    var spy = sinon.spy();
    spy();
    assert.calledOnce(spy);
  });
});
