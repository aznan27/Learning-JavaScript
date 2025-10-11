// document.querySelector(".set").addEventListener("click", function () {
//     alert("i got clicked!");
// });



var numberOfDrums = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
        console.log(this.style.color = "white");

    })

}

// var audio = new Audio('/sounds/tom-1.mp3');
// console.log(audio.play());




// document.querySelectorAll(".drum")[0].addEventListener("click", function () {
//     alert("i got clicked!");
// });

// document.querySelectorAll(".drum")[1].addEventListener("click", function () {
//     alert("i got clicked!");
// });

// document.querySelectorAll(".drum")[2].addEventListener("click", function () {
//     alert("i got clicked!");
// });

// document.querySelectorAll(".drum")[3].addEventListener("click", function () {
//     alert("i got clicked!");
// });

// document.querySelectorAll(".drum")[4].addEventListener("click", function () {
//     alert("i got clicked!");
// });

// document.querySelectorAll(".drum")[5].addEventListener("click", function () {
//     alert("i got clicked!");
// });

// document.querySelectorAll(".drum")[6].addEventListener("click", function () {
//     alert("i got clicked!");
// });




// function handleClick() {
//     alert("i got clicked!");
// }