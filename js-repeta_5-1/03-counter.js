const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
console.dir(incrementBtn)
const valueEl = document.querySelector('.js-value');

// Пример использования метода "textContent" встроенного в свойства тега - <button>
// decrementBtn.textContent = 'akdsygkgsv DSBLSF';

decrementBtn.addEventListener('click', function () {
    console.log('Кликнули на декремент');

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на инкремент');

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});

// console.log(window);
