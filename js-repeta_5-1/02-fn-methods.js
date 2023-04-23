//! Видео - 1:09:10...1:29:53

/*
 * Методы "call" и "apply"
 */
console.groupCollapsed('Методы "call" и "apply"'); //! Log group name

// Методы функции предназначеные для принудительного вызова функций в контексте указанного в методе объекта

// Исходная функция
const showThis = function (a, b, arr) {
    console.log('a, b, arr =>', a, b, arr);
    console.log('showThis -> this', this);
};

// Смотрим в логе набор методов в прототипе функции.
console.dir(showThis);
console.log('-------------------------------------------');

// Вызываем функцию "showThis()" без контекста.
console.log('showThis():');
showThis();
console.log('-------------------------------------------');

// Создаем объект "objA"
const objA = {
    a: 5,
    b: 10,
};

// Принудительный вызов функции "showThis" (с использованием метода - "call") в контексте объекта "objA". При использовании метода "call" можно передавать аргументы в функцию как независимые друг от друга значения - через запятую. Метод "call" позволяет выполнить вызов в контексте какого-либо объекта - ТОЛЬКО НА ОДИН ВЫЗОВ.
console.log('showThis.call(objA, 5, 1, [100, 200, 300]):')
showThis.call(objA, 5, 1, [100, 200, 300]);
console.log('-------------------------------------------');

// Принудительный вызов функции "showThis" (с использованием метода - "apply") в контексте объекта "objA". При использовании метода "apply" можно передавать аргументы функцию ТОЛЬКО как массив. Метод "apply" позволяет выполнить вызов в контексте какого-либо объекта - ТОЛЬКО НА ОДИН ВЫЗОВ.
console.log('showThis.apply(objA, [5, 1, [100, 200, 300]]):')
showThis.apply(objA, [5, 1, [100, 200, 300]]);
console.log('-------------------------------------------');

//! Вызываем функцию "showThis()" после использования методов "call" и "apply" на ней. Для проверки - отсутствия привязки контекста.
console.log('showThis():');
showThis();
console.log('-------------------------------------------');

// Создаем еще один объект
const objB = {
    x: 788,
    y: 25,
};

// Принудительный вызов функции "showThis" (с использованием метода - "call") в контексте объекта "objB".
console.log('showThis.call(objB, 1, 1, 2):')
showThis.call(objB, 1, 1, 2);
console.log('-------------------------------------------');

// Принудительный вызов функции "showThis" (с использованием метода - "apply") в контексте объекта "objB".
console.log('showThis.apply(objB, [1, 1, 2]):')
showThis.apply(objB, [32, 15, 16]);
console.log('-------------------------------------------');
//! Обрати внимание на то, что данные были переданы в массиве, а функция восприняла и обработала их как отдельные переменные. Это особенность синтаксиса метода "apply", который требует использования формата массива для передачи в функцию аргументов.

//!=============================================================

// Пример использования одной внешней функции для обработки данных в однотипных объектах

// Создаем функцию "changeColor" для работы с разными однотипными объектами, и изменения их свойства.
const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

// Создаем объект "hat"
const hat = {
    color: 'black',
};
// Выводим в лог исходный объект "hat"
console.log('Исходный вид - "hat" =>', hat);

// Вызываем функцию "changeColor" в контексте объекта "hat" для изменения его свойства, передавая функции в качестве аргумента необходимое значение.
changeColor.call(hat, 'orange');

// Выводим в лог объект "hat" после изменения
console.log('После изменения - "hat" =>', hat);
console.log('-------------------------------------------');

// Создаем объект "sweater"
const sweater = {
    color: 'green',
};
// Выводим в лог исходный объект "sweater"
console.log('Исходный вид - "sweater" =>', sweater);

// Вызываем функцию "changeColor" в контексте объекта "sweater" для изменения его свойства, передавая функции в качестве аргумента необходимое значение.
changeColor.call(sweater, 'blue');

// Выводим в лог объект "sweater" после изменения
console.log('После изменения - "sweater" =>', sweater);


console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Метод "bind"
 */
console.groupCollapsed('Метод "bind"'); //! Log group name

//! Метод "bind" позволяет создать копию функции с привязанным контекстом. При этом, оригинальная функция НЕ изменяется! Объект, в контексте которого выполняется привязка функции - тоже НЕ изменяется.

// Создаем копию функции "changeColor" с навсегда привязанным в ней контекстом к объекту "hat".
const changeHatColor = changeColor.bind(hat);

// Вызываем функцию "changeHatColor" с нужным аргументом
changeHatColor('yellow');

// Выводим в лог объект "hat" после изменения
console.log('После изменения - "hat" =>', hat);
console.log('-------------------------------------------');

// Создаем копию функции "changeColor" с навсегда привязанным в ней контекстом к объекту "sweater".
const changeSweaterColor = changeColor.bind(sweater);

// Вызываем функцию "changeSweaterColor" с нужным аргументом
changeSweaterColor('red');

// Выводим в лог объект "sweater" после изменения
console.log('После изменения - "sweater" =>', sweater);

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * counter
 */
console.groupCollapsed('Из Тренируемся 5 - "counter"'); //! Log group name

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

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));

console.log(counter);


console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');