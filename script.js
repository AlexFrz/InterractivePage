// Exercice 1.
var futer = document.getElementsByTagName("footer");
futer.onclick = console.log("Clique");

let count = 1;
function futerMsg() {
  console.log(`You clicked: ${count} times.`);
  count++;
}

futer[0].addEventListener("click", futerMsg);

// Exercice 2.
let navbarToggler = document.getElementsByClassName("navbar-toggler");
function showMenu() {
  navbarHeader = document.getElementById("navbarHeader");
  navbarHeader.classList.toggle("collapse");
}

navbarToggler[0].addEventListener("click", showMenu);

// Exercice 3.
let firstCard = document.getElementsByClassName("card")[0];
let firstCardButton = firstCard.getElementsByTagName("button");
function cardTextRed() {
  firstCard.style.color = "red";
}

firstCardButton[1].addEventListener("click", cardTextRed);

// Exercice 4.
let secondCard = document.getElementsByClassName("card")[1];
let secondCardButton = secondCard.getElementsByTagName("button");
function cardTextGreen() {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green";
  }
}
secondCardButton[1].addEventListener("click", cardTextGreen);

// Exercice 5.
navbar = document.getElementsByTagName("header");
linkBootstrap = document.getElementsByTagName("link")[0];
function noBootstrap() {
  if (linkBootstrap.disabled === false) {
    linkBootstrap.disabled = true;
  } else {
    linkBootstrap.disabled = false;
  }
}

navbar[0].addEventListener("dblclick", noBootstrap);

// Exercice 6.
const viewButtons = document.querySelectorAll(".btn-group");
const cardsImages = document.querySelectorAll(".card-img-top");
const cardsTexts = document.querySelectorAll(".card-text");
const toggleElementDisplay = (element) => {
  element.style.display === "none"
    ? (element.style.display = "block")
    : (element.style.display = "none");
};
const toggleImageWidth = (image) => {
  image.style.width === "20%"
    ? (image.style.width = "100%")
    : (image.style.width = "20%");
};

viewButtons.forEach((group, index) => {
  group.children[0].addEventListener("mouseenter", (e) => {
    toggleImageWidth(cardsImages[index]);
    toggleElementDisplay(cardsTexts[index]);
  });
});
