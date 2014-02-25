function AccountView(opts) {
  this.el = opts.el || document.createElement("div")
  this.$el = $(this.el);
  this.model = opts.model
  this.listen()
}

AccountView.prototype = {
  listen: function() {
    // only use on with the prototype patch above
    this.$el.on("click",".withdraw_button",this.runWithdraw.bind(this));
  },
  render: function() {
    this.el.innerHTML = "<input name=amount value=25>"
    this.el.innerHTML += "<button class=withdraw_button>Withdraw</button>"
    this.el.innerHTML += "<button class=deposit_button></button>"
    this.el.innerHTML += "<button class=logout_button></button>"
  },
  runWithdraw: function() {
    var val = parseInt(this.$el.find("[name=amount]").val(),10);
    this.model.withdraw(val);
  }
}
