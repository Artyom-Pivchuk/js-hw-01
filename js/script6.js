// Task-28
console.log('-- Задание 28 --');
console.log('');
/*
Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора
в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
Если значение параметра password:

равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.

Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

Тесты
Объявлена функция checkPassword(password).
Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.
*/

//Task START
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    switch (password) {
        case null:
            message = 'Отменено пользователем!';
            break;
        
        case ADMIN_PASSWORD:
            message = 'Добро пожаловать!';
            break;
        
        default:
            message = 'Доступ запрещен, неверный пароль!';
    }
    return message;
}

// Теsts
console.log('Вызов checkPassword(mangohackzor) возвращает:', checkPassword('mangohackzor'));
console.log('Вызов checkPassword(null) возвращает:', checkPassword(null));
console.log('Вызов checkPassword(polyhax) возвращает:', checkPassword('polyhax'));
console.log('Вызов checkPassword(jqueryismyjam) возвращает:', checkPassword('jqueryismyjam'));


// Task-29
console.log('');
console.log('-- Задание 29 --');
console.log('');
/*
Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country)
и возвращать сообщение о результате, хранящееся в переменной message. Обязательно используй инструкцию switch.
Формат возвращаемой строки:

Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

Список стран и стоимость доставки:
Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Ямайка - 120 кредитов

Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку
'Извините, в вашу страну доставки нет'

Тесты
Объявлена функция getShippingCost(country).
В теле функции использована инструкция switch.
Вызов getShippingCost('Австралия') возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
Вызов getShippingCost('Германия') возвращает 'Извините, в вашу страну доставки нет'.
Вызов getShippingCost('Китай') возвращает 'Доставка в Китай будет стоить 100 кредитов'.
Вызов getShippingCost('Чили') возвращает 'Доставка в Чили будет стоить 250 кредитов'.
Вызов getShippingCost('Ямайка') возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
Вызов getShippingCost('Швеция') возвращает 'Извините, в вашу страну доставки нет'.
*/

//Task START
function getShippingCost(country) {
    let message;
    // Change code below this line
    switch (country) {
        case 'Китай':
            message = `Доставка в ${country} будет стоить 100 кредитов.`;
            break;
        
        case 'Чили':
            message = `Доставка в ${country} будет стоить 250 кредитов.`;
            break;
        
        case 'Австралия':
            message = `Доставка в ${country} будет стоить 170 кредитов.`;
            break;
        
        case 'Ямайка':
            message = `Доставка в ${country} будет стоить 120 кредитов.`;
            break;
        
        default:
            message = `Извините, в вашу страну (${country}) доставки нет.`;
    }
    return message;
}

// Теsts
console.log('Вызов getShippingCost(Австралия) возвращает:', getShippingCost('Австралия'));
console.log('Вызов getShippingCost(Германия) возвращает:', getShippingCost('Германия'));
console.log('Вызов getShippingCost(Китай) возвращает:', getShippingCost('Китай'));
console.log('Вызов getShippingCost(Чили) возвращает:', getShippingCost('Чили'));
console.log('Вызов getShippingCost(Ямайка) возвращает:', getShippingCost('Ямайка'));
console.log('Вызов getShippingCost(Швеция) возвращает:', getShippingCost('Швеция'));


// Task-30
console.log('');
console.log('-- Задание 30 --');
console.log('');
/*
Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина.
Дополни шаблонную строку в переменной message длиной строки из параметра name.

Тесты
Объявлена функция getNameLength(name).
Вызов функции getNameLength('Poly') возвращает 'Длина вашего имени 4 символа(ов)'.
Вызов функции getNameLength('Harambe') возвращает 'Длина вашего имени 6 символа(ов)'.
Вызов функции getNameLength('Billy') возвращает 'Длина вашего имени 5 символа(ов)'.
Вызов функции getNameLength('Joe') возвращает 'Длина вашего имени 3 символа(ов)'.
*/

//Task START
function getNameLength(name) {
    const message = `Длина вашего имени ${name.length} символа(ов).`;
    return message;    
}

// Теsts
console.log('getNameLength(Poly) возвращает:', getNameLength('Poly'));
console.log('getNameLength(Harambe) возвращает:', getNameLength('Harambe'));
console.log('getNameLength(Billy) возвращает:', getNameLength('Billy'));
console.log('getNameLength(Joe) возвращает:', getNameLength('Joe'));


// Task-31
console.log('');
console.log('-- Задание 31 --');
console.log('');
/*
Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

courseTopicLength - длина строки.
firstElement - первый символ строки.
lastElement - последний символ строки.

Тесты
Объявлена переменная courseTopic.
Значение переменной courseTopic это строка 'JavaSript для начинающих'.
Объявлена переменная courseTopicLength.
Значение переменной courseTopicLength это число 24.
Объявлена переменная firstElement.
Значение переменной firstElement это строка 'J'.
Объявлена переменная lastElement.
Значение переменной lastElement это строка 'х'.
*/

//Task START
const courseTopic = 'JavaSript для начинающих';
// Change code below this line
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic.charAt(0);
const lastElement = courseTopic.charAt(courseTopicLength - 1);

// Теsts
console.log('courseTopic = ', courseTopic);
console.log('courseTopicLength = ', courseTopicLength);
console.log('firstElement = ', firstElement);
console.log('lastElement = ', lastElement);


// Task-32
console.log('');
console.log('-- Задание 32 --');
console.log('');
/*
Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов.
Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки

Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

Тесты
Объявлена функция getSubstring(string, length).
Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
Вызов функции getSubstring('Привет мир', 0) возвращает ''.
*/

//Task START
function getSubstring(string, length) {
    console.log(string.slice(0, length));
}

// Теsts
console.log('Вызов функции getSubstring(Привет мир, 3) возвращает');
getSubstring('Привет мир', 3);

console.log('Вызов функции getSubstring(Привет мир, 6) возвращает');
getSubstring('Привет мир', 6);

console.log('Вызов функции getSubstring(Привет мир, 8) возвращает');
getSubstring('Привет мир', 8);

console.log('Вызов функции getSubstring(Привет мир, 10) возвращает');
getSubstring('Привет мир', 10);

console.log('Вызов функции getSubstring(Привет мир, 0) возвращает');
getSubstring('Привет мир', 0);


// Task-33
console.log('');
console.log('-- Задание 33 --');
console.log('');
/*
Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, 
если длина превышает значение в параметре maxLength.

Дополни код функции так, что если длина строки: 
- не превышает maxLength, функция возвращает её в исходном виде.
- больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...',
после чего возвращает укороченную версию.

Тесты
Объявлена функция formatMessage(message, maxLength).
Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.
Вызов функции formatMessage('Curabitur ligula sapien', 23) возвращает 'Curabitur ligula sapien'.
Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.
*/

//Task START
function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    result = message.length <= maxLength ? message : `${message.slice(0, maxLength)} ...`;
    return result;
}

// Теsts
console.log('Вызов функции formatMessage(Curabitur ligula sapien, 16) возвращает:');
console.log(formatMessage('Curabitur ligula sapien', 16));

console.log('Вызов функции formatMessage(Curabitur ligula sapien, 23) возвращает:');
console.log(formatMessage('Curabitur ligula sapien', 23));

console.log('Вызов функции formatMessage(Vestibulum facilisis purus nec, 20) возвращает:');
console.log(formatMessage('Vestibulum facilisis purus nec', 20));

console.log('Вызов функции formatMessage(Vestibulum facilisis purus nec, 30) возвращает:');
console.log(formatMessage('Vestibulum facilisis purus nec', 30));

console.log('Вызов функции formatMessage(Nunc sed turpis a felis in nunc fringilla, 15) возвращает:');
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));

console.log('Вызов функции formatMessage(Nunc sed turpis a felis in nunc fringilla, 41) возвращает:');
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));


// Task-34
console.log('');
console.log('-- Задание 34 --');
console.log('');
/*
Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре.
Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

Тесты
Объявлена функция normalizeInput(input).
Вызов функции normalizeInput('Привет мир') возвращает 'привет мир'.
Вызов функции normalizeInput('Это НЕ СпаМ') возвращает 'это не спам'.
Вызов функции normalizeInput('Большие СКИДКИ') возвращает 'большие скидки'.
*/

//Task START
function normalizeInput(input) {
    const normalizedInput = input.toLowerCase();
    return normalizedInput;
}

// Tests
console.log(normalizeInput('Привет мир'));
console.log(normalizeInput('Это НЕ СпаМ'));
console.log(normalizeInput('Большие СКИДКИ'));


// Task-35
console.log('');
console.log('-- Задание 35 --');
console.log('');
/*
Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - 
результат проверки вхождения подстроки name в строку fullname.

fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
name - имя для проверки вхождения в полное имя.

Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). 
Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

Тесты
Объявлена функция checkForName(fullname, name).
Вызов функции checkForName('Егор Колбасов', 'Егор') возвращает true.
Вызов функции checkForName('Егор Колбасов', 'егор') возвращает false.
Вызов функции checkForName('Егор Колбасов', 'егОр') возвращает false.
Вызов функции checkForName('Егор Колбасов', 'Женя') возвращает false.
Вызов функции checkForName('Вадим Некрасов', 'Вадим') возвращает true.
Вызов функции checkForName('Вадим Некрасов', 'вадим') возвращает false.
Вызов функции checkForName('Вадим Некрасов', 'Дима') возвращает false.
*/

//Task START
function checkForName(fullName, name) {
    const result = fullName.includes(name);
    return result;
}

// Tests
console.log('Вызов функции checkForName(Егор Колбасов, Егор) возвращает:');
console.log(checkForName('Егор Колбасов', 'Егор'));

console.log('Вызов функции checkForName(Егор Колбасов, егор) возвращает:');
console.log(checkForName('Егор Колбасов', 'егор'));

console.log('Вызов функции checkForName(Егор Колбасов, егОр) возвращает:');
console.log(checkForName('Егор Колбасов', 'егОр'));

console.log('Вызов функции checkForName(Егор Колбасов, Женя) возвращает:');
console.log(checkForName('Егор Колбасов', 'Женя'));

console.log('Вызов функции checkForName(Вадим Некрасов, Вадим) возвращает:');
console.log(checkForName('Вадим Некрасов', 'Вадим'));

console.log('Вызов функции checkForName(Вадим Некрасов, вадим) возвращает:');
console.log(checkForName('Вадим Некрасов', 'вадим'));

console.log('Вызов функции checkForName(Вадим Некрасов, Дима) возвращает:');
console.log(checkForName('Вадим Некрасов', 'Дима'));


// Task-36
console.log('');
console.log('-- Задание 36 --');
console.log('');
/*
Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещённых слов spam и sale,
и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещённых слов, функция возвращает буль false.

Тесты
Объявлена функция checkForSpam(message).
Вызов функции checkForSpam('Latest technology news') возвращает false.
Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.
*/

//Task START
function checkForSpam(message) {
    let result;
    // Change code below this line
    const normalizedInput = message.toLowerCase();
    result = normalizedInput.includes('sale') || normalizedInput.includes('spam');
    return result;
}

// Tests
console.log('Вызов функции checkForSpam(Latest technology news) возвращает:');
console.log(checkForSpam('Latest technology news'));

console.log('Вызов функции checkForSpam(JavaScript weekly newsletter) возвращает:');
console.log(checkForSpam('JavaScript weekly newsletter'));

console.log('Вызов функции checkForSpam(Get best sale offers now!) возвращает:');
console.log(checkForSpam('Get best sale offers now!'));

console.log('Вызов функции checkForSpam(Amazing SalE, only tonight!) возвращает:');
console.log(checkForSpam('Amazing SalE, only tonight!'));

console.log('Вызов функции checkForSpam(Trust me, this is not a spam message) возвращает:');
console.log(checkForSpam('Trust me, this is not a spam message'));

console.log('Вызов функции checkForSpam(Get rid of sPaM emails. Our book in on sale!) возвращает:');
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));

console.log('Вызов функции checkForSpam([SPAM] How to earn fast money?) возвращает:');
console.log(checkForSpam('[SPAM] How to earn fast money?'));