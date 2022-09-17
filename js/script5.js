// Task-23
console.log('-- Задание 23 --');
console.log('');
/*
Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. 
То есть число должно быть меньше либо равно start и больше либо равно end.
Результатом выражения проверки будет буль true или false.
Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, не вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка

Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

Тесты
Объявлена функция isNumberNotInRange(start, end, number).
В выражении использован оператор !.
Вызов isNumberNotInRange(10, 30, 17) возвращает false.
Вызов isNumberNotInRange(10, 30, 5) возвращает true.
*/

//Task START
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end ? true : false;
  const isNotInRange = !isInRange ; // Change this line
  return isNotInRange;
}

// Теsts
console.log('isNumberNotInRange(10, 30, 17) возвращает', isNumberNotInRange(10, 30, 17));
console.log('isNumberNotInRange(10, 30, 5) возвращает', isNumberNotInRange(10, 30, 5));


// Task-24
console.log('');
console.log('-- Задание 24 --');
console.log('');
/*
Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent)
в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции
как результат её работы. Используя ветвления и логические операторы, дополни код функции.

Если потрачено от 50 000 или больше кредитов - скидка 10% (золотой партнёр);
Если потрачено от 20 000 (включительно) до 50 000 кредитов - скидка 5% (серебрянный партнёр);
Если потрачено от 5 000 (включительно) до 20 000 кредитов - скидка 2% (бронзовый партнёр);
Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр);

Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

Тесты
Объявлена функция getDiscount(totalSpent).
Вызов getDiscount(137000) возвращает 0.1.
Вызов getDiscount(46900) возвращает 0.05.
Вызов getDiscount(8250) возвращает 0.02.
Вызов getDiscount(1300) возвращает 0.
Вызов getDiscount(5000) возвращает 0.02.
Вызов getDiscount(20000) возвращает 0.05.
Вызов getDiscount(50000) возвращает 0.1.
*/

//Task START
function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;

    if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT;
    } else {
        discount = BASE_DISCOUNT;
    }
    return discount;
}

// Теsts
console.log('getDiscount(137000) возвращает', getDiscount(137000));
console.log('getDiscount(46900) возвращает', getDiscount(46900));
console.log('getDiscount(8250) возвращает', getDiscount(8250));
console.log('getDiscount(1300) возвращает', getDiscount(1300));
console.log('getDiscount(5000) возвращает', getDiscount(5000));
console.log('getDiscount(20000) возвращает', getDiscount(20000));
console.log('getDiscount(50000) возвращает', getDiscount(50000));


// Task-25
console.log('');
console.log('-- Задание 25 --');
console.log('');
/*
Задание
Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

Тесты
Объявлена функция checkStorage(available, ordered).
Использован тернарный оператор.
Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.
*/

//Task START
function checkStorage(available, ordered) {
    let message;
     // Change code below this line
    message = ordered <= available ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';
    return message;
}

// Теsts
console.log('Вызов checkStorage(100, 50) возвращает:', checkStorage(100, 50));
console.log('Вызов checkStorage(100, 130) возвращает:', checkStorage(100, 130));
console.log('Вызов checkStorage(200, 20) возвращает:', checkStorage(200, 20));
console.log('Вызов checkStorage(200, 150) возвращает:', checkStorage(200, 150));
console.log('Вызов checkStorage(150, 180) возвращает:', checkStorage(150, 180));


// Task-26
console.log('');
console.log('-- Задание 26 --');
console.log('');
/*
Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора
(константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате. Используя тернарный оператор,
дополни функцию так, что:

Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
В противном случае, присвой message строку 'Доступ запрещён, неверный пароль!'.

Тесты
Объявлена функция checkPassword(password).
Использован тернарный оператор.
Вызов checkPassword('jqueryismyjam') возвращает 'Доступ разрешен'.
Вызов checkPassword('angul4r1sl1f3') возвращает 'Доступ запрещён, неверный пароль!'.
Вызов checkPassword('r3actsux') возвращает 'Доступ запрещён, неверный пароль!'.
*/

//Task START
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    // Change code below this line
    message = password === ADMIN_PASSWORD ? 'Доступ разрешен.' : 'Доступ запрещён, неверный пароль!';
    return message;
}

// Теsts
console.log('checkPassword(jqueryismyjam) возвращает:', checkPassword('jqueryismyjam'));
console.log('checkPassword(angul4r1sl1f3) возвращает:', checkPassword('angul4r1sl1f3'));
console.log('checkPassword(r3actsux) возвращает:', checkPassword('r3actsux'));


// Task-27
console.log('');
console.log('-- Задание 27 --');
console.log('');
/*
Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type),
проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.
Если значение параметра type это строка:

'starter' - цена подписки 0 кредитов.
'professional' - цена подписки 20 кредитов.
'organization' - цена подписки 50 кредитов.

Изначально в теле функции была инструкция if...else, которая выглядела вот так.
if (type === 'starter') {
  price = 0;
} else if (type === 'professional') {
  price = 20;
} else if (type === 'organization') {
  price = 50;
}

После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

Тесты
Объявлена функция getSubscriptionPrice(type).
Вызов getSubscriptionPrice('professional') возвращает число 20.
Вызов getSubscriptionPrice('organization') возвращает число 50.
Вызов getSubscriptionPrice('starter') возвращает число 0.
*/

//Task START
function getSubscriptionPrice(type) {
  let price;
    // Change code below this line
    switch (type) {
        case 'professional':
            price = 20;
            break;
        
        case 'organization':
            price = 50;
            break;
        
        case 'starter':
            price = 0;
            break;
    }
    return price;
}

// Теsts
console.log('вызов getSubscriptionPrice(professional) возвращает:', getSubscriptionPrice('professional'));
console.log('вызов getSubscriptionPrice(organization) возвращает:', getSubscriptionPrice('organization'));
console.log('вызов getSubscriptionPrice(starter) возвращает:', getSubscriptionPrice('starter'));