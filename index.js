


// dice 1
//function dce(){
let randomNumber1 = Math.floor(Math.random()*6 + 1);
let randomNumber2 = Math.floor(Math.random()*6 + 1);
function d1(){


if (randomNumber1 === 1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png")
}
else if (randomNumber1 === 2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png")
}
else if (randomNumber1 === 3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png")
}
else if (randomNumber1 === 4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png")
}
else if (randomNumber1 === 5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png")
}
else if (randomNumber1 === 6){
  document.querySelector(".img1").setAttribute("src","images/dice6.png")
}
}

// dice 2
function d2(){

if (randomNumber2 === 1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png")
}
else if (randomNumber2 === 2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png")
}
else if (randomNumber2 === 3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png")
}
else if (randomNumber2 === 4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png")
}
else if (randomNumber2 === 5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png")
}
else if (randomNumber2 === 6){
  document.querySelector(".img2").setAttribute("src","images/dice6.png")
}
}
function changeTitle(){
  if (randomNumber1 > randomNumber2){
    document.querySelector(".tlt").innerHTML = "Player 1 wins"
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector(".tlt").innerHTML = "Player 2 wins"
  }
  else{
      document.querySelector(".tlt").innerHTML = "Draw"
  }
}

function dicee(){
  changeTitle();
  d1();
  d2();

}
