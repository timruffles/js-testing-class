var app = {
  User: function(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
app.User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

if(typeof module != "undefined") {
  module.exports = app;
}

