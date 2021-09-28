
/* function x() {

  var x = Math.floor(Math.random() * 6 + 1);
  return x;
}
x;
console.log(x);



function randomLinkLeft() {
var y = "/Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice" + x + ".png";
console.log(y);
return y;
}

randomLinkLeft();
var z = y;

document.querySelector("img").setAttribute("src", z);

*/

var randomVariable1 = Math.floor(Math.random() * 6) + 1;



var dicee = "/Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice" + randomVariable1 + ".png";

var imgLeft = document.querySelectorAll(".img1")[0];

imgLeft.setAttribute("src", dicee);

/*

This is the array containing all the links to the dices img

var imagesLink = [/Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice1.png, /Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice2.png, /Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice3.png, /Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice4.png, /Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice5.png, /Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice6.png]


*/

//------


var randomVariable2 = Math.floor(Math.random() * 6) + 1;



var dicee1 = "/Volumes/Sandisk - Formation/Web Development/Dicee Challenge - Starting Files/images/dice" + randomVariable2 + ".png";

var imgRight = document.querySelectorAll(".img2")[0];

imgRight.setAttribute("src", dicee1);

// Use If to select the random variable and declare a display depending of the value

if (randomVariable1 > randomVariable2) {
  document.querySelector("h1").innerHTML ="Player 1 Wins !";
} else if (randomVariable1 < randomVariable2) {
    document.querySelector("h1").innerHTML ="Player 2 Wins !";
} else {
    document.querySelector("h1").innerHTML ="Draw !";
}



/*
to change the big title of the page :

document.querySelector("h1").innerHTML ="Player 1 Wins !"

*/
