/*
 Домашнее задание
 Вывести «Привет, Javascript» c помощью alert
 Работа с переменными
 Объявите две переменные: admin и name.
 Запишите в name строку "Василий".
 Скопируйте значение из name в admin.
 Выведите admin (должно вывести «Василий»).
 * Самостоятельно разобраться с атрибутами тэга script (async и defer)
 */

// этот код будет работать по современному стандарту ES5
'use strict';

// выводим «Привет, Javascript» c помощью alert
// alert('Привет, Javascript');

// объявляем две переменные: admin и name, переменной name присваиваем значение 'Василий'
// var admin, name = 'Василий';

// копируем значение из name в admin
// admin = name;

// выводим значение переменной admin
// alert(admin);

//==================================================


// объявляем две переменные: admin и name, переменной name присваиваем значение 'Василий'
var admin, name = 'Василий';

function hello() {
// выводим «Привет, Javascript» c помощью alert
    alert('Привет, Javascript');
}

function copyVar() {
// копируем значение из name в admin
    admin = name;

// выводим значение переменной admin
    alert(admin);
}