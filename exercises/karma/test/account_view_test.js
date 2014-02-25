describe("AccountView",function() {

  var view
  var model
  beforeEach(function() {
    model = new Account;
    view = new AccountView({
      model: model
    })
    view.render()
  })

  var controlTests = [{
    selector: ".withdraw_button",
    name: "withdraw control",
  },{
    selector: ".deposit_button",
    name: "deposit control",
  },{
    selector: ".logout_button",
    name: "logout control",
  }]

  controlTests.forEach(function(setup) {

    // create a test via 'it' for each of these cases

  })


  describe("withdrawls",function() {
    beforeEach(function() {
      // spy to ensure the view is collaborating with the model
      // correctly
    });
    it("initiates withdrawal when button clicked",function() {
      var button = view.el.querySelectorAll(".withdraw_button")
      $(button).click()
      // add an assertion to ensure the model was called correctly
      throw new Error("Not implemented");
    })
  })
  

})

