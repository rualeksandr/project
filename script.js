'use strict';

// // Обьявление переменных
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// // Типы переменных
// let number = 1; 
// let string = "Текст";
// let sim = Symbol();
// let bollean = true;
// null;
// undefined;
// let obj = {};

// // Числовые значения Infinity и NaN
// console.log(4/0); // Infinity
// console.log('Текст' * 9); // NaN

// // Переменные null и undefined
// //console.log(something); // null
// let something;
// console.log(something); // undefined

// // Объекты
// let persone = {
//     name:'Jonh',
//     age:21,
//     isMarried:false
// };

// console.log(persone.name);
// console.log(persone["age"]);

// let arr = ['img_1.jpeg', 'img_2.png'];
// console.log(arr[0]);

// // Вывод
// //console.log('Hello World!');
// alert('Hello World!');
// let answer = confirm("Are you hare?");
// console.log(answer);
// let answerTwo = prompt("Есть ли Вам 18?","Да");
// console.log(answerTwo);

// Узнать тип данных 
// console.log(typeof(answerTwo));

// // Операторы (сложение, умножение, деление, вычитание)
// // Конкатенация сложение разних типов данных
// console.log("arr" + " - object"); // string
// console.log(1 + " - object"); // string

// console.log(prompt("Есть ли Вам 18?","Да")); // string
// // console.log(+prompt("Есть ли Вам 18?","Да")); // number

// // Инкремент и декремент (префиксная и постфикстная форма)
// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log('Инкремент: ' + incr + ' Декремент: ' + decr);

// console.log('Сначала выведет, потом увеличит на 1: ' + incr++);
// console.log('Сначала выведет, потом уменьшит на 1: ' + decr--);

// // Остаток от деление
// console.log(5%2);

// // Оператор =, == и ===
// // =   Присваивания
// // ==  Сравнение
// // === Строгое сравнение

// console.log("2" == 2); 
// console.log("2" === 2);

// Операторы И, ИЛИ 

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose); // И (если все true, то true, а наче false)
// console.log(isChecked || isClose); // ИЛИ (если все false, то false, а иначе true)

// ФУНКЦИИ 
// let num = 20;
// function showFirstMessage(text){
//     alert(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage('УРА');
// console.log(num);

// function calc(a,b){
//     return (a + b);
// }
// console.log(calc(3,4));
// console.log(calc(8,4));

// function retNum(){
//     let num = 50;
//     return num;
// }
// let anotherNum = retNum();
// console.log(anotherNum);

// function expression - не создается заранее
// let calc = function(a,b) {
//     return (a + b);
// }
// console.log(calc(4,9));

// Стрелочная функция 
// let calc = (a,b) => a + b;
// console.log(calc(4,9));

// Методы и свойства
// let str = "test";
// console.log(str.length); // Свойство длинна
// console.log(str.toUpperCase()); // Метод переводит в верхний регистр
// console.log(str.toLowerCase()); // Метод переводит в нижний регистр

// let twelwe = "12.2";
// console.log(Math.round(twelwe));

let twelwe = "12.2px";
console.log(parseInt(twelwe));
console.log(parseFloat(twelwe));







