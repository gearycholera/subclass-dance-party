var BlackHole = function(top, left, timeBetweenSteps) {
  RotatingDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blackHole"><img class="pic" src="blackhole.png"></img></span>');
  this.setPosition(top, left);
  this.type = 'blackhole';
};

BlackHole.prototype = Object.create(RotatingDancer.prototype);
BlackHole.prototype.constructor = BlackHole;
