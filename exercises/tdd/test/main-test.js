var main = require("../main.js");

suite("Account",function() {

  var account;

  setup(function() {
    account = new main.Account(50);
  })

  test("should allow deposits",function() {
    account.deposit(25)
    assert.equal(account.balance(),75);
  })

  test("should allow withdrawals",function() {
    account.withdraw(25)
    assert.equal(account.balance(),25);
  })

  test("should allow balance check",function() {
    assert.equal(account.balance(),50);
  })

})

