// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.



const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit',  onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const inputEmail = event.target.elements.email;
    const inputPass = event.target.elements.password;

    if(!inputEmail.value || !inputPass.value){
        alert("Заполните все поля!")
    }else {
        const formData = {
            email: inputEmail.value,
            password: inputPass.value,
        };
        loginForm.reset();
    }
}

