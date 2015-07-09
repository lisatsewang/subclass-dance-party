var AbsorbingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  this.timeBetweenSteps = 1000;
};

AbsorbingDancer.prototype = Object.create(Dancer.prototype);
AbsorbingDancer.prototype.constructor = AbsorbingDancer;

AbsorbingDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  var index = Math.floor(Math.random() * dancers.length);
  var randomDancer = dancers[index];
  // choose a random dancer 
  console.log(dancers);

  while(true && dancers.length > 1) {
    var index = Math.floor(Math.random() * dancers.length);
    var randomDancer = dancers[index];
    if (randomDancer !== this) {
      break;
      var hasRandomDancer = true;
    }
  }

  if (hasRandomDancer) {
    dancers.splice(index, 1)
  }

  //var randomDancerColor = randomDancer.$node.css('border').split(' ')[2];
  var randomDancerSize = parseInt(randomDancer.$node.css('border'));
  var currentSize = parseInt(this.$node.css('border'));
  var size = randomDancerSize + currentSize;

  var style = {
    border: String(size) + 'px solid green',
    'border-radius': String(size) + 'px',
  };

  var dancer = this;

  this.$node.animate({
    top: randomDancer.top,
    left: randomDancer.left,
  }, 500, function() {
    dancer.$node.css(style);
  });


};