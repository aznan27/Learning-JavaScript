// document.querySelector(".set").addEventListener("click", function () {
//     alert("i got clicked!");
// });

var numberOfDrums = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    })

}
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('/sounds/tom-1.mp3');
            console.log(tom1.play());
            break;

        case "a":
            var tom2 = new Audio('/sounds/tom-2.mp3');
            console.log(tom2.play());

        case "s":
            var tom3 = new Audio('/sounds/tom-3.mp3');
            console.log(tom3.play());

        case "d":
            var tom4 = new Audio('/sounds/tom-4.mp3');
            console.log(tom4.play());

        case "j":
            var snare = new Audio('/sounds/snare.mp3');
            console.log(snare.play());

        case "k":
            var crash = new Audio('/sounds/crash.mp3');
            console.log(crash.play());

        case "l":
            var kickBass = new Audio('/sounds/kick-bass.mp3');
            console.log(kickBass.play());

        default:
            break;
    }
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
})

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


