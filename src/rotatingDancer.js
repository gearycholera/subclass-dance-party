var RotatingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancerRotate"><img class="pic" src="spaceship.gif"></img></span>');
  this.setPosition(top, left);
  this.pos = 50;
  this.type = 'rotating';
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;
RotatingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var styleSetting = {
    'transform': 'rotate(' + this.pos + 'deg)'
  };
  this.$node.css(styleSetting);
  this.pos += 50;
};
