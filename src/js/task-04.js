// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0


const refs = {
    btnIncr: document.querySelector('button[data-action="increment"]'),
    btnDecr: document.querySelector('button[data-action="decrement"]'),
    spanRef: document.querySelector('#value'),
    
};

refs.btnIncr.addEventListener('click', event => {
    counterValue += 1;
    refs.spanRef.innerHTML = counterValue;
});

refs.btnDecr.addEventListener('click', event =>{
    counterValue -= 1;

    refs.spanRef.innerHTML = counterValue
})