// Task-20
console.log('-- Задание 20 --');
/*
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
Она объявляет два параметра, значения которых будут задаваться во время её вызова. 

available - доступное количество товаров на складе.
ordered - количество единиц товара в заказе.

Используя ветвления, дополни код функции так, чтобы:

Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка
'В заказе еще нет товаров'.

Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка
'Слишком большой заказ, на складе недостаточно товаров!'.

В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.

Тесты
Объявлена функция checkStorage(available, ordered).
Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(100, 130) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
Вызов checkStorage(70, 0) возвращает 'В заказе еще нет товаров'.
Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(200, 250) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
Вызов checkStorage(150, 0) возвращает 'В заказе еще нет товаров'.
*/

//Task START
function checkStorage(available, ordered) {
  let message;
 // Change code below this line
  if (ordered === 0) {
    message = 'В заказе еще нет товаров';
  } else if (ordered > available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  console.log('');
  console.log('Вызов checkStorage', available, ordered, 'возвращает:');
  console.log(message);
}

// Теsts
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);


// Task-21
console.log('');
console.log('-- Задание 21 --');
console.log('');
/*
Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра,
значения которых будут задаваться во время её вызова:

number - число, вхождение которого проверяется.
start - начало числового промежутка.
end - конец числового промежутка.

Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end.
То есть число должно быть больше либо равно start и меньше либо равно end.
Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция isNumberInRange(start, end, number).
В выражении проверки использован оператор &&.
Вызов isNumberInRange(10, 30, 17) возвращает true.
Вызов isNumberInRange(10, 30, 5) возвращает false.
Вызов isNumberInRange(20, 50, 24) возвращает true.
Вызов isNumberInRange(20, 50, 76) возвращает false.
*/

//Task START
function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end ? true : false;
    return isInRange
}

// Теsts
console.log('isNumberInRange(10, 30, 17) возвращает', isNumberInRange(10, 30, 17));
console.log('isNumberInRange(10, 30, 5) возвращает', isNumberInRange(10, 30, 5));
console.log('isNumberInRange(20, 50, 24) возвращает', isNumberInRange(20, 50, 24));
console.log('isNumberInRange(20, 50, 76) возвращает', isNumberInRange(20, 50, 76));


// Task-22
console.log('');
console.log('-- Задание 22 --');
console.log('');
/*
Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. 
Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.
Присвой переменной canAccessContent выражение проверки подписки.
Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ.
Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция checkIfCanAccessContent(subType).
В выражении проверки использован оператор ||.
Вызов checkIfCanAccessContent('pro') возвращает true.
Вызов checkIfCanAccessContent('starter') возвращает false.
Вызов checkIfCanAccessContent('vip') возвращает true.
Вызов checkIfCanAccessContent('free') возвращает false.
*/

//Task START
function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip' ? true : false;
    return canAccessContent;
}

// Теsts
console.log('checkIfCanAccessContent(pro) возвращает:', checkIfCanAccessContent('pro'));
console.log('checkIfCanAccessContent(starter) возвращает:', checkIfCanAccessContent('starter'));
console.log('checkIfCanAccessContent(vip) возвращает:', checkIfCanAccessContent('vip'));
console.log('checkIfCanAccessContent(free) возвращает:', checkIfCanAccessContent('free'));