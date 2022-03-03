var randomValue1 = Math.floor(Math.random()*6)+1;
var diceImg1 = "dice"+randomValue1+".png";
var randomImgSrc1 = "images/"+diceImg1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgSrc1);


var randomValue2 = Math.floor(Math.random()*6)+1;
var diceImg2 = "dice"+randomValue2+".png";
var randomImgSrc2 = "images/"+diceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImgSrc2);


if(randomValue1>randomValue2){
  document.querySelector("h1").textContent = "Player 1 Won";
}
else if (randomValue2>randomValue1) {
  document.querySelector("h1").textContent="Player 2 Won ";
}
else{
  document.querySelector("h1").textContent="Match Tie";
}
