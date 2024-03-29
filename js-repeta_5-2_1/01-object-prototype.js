//! Видео - 0:00:00...0:27:40

/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */
// Прототипное наследование - это возможность связать не связанные между собой объекты по ссылке.
// Метод "Object.create()" создает пустой объект и позваляет выполнить привязку созданного им объекта к объекту-прототипу.

// Начальный объект "ObjC" в проектируемой цепочке прототипов
const objC = {
  z: 5,
};

// Простой вызов в лог объекта "objC"
console.log('"objC" =>', objC);

// Вызываем проверку собственных свойств объекта "objC"
console.log('Когда искомое свой-во (z) - ЕСТЬ =>', objC.hasOwnProperty('z'));
console.log('Когда искомое свой-во (t) - НЕТ =>', objC.hasOwnProperty('t'));
console.log('-------------------------------------------');


// Создаем объект "objB" и привязку объекта "objC" как прототипа этого объекта, используя для этого метод - "Object.create()".
const objB = Object.create(objC);
// Метод "Object.create()" создает пустой объект и устанавливает в нем в качестве прототипа тот объект, который был записан в качестве его аргумента. В нашем случае, был создан пустой объект, его прототипом был записан "objC", а значение - присвоенно переменной "objB".

// Создаем в объекте "objB" собственное свойство "y".
objB.y = 2;

// Выводим в лог переменную "objB", и видим, что в его собственных своствах есть "y", а в "[[Prototype]]", есть ссылка на "objC", и его свойство - "z".
console.log('"objB" =>', objB);


// Создаем объект "objA" и привязку объекта "objB" как прототипа этого объекта, используя для этого метод - "Object.create()". 
const objA = Object.create(objB);

// Создаем в объекте "objA" собственное свойство "x".
objA.x = 1;

// Выводим в лог переменную "objA", и видим, что в его собственных своствах есть "x", а в "[[Prototype]]", есть ссылка на "objB", и его свойство - "y", и далее в следующем открывающемся свойстве "[[Prototype]]" уже объекта "objB", есть ссылка на объект "objC" и его свойство "z"
console.log('"objA" =>', objA);
console.log('-------------------------------------------');

// Используя созданную цепочку прототипов обращаемся к объекту "objA", и через него - вызываем (выводим в лог значение) свойства "z", которое принадлежит объекту "objC".
console.log('"objA.z" =>', objA.z);

// Пытаемся перезаписать свойство "z", которое принадлежит объекту "objC", через обращение к объекту "objA".
objA.z = 1000;
// Выводим в лог переменную "objA"
console.log('"objA" =>', objA);
// Как можем видеть из результатов лога, в объекте "objA" появилось новое свойство "z = 1000", а соответствующее свойство "z" объекта "objC" - осталось без изменений!

// Проверяем объект "objA" на наличее в нем собственного свойства "x".
console.log(`"objA.hasOwnProperty('y')" =>`, objA.hasOwnProperty('y'));
console.log(`"objA.hasOwnProperty('x')" =>`, objA.hasOwnProperty('x'));
console.log('-------------------------------------------');

// Проверяем наличие свойства "ytytyty" во всей цыпочке прототипов, через обращение к объекту "objA"
console.log(`"objA.ytytyty" =>`, objA.ytytyty);
console.log('-------------------------------------------');

// Пример создания объекта на основе инлайн прототипа, которого нет в коде скрипта, и который присутствует только в теле метода "Object.create()".
const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });

dummyObj.message = 'Это собственное свойство объекта';

console.log('"dummyObj" =>', dummyObj);
console.log('"dummyObj.message" =>', dummyObj.message);

console.log('-------------------------------------------');

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

const objA2 = Object.create({ z: 18 });

objA2.y = 100;

console.log('"objA2" =>', objA2);

console.log('"objA2.x" =>', objA2.x);
