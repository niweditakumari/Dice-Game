var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var flag="false"

var s1 = "images/dice" + randomNumber1 + ".png";
var s2 = "images/dice" + randomNumber2 + ".png";

/****CHANGE IMAGES OF HTML**/
document.querySelector(".img1").setAttribute("src", s1);
document.querySelector(".img2").setAttribute("src", s2);

/***CHANGE TITLES AND WRITTEN PARTS IN HTML**/
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="p1";
  if(flag=="false"){
    flag="True";
  }
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="p2";
} else {
  document.querySelector("h1").innerHTML="d";
}
