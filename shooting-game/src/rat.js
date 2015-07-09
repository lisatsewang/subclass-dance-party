var Rat = function(top, left, timeBetweenSteps) {
  left = $('body').width() + 300;
  top = Math.random()* $('body').height()/2 + Math.floor(Math.random()* $('body').height()/2);
  timeBetweenSteps = 500;

  Animal.apply(this, arguments);

  this.$node.append('<img src="img/rat.png">');
  this.$node.data('score', 75);
};

Rat.prototype = Object.create(Animal.prototype);
Rat.prototype.constructor = Rat;

Rat.prototype.step = function() {
  Animal.prototype.step.call(this);

  var left = parseInt(this.$node.css('left')) - 100;

  this.$node.animate({'left': left}, 500);
};

