var BlackHole = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blackHole"></span>');
  this.setPosition(top, left);
  this.type = 'blackhole';
};

BlackHole.prototype = Object.create(Dancer.prototype);
BlackHole.prototype.constructor = BlackHole;
