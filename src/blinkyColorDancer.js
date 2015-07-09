var BlinkyColorDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);

  this.timeBetweenSteps = 500;
};

BlinkyColorDancer.prototype = Object.create(BlinkyDancer.prototype);
BlinkyColorDancer.prototype.constructor = BlinkyColorDancer;

BlinkyColorDancer.prototype.colors = ['red', 'blue', 'green', 'yellow'];

BlinkyColorDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  
  var style = {
    border: '30px solid ' + this.colors[Math.floor(Math.random() * (this.colors.length))],
    'border-radius': '30px'
  }  
  this.$node.css(style);
}
