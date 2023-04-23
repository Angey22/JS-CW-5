//! Видео - 1:29:53...1:45:48

// Для этого примера - необходимо раскомментировать соответствующую разметку в файле index.html.

// Объект
const counter = {
    value: 0,
    increment() {
        console.log('Метод "increment" -> this =>', this);
        this.value += 1;
    },
    decrement() {
        console.log('Метод "decrement" -> this =>', this);
        this.value -= 1;
    },
};

// Выполняем привязку тегов кнопок к переменным
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');

// Выполняем привязку тега абзаца к переменной
const valueEl = document.querySelector('.js-value');

// Выводим в лог объект "привязанный" к переменной - "incrementBtn".
console.log(incrementBtn);
console.dir(incrementBtn);
console.log('-------------------------------------------');

// Выводим в лог объект "привязанный" к переменной - "decrementBtn".
console.log(decrementBtn);
console.dir(decrementBtn);
console.log('-------------------------------------------');

// Выводим в лог объект "привязанный" к переменной - "valueEl".
console.log(valueEl);
console.dir(valueEl);
console.log('-------------------------------------------');

//! Любой тег в браузере является объектом со своим набором свойств (например, атрибутов, классов и т.д.) и методов (с помощью которых можно его изменять).

// Пример использования метода "textContent" встроенного в свойства тега - <button>, который позволяет изменить текстовый контент надписи в соответствующей кнопке.
// decrementBtn.textContent = 'akdsygkgsv DSBLSF';
//! Раскомментируй и смотри изменения в окне браузера


// Вешаем слушателя на тег привязанный к переменной "decrementBtn", и пишем код колл-бек функции, которая должна выполнится при регистрации соответствующего события.
decrementBtn.addEventListener('click', function () {
    console.log('Кликнули на декремент:');

    counter.decrement();
    console.log('Объект - "counter" =>', counter);
    valueEl.textContent = counter.value;

    console.log('********************************************');
});

// Вешаем слушателя на тег привязанный к переменной "incrementBtn", и пишем код колл-бек функции, которая должна выполнится при регистрации соответствующего события.
incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на инкремент');

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;

    console.log('********************************************');
});


// console.log(window);
