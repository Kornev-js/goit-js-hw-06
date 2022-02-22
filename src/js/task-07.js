// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const textEl = document.getElementById("text");

const inputEl = document.getElementById("font-size-control");

textEl.style.fontSize = inputEl.value + "px";

inputEl.addEventListener("input", (e) => {
  
 

  textEl.style.fontSize = inputEl.value + "px";
});
