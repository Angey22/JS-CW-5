//! Видео - 1:26:00...0:00:00

// Плагины - это готовая библиотека или инструмент предназначеный для решения какой-то конкретной задачи. Например, галлерея, слайдер или любой другой готовый "кусочек" интерфейса, который "берешь" и он работает после минимально-необходимой настройки. Другими словами, плагин обстрагирует какую-то кодовую реализацию, и позволяет не вникая в то, как это сделано, пользоваться нужным элементом интерфейса.

// Код основного объекта-прототипа - исходного класса
const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
  onUpdate = () => null,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);

  this.onUpdate = onUpdate;

  this._bindEvents();
  this.updateValueUI();
};

// Код метода доступного в прототипе исходного объекта-прототипа
CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');

  return refs;
};

// Код метода доступного в прототипе исходного объекта-прототипа
CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.decrement();
    this.updateValueUI();
  });
};

// Код метода доступного в прототипе исходного объекта-прототипа
CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;

  this.onUpdate();
};

// Код метода доступного в прототипе исходного объекта-прототипа
CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

// Код метода доступного в прототипе исходного объекта-прототипа
CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

// Создаем 1-й экземпляр на основе прототипа, используя переменную - "counter1"
const counter1 = new CounterPlugin({
  rootSelector: '#counter-1',
  step: 10,
  initialValue: 100,
  onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
});
console.log('"counter1" =>', counter1)


// Создаем 2-й экземпляр на основе прототипа, без переменной
new CounterPlugin({ rootSelector: '#counter-2', step: 2 });