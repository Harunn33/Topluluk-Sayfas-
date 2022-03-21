const header = document.querySelector(".header");
const headerText = document.querySelector(".header-text");
const icon = document.querySelector(".fa-brands");

const textChange = () => {
  headerText.style.fontSize = "3.7rem";
  headerText.style.transition = ".5s";
};
const fsChange = () => {
  headerText.style.fontSize = "3.5rem";
};
header.addEventListener("mouseleave", fsChange);
header.addEventListener("mouseenter", textChange);
