//! Видео - 0:00:00...1:09:00

/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */
console.groupCollapsed('Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП'); //! Log group name

// Сложные объекты JS (массивы, объекты и функции) между собой НЕ равны.
console.log('Сравниваем сложные объекты JS между собой:')
console.log('[] === [] =>', [] === []);
console.log('{} === {} =>', {} === {});
console.log(
    'function() {} === function() {} ->',
    function () {} === function () {},
);

const fnA = function () {
    console.log('hello');
};

// Когда две ссылки указывают на один и тот же объект - они равны между собой, только по тому, что они являются ссылками указывающими на одну и ту же сущность.
const fnB = fnA;
console.log('Сравниваем ссылки на сложный объект (функцию) между собой:')
console.log('fnB === fnA =>', fnB === fnA);

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */
console.groupCollapsed('Как метод объекта. В контексте объекта.'); //! Log group name

// Исходный объект
const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
    },
};

// Вызов функции в контексте объекта "user"
user.showTag();

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * Вызов без контекста
 * - В строгом режиме => undefined
 * - Не в строгом режиме => window
 */
console.groupCollapsed('Вызов без контекста'); //! Log group name

const foo = function () {
    console.log('foo -> this', this);
};

foo();

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */
console.groupCollapsed('Как метод объекта, но объявлена как внешняя функция.'); //! Log group name

// Код исходной функции "showTag"
const showTag = function () {
    console.log('showTag (this) =>', this);
    console.log('showTag (this.tag) =>', this?.tag);
};

//! Служебный значек "?." - говорит интерпретатору, что ксли ты не находишь такого свойства - тогда не ищи! Соответсвенно, это позволяет избежать появления ошибки. Для эксперимента - поменяй в коде "?." на "." и посмотри на ошибку в консоли. Эта ошибка выходит в следствии вызова функции "showTag();" без контекста.

// Вызываем функцию "showTag" без контекста
console.log('showTag():');
showTag();
console.log('------------------------------------------------');

// Создаем объект "user2"
const user2 = {
    tag: 'Mango',
};

//! В объекте "user2" создаем свой-во "showUserTag" и присваеваем ему в качестве значения ссылку на функ-ию "showTag". Эта операция позволит использовать внешнюю функцию "showTag" в качестве метода объекта "user2".
user2.showUserTag = showTag;
// Выводим в лог измененный объект "user2"
console.log('user2 =>', user2);
console.log('------------------------------------------------');

// Вызываем функцию "showTag" в контексте объекта "user2"
console.log('user.showUserTag():');
user2.showUserTag();

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');


/*
 * Вызов без контекста, но объявлена как метод объекта.
 */
console.groupCollapsed('Вызов без контекста, но объявлена как метод объекта.'); //! Log group name

// Создаем объект "user3" с внутренним методом "showTag()".
const user3 = {
    tag: 'Mango',
    showTag() {
        console.log('showTag (this) =>', this);
        console.log('showTag (this.tag) =>', this?.tag);
    },
};

// Вызываем метод "showTag()" в контексте объекта "user3".
console.log('Вызываем метод "showTag()" в контексте объекта "user3":');
user3.showTag();
console.log('------------------------------------------------');

// Создаем внешнюю переменную "outerShowTag" и присваиваем ей в качестве значени ссылку на метод соответствующего объекта.
const outerShowTag = user3.showTag;

// Вызываем новосозданную функцию "outerShowTag()" без контекста.
console.log('Вызываем новосозданную функцию "outerShowTag()" без контекста:');
outerShowTag();


console.groupEnd(); //! Log group end
console.log('-5----------------------------------------------');


/*
 * Контекст в callback-функциях
 */
console.groupCollapsed('Контекст в callback-функциях'); //! Log group name

// Создаем объект "user4" с внутренним методом "showTag()".
const user4 = {
    tag: 'Mango',
    showTag() {
        console.log('showTag => this', this);
        console.log('showTag => this.tag', this?.tag);
    },
};

// Вызываем метод "showTag()" в контексте объекта "user4".
console.log('Вызываем метод "showTag()" в контексте объекта "user4":');
user4.showTag();
console.log('------------------------------------------------');

// Пишем код функции высшего порядка "invokeAction"
const invokeAction = function (action) {
    console.log('Аргумент функции "invokeAction" - "action":');
    console.dir(action);

    action();
};

// Вызываем функцию высшего порядка "invokeAction" и передаем ей в качестве аргумента - метод объекта "user4".
invokeAction(user4.showTag);

console.groupEnd(); //! Log group end
console.log('-6----------------------------------------------');


/*
 * Тренируемся 1
 */
console.groupCollapsed('Тренируемся 1'); //! Log group name

const fn = function () {
    console.log('fn -> this =>', this);
};

fn(); // Какой this ???

console.groupEnd(); //! Log group end
console.log('-7----------------------------------------------');


/*
 * Тренируемся 2
 */
console.groupCollapsed('Тренируемся 2'); //! Log group name

const book = {
    title: 'React for beginners',
    showThis() {
        console.log('showThis -> this =>', this);
    },
    showTitle() {
        console.log('showTitle -> this.title =>', this?.title);
    },
};

// 1-й вопрос
console.log("1-й вопрос:");
book.showThis(); // Какой this ???

// 2-й вопрос
const outerShowThis = book.showThis;
console.log("2-й вопрос:");
outerShowThis(); // Какой this ???

// 3-й вопрос
const outerShowTitle = book.showTitle;
console.log("3-й вопрос:");
outerShowTitle(); // Какой this ???

console.groupEnd(); //! Log group end
console.log('-8----------------------------------------------');


/*
 * Тренируемся 3
 */
console.groupCollapsed('Тренируемся 3'); //! Log group name

const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this =>', this);
        // this.color = color;
    };

// changeColor(); // Какой this ???

    const sweater = {
        color: 'teal',
    };

    sweater.updateColor = changeColor;

    // sweater.updateColor('red'); // Какой this ???

    return sweater.updateColor;
};

// makeChangeColor();

const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

console.groupEnd(); //! Log group end
console.log('-9----------------------------------------------');


/*
 * Тренируемся 4
 */
console.groupCollapsed('Тренируемся 4'); //! Log group name

const makeChangeColor2 = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this =>', this);
        // this.color = color;
    };

    return changeColor;
};

const updateColor2 = makeChangeColor2();
// updateColor('yellow'); // Какой this ???

const hat = {
    color: 'blue',
    updateColor2: updateColor2,
};

// hat.updateColor2('orange'); // Какой this ???

console.log('------------------------------------------------');
console.log('"hat" =>', hat);


console.groupEnd(); //! Log group end
console.log('-10---------------------------------------------');


/*
 * Тренируемся 5
 */
console.groupCollapsed('Тренируемся 5'); //! Log group name

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this =>', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this =>', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

// updateCounter(10, counter.increment); // Какой результат?
// updateCounter(5, counter.decrement); // Какой результат?

//! При передачи метода объекта как "колл-бек" - контекст НЕ сохраняется!!!

// counter.increment(10); // Раскомментируй и смотри консоль!
// counter.decrement(5); // Раскомментируй и смотри консоль!

// Продолжение этого примера - см. описание метода "bind" в файле '02-fn-methods.js', видео - 1:27:34...1:29:53.

console.groupEnd(); //! Log group end
console.log('-11---------------------------------------------');