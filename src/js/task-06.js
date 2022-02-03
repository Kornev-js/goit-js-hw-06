// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
const validatedInput = document.querySelector('#validation-input');
const inputData = Number(validatedInput.dataset.length);

validatedInput.addEventListener('blur', () =>{
    const validatedInputLength = validatedInput.value.length;
    if (validatedInputLength !== inputData){
        replaceClasses('invalid', 'valid');
        return
    }
    replaceClasses('valid', 'invalid')
})


const replaceClasses = (classToAdd, classToRemove) => {
    validatedInput.classList.remove(classToRemove);
    validatedInput.classList.add(classToAdd);
}