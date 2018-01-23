var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancerBouncy"><img class="pic" src="alien.jpg"></img></span>');
  this.setPosition(top, left);
  this.type = 'bouncy';
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};