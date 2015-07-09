var Fly = function(top, left, timeBetweenSteps) {
  left = -50;
  top = Math.floor(Math.random()* $('body').height()/2);
  timeBetweenSteps = 500;

  Animal.apply(this, arguments);

  this.$node.append('<img src="img/fly.png">');
  this.$node.data('score', 100);
  this.isUpper = true;
  this.lower = this.top + 150;
};

Fly.prototype = Object.create(Animal.prototype);
Fly.prototype.constructor = Fly;

Fly.prototype.step = function() {
  Animal.prototype.step.call(this);

  var style = {};
  if(this.isUpper) {
    style.top = this.lower;
  } else {
    style.top = this.top;
  }
  this.isUpper = !this.isUpper;
  style.left = parseInt(this.$node.css('left')) + 100;

  this.$node.animate(style, 500);
};

