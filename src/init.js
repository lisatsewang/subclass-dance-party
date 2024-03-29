$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    dancer.$node.on("click", function(event) {
      console.log('clicked the dancer up in here');
      $(this).animate({
        width: "100px",
        height: "100px",
        "border-radius": "100px",
        opacity: 0,
      }, 1000 );

      setTimeout(function() {
        $(this).remove();
      }, 1000);

      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i] === dancer) {
          // match! remove from window.dancers
          dancers.splice(i, 1)
        }

      }
      
    });
  });

  $('.lineUpButton').on('click', function(event) {

    var step = $('body').width()/(dancers.length + 1);

    dancers.forEach(function(dancer, i) {
      dancer.setPosition($('body').height()/2, step * (i+1));
    });
  });

  // $(".dancer").on("click", function(event) {
  //   console.log("dancer clicked");
  //   $(this).animate({
  //   width: "50px",
  //   opacity: 0,
  // }, 1500 );
  // });

});

