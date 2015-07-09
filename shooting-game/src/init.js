$(document).ready(function(){
  window.animalConstructors = ['Rat', 'Fly', 'Bambi'];
  window.generateAnimalId = 0;
  window.decrementTimeId = 0;

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
    $('.animal').remove();
    $('.time').text(30);
    $('.game-over').hide();
    $('.score').text(0);

    if (generateAnimalId) {
      clearInterval(generateAnimalId);
    }
    if (decrementTimeId) {
      clearInterval(decrementTimeId);
    }

    var generateAnimal = function() {
      addAnimal(animalConstructors[Math.floor(Math.random() * animalConstructors.length)]);
    };

    generateAnimalId = setInterval(generateAnimal, 500 + Math.random()* 1000);


    var decrementTime = function() {
      var remainingTime = parseInt($('.time').text());

      if (remainingTime === 0) {
        $('.animal').remove();
        
        var score = $('.score').text();
        $('.final-score').text(score);
        $('.game-over').show();

        clearInterval(generateAnimalId);
        clearInterval(decrementTimeId);

      } else {
        $('.time').text(remainingTime - 1);
      }

    };

    decrementTimeId = setInterval(decrementTime, 1000);

  });
});

