// Модуль 5. Занятие 9. Контекст вызова функции и this

// Example 1 - Мастерская драгоценностей
console.log('Example 1 - Мастерская драгоценностей:');
console.log('--------------------------------------------');

// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones. Видео - 1:39:25.

// Исходный обект
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  
  // Создаем метод "calcTotalPrice(stoneName)"
  calcTotalPrice(stoneName) {
    const stone = this.stones.find(stone => stone.name === stoneName);
    return stone.price * stone.quantity;
  },
};

// Выводим в лог и активируем метод "calcTotalPrice(stoneName)" с разными названиями камней из соответствующего объекта.
console.log('"Emerald" =>', chopShop.calcTotalPrice('Emerald')); // 5200
console.log('"Diamond" =>', chopShop.calcTotalPrice('Diamond')); // 8100
console.log('"Sapphire" =>', chopShop.calcTotalPrice('Sapphire')); // 9800
console.log('"Ruby" =>', chopShop.calcTotalPrice('Ruby')); // 1600
console.log('********************************************');


//!========================================================


// Example 2 - Телефонная книга
console.log('Example 2 - Телефонная книга:');
console.log('--------------------------------------------');

// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: phonebook.generateId(),
      createdAt: phonebook.getDate(),
    };
    this.contacts.push(newContact);
    return this.contacts;
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

// Выводим в лог результат активации функции 
console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);
console.log('********************************************');


//!========================================================


// Example 3 - Калькулятор
console.log('Example 3 - Калькулятор:');
console.log('--------------------------------------------');

// Создайте объект "calculator" с тремя методами:
// - read(a, b) - принимает два значения и сохраняет их как свойства объекта;
// - add() - возвращает сумму сохранённых значений;
// - mult() - перемножает сохранённые значения и возвращает результат.

const calculator = {
  a: 0,
  b: 0,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  add() { 
    return this.a + this.b;
  },
  
  mult() {
    return this.a * this.b;
  },
};

// Запускаем метод "read()" объекта "calculator", передавая в него два числовых аргумента.
calculator.read(3, 5);
// Выводим в лог объекта "calculator" для проверки предыдущей записи (т.е., проверки наличия в объекте свойств с вышезаданными числовыми значениями)
console.log(calculator);
console.log('--------------------------------------------');

// Запускаем метод "add()" объекта "calculator" и выводим в лог значение которое он возвращает
console.log('"calculator.add()" =>', calculator.add());
console.log('--------------------------------------------');

// Запускаем метод "mult()" объекта "calculator" и выводим в лог значение которое он возвращает
console.log('"calculator.mult()" =>', calculator.mult());
console.log('********************************************');