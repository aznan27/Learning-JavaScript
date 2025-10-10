let diceOne = Math.random();
diceOne = diceOne * 6;
diceOne = Math.floor(diceOne) + 1;
console.log(diceOne);

let diceTwo = Math.random();
diceTwo = diceTwo * 6;
diceTwo = Math.floor(diceTwo) + 1;
console.log(diceOne);


let diceImage1 = "images/dice" + diceOne + ".png";
let diceImage2 = "images/dice" + diceTwo + ".png";


document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);

if (diceOne > diceTwo) {
    console.log(document.querySelector("h1").innerHTML = "Player 1 Wins!");
} else if (diceTwo > diceOne) {
    console.log(document.querySelector("h1").innerHTML = "Player 2 Wins!");

} else {
    console.log(document.querySelector("h1").innerHTML = "Draw!");
}




