const modalBtn = document.querySelector('.header__button');
const modalWindow = document.querySelector('.modal');
const modalWindowError = document.querySelector('.modal__error');
const body = document.body;
const modalCloseBtn = document.querySelector('.modal__exit');
const modalCloseBtn2 = document.querySelector('.modal__exit-error');
const text = document.querySelector('.modal__text-item');
const text2 = document.querySelector('.modal__text-item2');
document.querySelector('.modal__button').addEventListener('click', function () {
    validateFields();
});

modalBtn.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});

modalCloseBtn.addEventListener('click', function () {
    modalWindow.classList.remove('active');
    body.classList.remove('active');
});

modalCloseBtn2.addEventListener('click', function () {
    modalWindowError.classList.remove('active');
    body.classList.remove('active');
});

function validateFields() {
    if (text.value.trim() === '' || text2.value.trim() === '') {
        modalWindow.classList.remove('active');
        modalWindowError.classList.add('active');
        return false;
    } else {
        location.reload();
    }
};

const modalBtn2 = document.querySelector('.header__button2');
modalBtn2.addEventListener('click', function () {
    modalWindow.classList.add('active');
    body.classList.add('active');
});