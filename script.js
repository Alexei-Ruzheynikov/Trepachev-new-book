// console.log("Количество байт в килобайте = " + 1024 * 1024);
// console.log("Количество байт в гигабайте = " + 1024 * 1024 * 1024);
// console.log("Количество байт в 10 гигабайтах = " + 1024 * 1024 * 1024 * 10);
// console.log("Количество байт в терабайте = " + 1024 * 1024 * 1024 * 1024);

//Площадь круга по радиусу
// let circleRadius = 10;
// const PI = 3.14;
// let s = PI * circleRadius ** 2;
// console.log(s);

//Площадь квадрата
// let a = 5;
// let s = a ** 2;
// console.log(s);

//Площадь прямоугольника
// let a = 3;
// let b = 5;
// let s = a * b;
// console.log(s);

// let a = 3;
// let b = 5;
// const perimeter = a + a + b + b;
// console.log(perimeter);

// Перевод температуры Цельсия в Фарентгейт
// let celsiusЕemperature = 10;
// let temperatureFahrenheit = celsiusЕemperature * 1.8 + 32;
// console.log(temperatureFahrenheit);

// Перевод температуры Фарентгейт в Цельсия
// let tf = 50;
// let tc = (tf - 32) / 1.8;
// console.log(tc);

// let a = "" + 3 + 1;
// alert(a);

// let a = "10";
// let b = "20";
// console.log(Number(a) + Number(b));

// alert("2" + Number("3"));

// let a = +"2";
// let b = +"3";
// alert(a + b); // выведет '23'

// alert(Number("2s"));

// let num = parseFloat("12.5px");
// alert(num);

// let a = "5px";
// let b = "6px";
// let result = parseInt(a) + parseInt(b);
// alert(result);

// let a = "5.5px";
// let b = "6.25px";
// let result = parseFloat(a) + parseFloat(b);
// alert(result + "px");

// let a = 10;
// let b = 12;
// let result = String(a) + String(b);
// alert(result);

// let a = 544213213;
// let aRes = String(a).length;
// let b = 544213213;
// let bRes = String(b).length;
// alert(aRes + bRes);

// alert(String(true) + Number(true));

// let test = Boolean(1 / 0);
// alert(test);

// let a = "abcde";
// let num = 3;
// alert(a[num]);
// alert(a[4] + a[3] + a[2] + a[1] + a[0]);

// let str = "abcdes";
// alert(str[str.length - 3]);

// let str = "12345";
// alert(
//   Number(str[0]) +
//     Number(str[1]) +
//     Number(str[2]) +
//     Number(str[3]) +
//     Number(str[4])
// );

// let str = String(12345);
// alert(
//   Number(str[0]) +
//     Number(str[1]) +
//     Number(str[2]) +
//     Number(str[3]) +
//     Number(str[4])
// );

// let str = String(12345);
// alert(str[0] * str[1] * str[2] * str[3] * str[4]);

// let str = String(12345);
// alert(str[4] + str[3] + str[2] + str[1] + str[0]);

// let num = 10;
// num++;
// num++;
// num--;
// alert(num);

// let num1 = 0;
// let num2 = ++num1; // в переменную num2 запишется 1
// alert(num2); // выведет 1
// alert(num1);

// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// alert(--num2);

// let names = prompt("Ваше имя?");
// alert("Ваше имя: " + names);

// alert("Ваше имя: " + prompt("Ваще имя?"));

// let num1 = prompt("1 число");
// let num2 = prompt("2 число");
// alert(+num1 + +num2);

// let aUser = +prompt("Какова сторона квадрата?");
// let res = aUser ** 2;
// alert(res);

let aUser = +prompt("Какова длина прямоугольника?");
let bUser = +prompt("Какова ширирна прямоугольника?");
let res = "Площадь прямогульника: " + aUser * bUser;
alert(res);
