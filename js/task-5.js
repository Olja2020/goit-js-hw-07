function getRandomHexColor () {
  const colorRandom =  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    bodyColor.style.backgroundColor = colorRandom;
    spanColor.innerHTML = colorRandom;
    return colorRandom;
}
  
  const buttonColor = document.querySelector(".change-color");
  const spanColor = document.querySelector(".color");
  const bodyColor = document.querySelector("body");
  buttonColor.addEventListener('click', getRandomHexColor);
  