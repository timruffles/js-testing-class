function Tracking() {
  this.events = {};
}
Tracking.prototype.event = function(eventName) {
  if(!this.events[eventName]) {
    this.events[eventName] = 0;
  }
  return this.events[eventName] += 1;
}
Tracking.prototype.save = function() {
  $.post("/this.events",{ data: this.events });
}


