function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max-min)) + min;
}


var random1 = randomNumber(1, 7);
var random2 = randomNumber(1, 7);
var dice1 = "images/dice" + random1 + ".png"; 
var dice2 = 'images/dice' + random2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",dice1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dice2);

if(random1 > random2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(random1 < random2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw !";
}