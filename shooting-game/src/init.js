$(document).ready(function(){
  window.animalConstructors = ['Rat', 'Fly'];


  var addAnimal = function(animalMakerFunctionName) {
    var animalMakerFunction = window[animalMakerFunctionName];

    var animal = new animalMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(animal.$node);
  };

  $('body').on('click', '.animal', function() {
    var animal = this;

    var oldScore = parseInt($('.score').text());
    var currentScore = parseInt($(animal).data('score'));

    $('.score').text(oldScore + currentScore);

    $(animal).animate({
      opacity: 0
    }, 200, function() {
      $(animal).remove();
    });

  });

  $('.start').on('click', function() {
    var generateAnimal = function() {
      addAnimal(animalConstructors[Math.floor(Math.random() * animalConstructors.length)]);

      setTimeout(generateAnimal, 500 + Math.random()* 1000);
    };

    generateAnimal();
  });
});

