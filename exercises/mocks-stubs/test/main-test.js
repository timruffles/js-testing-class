if(typeof process != 'undefined') throw new Error("Can't run this in node - relies on jquery");

describe('Tracking', function() {

  var tracking;
  beforeEach(function() {
    tracking = new Tracking;
    // do something with mocks and stubs to make the save() test possible
  });

  afterEach(function() {
    // make sure you restore the spies!
  });

  it('allows events to be tracked',function() {
    
    tracking.event("watchVideo");
    tracking.event("watchVideo");
    var count = tracking.event("watchVideo");

    assert.equal(count,3);
  });

  it('posts data to save',function() {
    tracking.event("watchVideo");
    tracking.event("watchVideo");

    tracking.save();

    // ensure $.post got the correct arguments 
    throw new Error("Not testing whether AJAX sent correct data");
  });

});


