// Задание 9
console.log('-- Задание 9 --');

// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add(a, b, c) {
  // Тело функции
    return a+b+c;
}

console.log('add(5, 10, 20):', add(5, 10, 20));
console.log('add(15, 27, 10):', add(15, 27, 10));
console.log('add(10, 20, 30):', add(10, 20, 30));
console.log('add(5, 10, 15):', add(5, 10, 15));


// Задание 10
console.log('');
console.log('-- Задание 10 -- Задача: шаблонные строки 2.0');

// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра,
// значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара

// Дополни код функции так, чтобы в переменную message записывалась строка
// "You picked <product name>, price per item is <product price> credits",
// где <product name> и <product price> это значения параметров name и price.
// Используй синтаксис шаблонных строк.

function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
}

console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));


// Задание 11
console.log('');
console.log('-- Задание 11 -- Задача: математические операторы 2.0');

// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра,
// значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.

// Дополни код функции так, чтобы в переменную totalPrice записывалась общая
// сумма покупки, результат умножения кол-ва товаров на цену одного.

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};

console.log('calculateTotalPrice(5, 100):', calculateTotalPrice(5, 100));
console.log('calculateTotalPrice(8, 60):', calculateTotalPrice(8, 60));
console.log('calculateTotalPrice(3, 400):', calculateTotalPrice(3, 400));
console.log('calculateTotalPrice(1, 3500):', calculateTotalPrice(1, 3500));
console.log('calculateTotalPrice(12, 70):', calculateTotalPrice(12, 70));


// Задание 12
console.log('');
console.log('-- Задание 12 -- Заказ продукта 2.0');

// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение
// о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки

// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате

// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
//  Не забудь о цене доставки при вычислениях общей стоимости.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
    const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));


// Задание 13
console.log('');
console.log('-- Задание 13 -- Проверка на совершеннолетие');

// Функция isAdult объявляет один параметр age(возраст), значение которого будет задаваться во время её вызова.
// Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.
// Человек считается совершеннолетним в возрасте 18 лет и старше.

// Объявлена функция isAdult(age)
// В выражении проверки используется оператор >=
// Вызов isAdult(20) возвращает true
// Вызов isAdult(14) возвращает false
// Вызов isAdult(8) возвращает false
// Вызов isAdult(37) возвращает true

let passed;

function isAdult(age) {
    passed = age >= 18 ? true : false;  
    return passed;
}

console.log('isAdult(20):', isAdult(20));
console.log('isAdult(14):', isAdult(14));
console.log('isAdult(8):', isAdult(8));
console.log('isAdult(37):', isAdult(37));


// Задание 14
console.log('');
console.log('-- Задание 14 -- ОПЕРАТОРЫ СРАВНЕНИЯ === И !==');

// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки
// - буль true или false.Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля.Введённый пароль передаётся
// в параметр password.Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей.
// Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// Объявлена функция isValidPassword(password)
// В выражении проверки паролей использован оператор ===
// Вызов isValidPassword("mangodab3st") возвращает false
// Вызов isValidPassword("kiwirul3z") возвращает false
// Вызов isValidPassword("jqueryismyjam") возвращает true

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
    const isMatch = password === SAVED_PASSWORD ? true : false;
  // Change code above this line
  return isMatch;
}

console.log('isValidPassword("mangodab3st"):', isValidPassword("mangodab3st"));
console.log('isValidPassword("kiwirul3z"):', isValidPassword("kiwirul3z"));
console.log('isValidPassword("jqueryismyjam"):', isValidPassword("jqueryismyjam"));


// Задание 15
console.log('');
console.log('-- Задание 15 -- ИНСТРУКЦИЯ IF...ELSE');

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=

// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are a minor"
// Вызов checkAge(38) возвращает "You are an adult"

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult.';
  } else {
    message = 'You are a minor.';
  }

  return message;
}

console.log('checkAge(20):', checkAge(20));
console.log('checkAge(8):', checkAge(8));
console.log('checkAge(14):', checkAge(14));
console.log('checkAge(38):', checkAge(38));


// Задание 16
console.log('');
console.log('-- Задание 16 -- ЗАДАЧА: СКЛАД ТОВАРОВ');

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе

// Используя ветвления, дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается
// строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".
// Объявлена функция checkStorage(available, ordered).


// Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

function checkStorage(available, ordered) {
    let orderMessage;
    orderMessage = available >= ordered ? "Order is processed, our manager will contact you." : "Not enough goods in stock!";
    return orderMessage;
}

console.log('checkStorage(100, 50):', checkStorage(100, 50));
console.log('checkStorage(100, 130):', checkStorage(100, 130));
console.log('checkStorage(200, 20):', checkStorage(200, 20));
console.log('checkStorage(200, 150):', checkStorage(200, 150));
console.log('checkStorage(150, 180):', checkStorage(150, 180));