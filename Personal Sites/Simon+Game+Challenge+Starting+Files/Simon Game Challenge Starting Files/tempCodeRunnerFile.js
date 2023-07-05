var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// Function to generate the number and fetch which color is needed
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Give effect and Play Sound
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}

$("btn").on("click", function() {
    var  userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour); 
});

