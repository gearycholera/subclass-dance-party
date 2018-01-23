describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
    
  });
});

describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });


  it('should have inherited properties from Dancer', function() {
    expect(bouncyDancer.gravitate).to.not.equal(undefined);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bouncyDancer, 'step');
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
    
  });
});


describe('rotatingDancer', function() {

  var rotatingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotatingDancer = new RotatingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotatingDancer.$node).to.be.an.instanceof(jQuery);
  });


  it('should have inherited properties from Dancer', function() {
    expect(rotatingDancer.gravitate).to.not.equal(undefined);
  });

  describe('dance', function() {
    it('should call step at least once per second and rotate image', function() {
      sinon.spy(rotatingDancer, 'step');
      expect(rotatingDancer.pos).to.be.equal(50);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotatingDancer.pos).to.be.equal(150);

      clock.tick(timeBetweenSteps);
      expect(rotatingDancer.pos).to.be.equal(200);
    });
  });
});

describe('blackHole', function() {

  var blackHole, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blackHole = new BlackHole(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blackHole.$node).to.be.an.instanceof(jQuery);
  });


  it('should have inherited properties from Dancer', function() {
    expect(BlackHole.prototype.gravitate).to.equal(Dancer.prototype.gravitate);
  });

  it('should have inherited properties from RotatingDancer', function() {
    expect(BlackHole.prototype.step).to.equal(RotatingDancer.prototype.step);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blackHole, 'step');
      expect(blackHole.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blackHole.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blackHole.step.callCount).to.be.equal(2);
    });
  });
});
