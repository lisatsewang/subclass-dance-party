var Bambi = function(top, left, timeBetweenSteps) {
  left = -300;
  top = $('body').height()/2 + Math.floor(Math.random()* $('body').height()/2);
  timeBetweenSteps = 500;

  Animal.apply(this, arguments);

  this.$node.append('<img src="img/bambi.png">');
  this.$node.data('score', -500);
};

Bambi.prototype = Object.create(Animal.prototype);
Bambi.prototype.constructor = Bambi;

Bambi.prototype.step = function() {
  Animal.prototype.step.call(this);

  var left = parseInt(this.$node.css('left')) + 50;

  this.$node.animate({'left': left}, 500);
};

