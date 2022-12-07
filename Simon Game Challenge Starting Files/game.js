var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("sucess!!");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
      //userClickedPattern = [];
    }
  } else {

    console.log("wrong!!");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass('game-over');
      //....and whatever else you need to do
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart ");
    startOver();

  }

}

$(document).keypress(function() {

  if (!false) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

$(".btn").click(function() {
  // adding id of buttons into variable and storing them in array
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);

});

//playing corresponding sound liked to peticular color of button
function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

// play animation
function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass('pressed');
    //....and whatever else you need to do
  }, 100);
}
