function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', callback);

function callback() {

  const functionValue = getRandomHexColor();

  colorSpan.textContent = functionValue;
  document.body.style.backgroundColor = functionValue
}
  

