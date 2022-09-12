// Задание 3
console.log('-- Задание 3 --');
// Объяви следующие переменные, используя ключевое слово const или let и присвой им соответствующие значения.
// topSpeed - число 160.
// distance - число 617.54.
// login - строка 'mango935'.
// isOnline - буль true.
// isAdmin - буль false.

// Change code below this line

const topSpeed = 160;
console.log('topSpeed =', topSpeed);

const distance = 617.54;
console.log('distance =', distance);

let login = 'mango935';
console.log('login =', login);

const isOnline = true;
console.log('isOnline =', isOnline);

const isAdmin = false;
console.log('isAdmin =', isOnline);

// Задание 4
console.log('');
console.log('-- Задание 4 --');
// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity -
// количество единиц товара в заказе

// Change code below this line

const pricePerItem = 3500;
console.log('цена одной единицы товара =', pricePerItem);
let orderedQuantity = 4;
console.log('количество единиц товара в заказе =', orderedQuantity);

let totalPrice = pricePerItem * orderedQuantity;
console.log('общая сумма заказа =', totalPrice);

// Задание 5
console.log('');
console.log('-- Задание 5 --');
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>,
// price per item is < цена товара > credits". Где <имя товара> и <цена товара> это значения переменных
// productName и pricePerItem. Используй синтаксис шаблонных строк.

const productName = 'droid'
let message = `You picked ${productName}, price per item is ${pricePerItem} credits.`;

console.log(message);

// Задание 6
console.log('');
console.log('-- Задание 6 --');

// Заказ продукта
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа.
// Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth
// <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// Change code below this line
const pricePerDroid = 800;
orderedQuantity = 6;
const deliveryFee = 50;
totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
console.log(message);

// Задание 7
console.log('');
console.log('-- Задание 7 --');

// Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!".
// После объявления вызови функцию sayHi.

// Change code below this line

function sayHi() {
  // Тело функции
  console.log("Hello, this is my first function!");
}
  // вызов функции

sayHi();

// Задание 8
console.log('');
console.log('-- Задание 8 --');

// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c,
// которые будут получать значения аргументов при её вызове.

// Дополни console.log так, чтобы он логировал строку "Addition result equals <result>", где <result> - это сумма переданных чисел.


function add(a, b, c) {
  // Тело функции
    const result = a + b + c;
    console.log(`Addition result equals ${result}`);
}

  // вызов функции
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);