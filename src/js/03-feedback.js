import _ from 'lodash'

// Отримуємо елементи форми з DOM
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const feedbackForm = document.querySelector('.feedback-form');

// Визначаємо ключ для локального сховища
const storageKey = 'feedback-form-state';

// Функція, що зберігає стан форми в локальне сховище
const saveStateToLocalStorage = _.throttle(() => {
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };

    localStorage.setItem(storageKey, JSON.stringify(state));
}, 500);



// Функція, що заповнює поля форми з локального сховища
function populateFormFieldsFromLocalStorage() {
    const state = JSON.parse(localStorage.getItem(storageKey));
    if (state) {
        emailInput.value = state.email;
        messageInput.value = state.message;
    }
}

// Функція, що очищує локальне сховище та поля форми
function clearStateAndFormFields() {
    localStorage.removeItem(storageKey);
    emailInput.value = '';
    messageInput.value = '';
}

// Обробник події input, що зберігає стан форми в локальне сховище при кожному введенні

feedbackForm.addEventListener('input', saveStateToLocalStorage)


// Перевіряємо наявність даних в локальному сховищі при завантаженні сторінки та заповнюємо поля форми
window.addEventListener('load', populateFormFieldsFromLocalStorage);

// Обробник події submit, що очищує локальне сховище та поля форми та виводить об'єкт з даними у консоль
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const state = JSON.parse(localStorage.getItem(storageKey));
    if (!state.email || !state.message) {
        alert("Всі поля форми повинні бути заповненні!");
    } else {
        console.log(state);
        clearStateAndFormFields();
    }
});



