var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0; 
var started = false;


// jQuery to detect a click
$(".btn").on("click", function() {
    var  userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour); 
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

// jquery to detect a keyboard button

$(document).on('keydown', function(event)
{
    if(!started)
    {
        $('#level-title').text("Level "+level);
        nextSequence();
        started = true;
    }
});
// Function to generate the number and fetch which color is needed


function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text("Level "+level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);


    // Give effect and Play Sound
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}


// Function to PLay sound
function playSound(name) {
    $("#"+name).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor) {
        $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel)
{
    console.log(currentLevel);
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("Success");
        if(userClickedPattern.length == gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else
    {
        console.log("Wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $('h1').text("Game Over, Press Any Key to Restart");
        startOver();
        
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}