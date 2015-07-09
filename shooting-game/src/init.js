$(document).ready(function(){
  window.animals = {};


  $(".addAnimal").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var animalMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var animalMakerFunction = window[animalMakerFunctionName];

    // make a dancer with a random position
    var animal = new animalMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(animal.$node);

    // populate the animals object for later access
    animals[animal.$node] = animal;
  });

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



  //   dancer.$node.on("click", function(event) {
  //     console.log('clicked the dancer up in here');
  //     $(this).animate({
  //       width: "100px",
  //       height: "100px",
  //       "border-radius": "100px",
  //       opacity: 0,
  //     }, 1000 );

  //     setTimeout(function() {
  //       $(this).remove();
  //     }, 1000);

  //     for (var i = 0; i < window.dancers.length; i++) {
  //       if (window.dancers[i] === dancer) {
  //         // match! remove from window.dancers
  //         dancers.splice(i, 1)
  //       }

  //     }
      
  //   });
  // });

});

