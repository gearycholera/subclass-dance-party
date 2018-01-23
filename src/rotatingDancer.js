var RotatingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancerRotate"></span>');
  this.setPosition(top, left);
  this.pos = 50;
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;
RotatingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var styleSetting = {
    'position': 'absolute',
    'width': '0',
    'height': '0',
    'border-style': 'solid',
    'border-width': '0 10px 20px 10px',
    'border-color': 'transparent transparent #21942e transparent',
    'transform': 'rotate(' + this.pos + 'deg)'
  };
  this.$node.css(styleSetting);
  this.pos += 50;
};