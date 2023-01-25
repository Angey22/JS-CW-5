// Модуль 5. Занятие 10. Прототипы и классы

// Example 2 - Хранилище
console.log('Example 2 - Хранилище:');
console.log('--------------------------------------------');

// Напиши класс Store, который создаёт хранилище заявок.
// Напиши класс Storage который создаёт объекты для управления складом товаров.При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:
// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.



// Исходные экземпляры, которые должны корректно работать с созданным классом
const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
    
console.log('********************************************');


//!=========================================================


// Example 3 - User
console.log('Example 3 - User:');
console.log('--------------------------------------------');

// Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

class User {
    #login;
    #email;

    constructor({ login, email }) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(login) {
        this.#login = login;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }
}

// Исходные экземпляры для создоваемого по заданию класса
const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.email); // poly@mail.com
poly.email = 'poly12345@mail.com';
console.log(poly.email); // poly12345@mail.com
console.log('********************************************');


//!=========================================================


// Example 4 - Заметки
console.log('Example 4 - Заметки:');
console.log('--------------------------------------------');

// Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high'
    };

    static findeNoteIndexByText(items, text) {
        return items.findIndex((note) => note.text === text);
    };

    constructor(items) {
        this.items = items;
     }
    
    addNote(note) { 
        this.items.push(note);
    }

    removeNote(text) { 
        const index = Notes.findeNoteIndexByText(this.items, text);
        this.items.splice(index, 1);
    }

    updatePriority(text, newPriority) {
        const index = Notes.findeNoteIndexByText(this.items, text);
        this.items[index].priority = newPriority;
    }
};

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);
console.log('********************************************')


//!=========================================================


// Example 5 - Toggle
console.log('Example 5 - Toggle:');
console.log('--------------------------------------------');

// Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false). По умолчанию значение свойства on должно быть false.

// Создаем класс
class Toggle {
    constructor(settings) {
        // this.on = settings ? settings.isOpen : false;
        this.on = settings?.isOpen || false;
    }

    // constructor({ isOpen = false } = {}) {
    //     this.on = isOpen;
    // }

    toggle() {
        this.on = !this.on;
    }
};

// Исходные экземпляры, которые должны корректно срабатывать с созданым по заданию классом
const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');
console.log('--------------------------------------------');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
console.log('********************************************');