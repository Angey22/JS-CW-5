//! Видео - 0:27:40...1:26:00

/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */
// Класс - это некий условный "чертеж" или так называемая "балванка", на базе которой будет создаваться условная "машина". После создания которой, готовое конечное изделие - является "экземпляром" этого класса. При этом, набор характеристик у разных экземпляров, созданных на базе одного класса, всегда одинаковый, а вот нобор значений в них, может быть разный.
// Интерфейс - это набор доступных свойств и методов, предназначенных для работы с соответствующими свойствами. Например, в объектах есть служебное свойство "[[Prototype]]", внутри которого содержится набор стандартных методов, с помощью которых можно что-то "сделать" с объектам. Именно этот набор стандартных методов и является - "интерфейсом объекта".


/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */
console.groupCollapsed('Функции-конструкторы'); //! Log group name

// Функция-конструктор - это обычная функция, которая отличается от других функций тем, что ее имя пишется с большой буквы (например, "Car"), в отличие от обычных функций, имя которых пишется с мальнькой буквы (например, "car"). Еще одной отличетельной чертой имени "функции-конструктора" является то, что ее имя - НЕ должно быть прилогательным, которое отвечает на вопрос - "что сделать" (например, "bildCar" - построить машину), а пишется как существительное, отвечающее на вопрос - "кто? что?" (например, "Car" - машина). В языке JS с большой буквы пишутся имена ТОЛЬКО функции-конструкторов.

// Создаем функцию-конструктор "Car" -> "const Car = function () { };". После создания const функции-конструктора, который является "классом", можно создавать функцию "экземпляр" этого класса. Создание функции "экземплара" основано на использовании служебного слова - оператора "new", которое записывается в правой части присваивания значения переменной. Например, создадим функцию "экземпляр" на основе выше описанного класса "Car" - "const myCar = new Car();"


// Создаем функцию-конструктор
const Car = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config;
  // 2. Функция-конструктор вызывается в контексте созданного объекта, то есть в this записывается ссылка на этот объект.
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. В свойство this.__proto__ записывается ссылка на объект Car.prototype
  //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

  // 4. Ссылка на обьект возвращается в место вызова new Car
};

Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello :) ');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log('"Car.prototype" =>', Car.prototype);
console.log('------------------------------------------------');

// Создаем функцию "экземпляр"
// 1. Если функция вызывается через "new", создаётся пустой объект.
const myCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
console.log('myCar =>', myCar);

myCar.sayHi();
myCar.changePrice(10000);
console.log('myCar =>', myCar);
console.log('------------------------------------------------');

const myCar2 = new Car({
  brand: 'BMW',
  model: 'X6',
  price: 50000
});
console.log('myCar2 =>', myCar2);

myCar2.sayHi();
console.log('------------------------------------------------');

const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
console.log('myCar3 =>', myCar3);

myCar3.sayHi();
console.log('************************************************');


const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};
console.log(User.prototype);
console.log('------------------------------------------------');

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};
console.log(User.prototype);
console.log('------------------------------------------------');

const mango = new User({ email: 'mango@mail.com', password: 1111111 });
console.log(mango);
console.log('------------------------------------------------');

mango.changeEmail('my-new-mail@mail.com');
console.log(mango);
console.log('************************************************');


// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype

const objA = {
  x: 5,
};
console.log('"objA.__proto__ === Object.prototype" =>', objA.__proto__ === Object.prototype);

// 4. Функция-конструктор это просто функция :) .
// 5. Всю магию делает оператор "new".
// 6. Если функция вызывается через new, создаётся пустой объект где-то в памяти.
// 7. Функция вызывается в контексте созданного объекта.
// 8. В свойство this.__proto__ записывается ссылка на объект (Функция.prototype) который вызывает эту функцию.
// 9. Ссылка на объект возвращается в место вызова "new" - Фунукция().

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен "this"
 */
console.groupCollapsed('Статические свойства и методы'); //! Log group name

// Статические свойства и статические методы - это возможность добавить на функцию-конструктор что-то, что не будет вызывать экземпляр, а будет вызывать сама функция конструктор. Они НЕ доступны экземплярам и могут быть использованы только в рамках функции-конструктора.

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj =>', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);

// Пример статических методов на конструкторе "Object":
// Object.keys()
// Object.value()


console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');