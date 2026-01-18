function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')

btnEl.addEventListener('click', changeColor)

function changeColor() {
  const resultColor = getRandomHexColor();
  spanEl.textContent = resultColor;
  document.body.style.backgroundColor = resultColor;
}