//
class User {
    constructor({ name, age, salary }) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    sayHello() {
        return `Hello! My name is ${this.name}, I'm ${this.age} years old!`;
    }
};

const user = new User({ name: 'Alex', age: 30, salary: 1500 });

console.log(user.sayHello());

console.log(user.prototype); // Свойства "prototype" в объекте "user" нет, поэтому - undefined.
console.log(User.prototype); // Перечень методов.
console.log(User.prototype.sayHello()); // Вызов метода записанного в классе, но без вставок на основе "this".

console.log(user.__proto__); // "__proto__" - это ссылка на прототип, поэтому выйдет - описание  класса "User".
console.log(User.__proto__); // Ссылка на нативный код до которого нет доступа.

// Конечная точка всех последовательно разворачиваемых "в глубину" ссылок - null.

// Пример использования метода "Number.isFinite" из перечня "прототайп", которая определяет конечность числа, и выдает "true" если число конечно и "false" - если нет.
console.dir(Number.isFinite(5)); // => true
console.log('--------------------------------------------');


class Vehicle {
    constructor({ model, color, wheels }) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    showInfo() {
        return `Vehicle: ${this.model} | color: ${this.color}`;
    }
};

class Car extends Vehicle {
    constructor({ amountOfSits, amountOfDoors, ...restProps }) {
        super(restProps);
        
        this.amountOfSits = amountOfSits;
        this.amountOfDoors = amountOfDoors;
    }
};

const car = new Car({ model: 'Tesla model X', color: 'black', wheels: 4, amountOfSits: 8, amountOfDoors: 4 });

console.log(car);

console.log(car.showInfo());
console.log('********************************************');


//!=========================================================


class Rectangle {
    constructor(height, width) { 
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) { 
        this._area = value;
    }
};

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    
        this.name = 'Square';
    }
};

const square = new Square(10);

console.log(square);
square.sayName();
console.log(square.area);


//!=========================================================


