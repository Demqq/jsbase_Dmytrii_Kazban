// 2.	Создать кнопку в html. По нажатию на кнопку должно появляться модальное окно в котором будет 2 инпута и кнопка
// 			Первый инпут - имя, второй имейл
// 			Реализовать проверку имейла при нажатии на кнопку. Если имейл введен не корректно (отсутствует собака) - вывести пользователю сообщение
// 			что имеил введен не корректно. 

// 			Можно реализовать стили в .css и подключать из js к тегами.
// 			Все модальное окно должно быть реализовано из js.

let btnShowModal = document.getElementsByClassName('modal-box')[0];

btnShowModal.addEventListener('click', () => {
    showModalWindow();
})

function showModalWindow() {
    let modalWindow = createModalWindow();
    document.body.appendChild(modalWindow);
}

function createModalWindow() {
    let modalWindow = document.createElement('div');
    modalWindow.classList.add('my-modal-window');


    let inputName = document.createElement('input');
    inputName.classList.add('my-modal-window__input-name');
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "Write your name, please";

    let inputEmail = document.createElement('input');
    inputEmail.classList.add('my-modal-window__input-email');
    inputEmail.type = "email"
    inputEmail.name = "name";
    inputEmail.id = "name";
    inputEmail.placeholder = "Write your e-mail, please";

    let sendButton = document.createElement('button');
    sendButton.classList.add('my-modal-window__send-button');
    sendButton.innerText = "Send your information";
    sendButton.addEventListener('click', () => {
        if (inputEmail.value.indexOf("@") == -1 ) {
            alert("We cannot send your information to FBI, write correct e-mail, or name")
        } else if (inputName.value.length === 0) {
            alert("Write, please, correct name");
        } else {
            alert("Ok, we send your Name: " + inputName.value + " and your E-mail: " + inputEmail.value);
            document.body.removeChild(modalWindow);
        }

    })

    let cancelButton = document.createElement('button');
    cancelButton.classList.add('my-modal-window__cancel-button');
    cancelButton.innerText = 'Cancel';
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(modalWindow);
    })

    modalWindow.appendChild(inputName);
    modalWindow.appendChild(inputEmail);
    modalWindow.appendChild(sendButton);
    modalWindow.appendChild(cancelButton);

    return modalWindow;
}