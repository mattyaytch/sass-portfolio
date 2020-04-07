// var hamburger = document.querySelector('.toggle-btn');
// var clickedState = document.querySelector('.toggle-clicked');

// function navToggle() {
//     hamburger.style.display = "none";
//     hamburger.querySelector('.toggle-clicked');
// }

var hamburger = document.querySelector(".toggle-btn");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("toggle-clicked");
    hamburger.classList.toggle('overlay');
})