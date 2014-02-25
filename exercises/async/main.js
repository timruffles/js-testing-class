var app = {defined: true};

app.answerLater = function(cb) {
  setTimeout(function() { cb(43) },125);
}

if(typeof module != "undefined") {
  module.exports = app;
}

