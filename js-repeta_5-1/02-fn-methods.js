//! Видео - 1:09:10...1:09:00

/*
 * call и apply
 */
const showThis = function (a, b, arr) {
    console.log(a, b, arr);
    console.log('showThis -> this', this);
};

showThis();
console.log('-------------------------------------------');

const objA = {
    a: 5,
    b: 10,
};

// Принудительный вызов функции "showThis" (с использованием метода - "call") в контексте объекта "objA". При использовании метода "call" можно передавать аргументы в функцию как независимые друг от друга значения - через запятую.
showThis.call(objA, 5, 1, [100, 200, 300]);
console.log('-------------------------------------------');

// Принудительный вызов функции "showThis" (с использованием метода - "apply") в контексте объекта "objA". При использовании метода "apply" можно передавать аргументы функцию ТОЛЬКО как массив.
showThis.apply(objA, [5, 1, [100, 200, 300]]);
console.log('-------------------------------------------');

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};

// changeColor.call(hat, 'orange');
// console.log(hat);

const sweater = {
    color: 'green',
};

// changeColor.call(sweater, 'blue');
// console.log(sweater);

/*
 * bind
 */
// Позволяет сделать копию функции с привязанным контекстом.

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/*
 * counter
 */

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);
