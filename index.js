var randomnumbder1 = Math.floor(Math.random() * 6) + 1;
//var randomimages = "images" + randomnumbder1 ;
var randomimgattribute1 = "images/dice" + randomnumbder1 + ".png"
var randomimage1 = document.querySelectorAll("img")[0].setAttribute("src", randomimgattribute1);
var randomnumbder2 = Math.floor(Math.random() * 6) + 1;
//var randomimages = "images" + randomnumbder1 ;
var randomimgattribute2 = "images/dice" + randomnumbder2 + ".png"
var randomimage2 = document.querySelectorAll("img")[1].setAttribute("src", randomimgattribute2);

if (randomnumbder1 > randomnumbder2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Winner!";
} else if (randomnumbder1 < randomnumbder2) {
  document.querySelector("h1").innerHTML = "Player 2 Winner!🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
