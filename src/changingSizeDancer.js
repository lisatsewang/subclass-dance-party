var ChangeingSizeDancer = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  this.timeBetweenSteps = 100;
};

ChangeingSizeDancer.prototype = Object.create(Dancer.prototype);
ChangeingSizeDancer.prototype.constructor = ChangeingSizeDancer;

ChangeingSizeDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  var size = Math.floor(Math.random() * 100);
  var style = {
    border: String(size) + 'px solid purple',
    'border-radius': String(size) + 'px'
  };
  this.$node.css(style);
}