//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output'),
}

const handleInput = () => {
    let userMsg = (!refs.input.value)? "Anonymous" : refs.input.value;
    return refs.output.innerHTML =  userMsg
   

    
    
    
    
    
}

refs.input.addEventListener('input', handleInput)


