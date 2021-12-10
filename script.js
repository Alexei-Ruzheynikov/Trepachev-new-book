"use strict";

// let test = 13;
// if (test > 10) {
//   alert("верно");
// } else {
//   alert("неверно");
// }

// let test = 6;
// if (test >= 10) {
//   alert("верно");
// } else {
//   alert("неверно");
// }

// let test = 10;
// if (test === 10) {
//   alert("верно");
// } else {
//   alert("неверно");
// }

// let test = 2;
// if (test !== 10) {
//   alert("верно");
// } else {
//   alert("неверно");
// }

// let test1 = '3';
// let test2 = '3';

// if (test1 == test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test1 = 3;
// let test2 = 2;

// if (test1 !== test2) {
//   alert("верно");
// } else {
//   alert("неверно");
// }

// let num = 3;
// if (num > 0 && num < 5) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

// let num = 3;
// if (num >= 10 && num <= 20) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

// let num1 = -3;
// let num2 = 7;
// if (num1 <= 1 && num2 >= 3) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

// let num1 = -1;
// let num2 = 85;
// if (!(num1 >= 0 || num2 <= 10)) {
//   alert("верно");
// } else {
//   alert("неверно");
// }


// let test = -1;

// if (test) {
//   alert("верно");
// } else {
//   alert("неверно");
// }

// if (test == 0) alert('верно'); else alert('неверно!');

// if (test == 0) alert('верно');

// let day = 43;
// if(day >0 && day <= 10){
//   alert('1 декада');
// } else if(day > 10 && day <= 20){
//   alert('2 декада');
// } else if(day > 20 && day <= 31){
//   alert('3 декада');
// } else {
//   alert('не число месяца')
// }

// let num = 38;
// if(num < 10 || num > 99){
//   alert('Число меньше 10 или больше 99');
// } else if (num > 10 && num < 99) {
//   num = num.toString();
//   num = +num[0] + +num[1];
//   if ( num <=9){
//     alert('Сумма цифр однозначна');
//   } else {
//     alert('Сумма цифр двузначна');
//   }
// }

// let age = 17;
// let adult;
// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);

// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);

// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);

// let age = 24;
// let result;

// if (age >= 18) {
// 	if (age <= 23) {
// 		 result = 'от 18 до 23';
// 	} else {
// 		 result = 'больше 23';
// 	}
// } else {
// 	 result = 'меньше 18';
// }

// console.log(result);

// let age = 69;
// let result;

// if (age >= 18) {
// 	// let result;
	
// 	if (age <= 23) {
// 		result = 'от 18 до 23';
// 	} else {
// 		result = 'больше 23';
// 	}
// } else {
// 	result = 'меньше 18';
// }

// console.log(result);

// let num = 1;
		
// if (num == 1) {
// 	var result = 'верно';
// } else {
// 	var result = 'неверно';
// }

// console.log(result);

// let num = 1;
		
// if (num == 1) {
// 	let result = 'верно';
// } else {
// 	let result = 'неверно';
// }

// console.log(result);

// let min = 22;
// if(min >= 0 && min<=19){
//   console.log('1 треть');
// }
// if(min >= 20 && min<=39){
//   console.log('2 треть');
// }
// if(min >= 40 && min<=59){
//   console.log('3 треть');
// }

// let arr = [1,2,3];
// if(arr.length == 3){
//   let result = 0;
//   for(let i = 0; i < arr.length; i++){
//     result += arr[i];
    
//   }
//   console.log(result);
// }

// let num = 120;
// let str = String(num);
// if(str[str.length - 1] == 0){
//   console.log('Последняя цифра 0');
// } else {
//   console.log('Последняя цифра не ноль');
// }

// let num = 122;
// let str = String(num);
// if (str[str.length-1] == 0 || str[str.length-1] == 2 || str[str.length-1] == 4 || str[str.length-1] == 6 || str[str.length-1] == 8) {
//   console.log('Четное');
// } else {
//   console.log('нечетное');
// }

// let a = 4;
// let b = 2;
// let rest = a % b;
// if(rest == 0){
//   console.log('Четное');
// } else {
//   console.log("Нечетное");
// }

// let a = 11;
// let b = 3;
// let rest = a % b;
// if(rest == 0) {
//   console.log('Делится на 3');
// } else {
// console.log('Не делится на 3');
// }

// let month = 5;
// if(month >= 1 && month <= 3){
//   console.log('Зима');
// }
// if(month >= 4 && month <= 6){
//   console.log('Весна');
// }
// if(month >= 7 && month <= 9){
//   console.log('Лето');
// }
// if(month >= 10 && month <= 12){
//   console.log('Осень');
// }

// let str = 'gbcde';
// if(str[0] == 'a'){
//   console.log('да');
// } else{
//   console.log('нет');
// }

// let num = 42345;
// let str = String(num);
// if(str[0] == 1 || str[0] == 2 || str[0] == 3){
//   console.log('Да');
// } else {
//   console.log('Нет');
// }

// let num = 456;
// let str = String(num);
// let result = 0;
// for(let i = 0; i < str.length; i++){
// result += +str[i];
// }
// console.log(result);

// let num = 123123;
// let str = String(num);
// if((str[0] + str[1] + str[2]) == (str[3] + str[4] + str[5])){
//   console.log('Да');
// } else {
//   console.log('Нет');
// }

// let num = 5;
// switch(num){
//   case 1:
//     console.log('Зима');
//     break;
//   case 2:
//     console.log('Весна');
//     break;
//   case 3:
//     console.log('Лето');
//     break;
//   case 4:
//     console.log('Осень');
//     break;
//   default:
//     console.log('Ошибка');
//     break;
// }

// let num = -5;
// let result = num >= 0 ? 1 : -1;
// console.log(result);

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// let res = a==b;
// console.log(res);

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// let res = a > b;
// console.log(res);

// let a = 2 ** 4;
// let b = 4 ** 2;
// let res = a != b;
// console.log(res);

// if(age<14 && age > 90)
// if(!(age>=14 && age <= 90))

// let login = prompt('Кто там?');

// if(login == 'Админ'){

//   let password = prompt('Введите пароль');

//   if(password == 'Я главный'){
//     alert('Здравствуйте');
//   } else if(password == '' || password == null){
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }

// } else if(login == '' || login == null){
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }

// let age = confirm('Есть 18 лет?');
// if(age){
//   alert('Есть допуск');
// } else {
//   alert('Нет');
// }

// let i = 1;
// while(i<=100){
//   console.log(i);
//   i++;
// }

// let i = 11;
// while(i<=33){
//   console.log(i);
//   i++;
// }

// let i = 0;
// while(i <= 100){
//   console.log(i);
//   i +=2;
// }

// let i = 1;
// while(i <= 99){
//   console.log(i);
//   i +=2;
// }

// let i = 30;
// while(i >= 0){
//   console.log(i);
//   i--;
// }

// let i = 10;

// while (i >= 1) {
// 	console.log(i);
//   i--;
// }

// let i = 10;

// while (i >= 1) {
// 	console.log(i);
// 	i--;
// }

// let i = 10;

// while (i >= 0) {
// 	console.log(i);
// 	i--;
// }

// let i = 10;

// while (i >= 0) {
// 	console.log(i);
// 	i--;
// }

// let i = 10;

// while (i >= 0) {
// 	console.log(i);
// 	i--;
// }

// for(let i = 0; i <= 100; i++){
//   console.log(i);
// }

// for(let i = 11; i<=33; i++){
//   console.log(i);
// }

// for(let i = 0; i <=100; i +=2){
//   console.log(i);
// }

// for(let i = 1; i <=99; i+=2){
//   console.log(i);
// }

// for(let i = 100; i>=0; i--){
//   console.log(i);
// }

// let result = 1;
// for( let i=1; i<=20;i++){
//   result = result * i;
// }
// console.log(result);

// let result = 0;
// for(let i = 2; i <=100; i+=2){
//   result = result + i;
// }
// console.log(result);

// let res = 0;
// for(let i = 1; i<=99; i+=2){
//   res = res + i;
// }
// console.log(res);

// let arr = ['a','b','c','d','e'];
// for(let i = 0; i <= arr.length-1; i++){
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
		
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// let arr = [1,2,3,4,5];
// for(let i = 0; i<=arr.length-1; i++){
//   if(arr[i] % 2 != 0){
//     console.log(arr[i]);
//   }
// }

// let res = 1;
// let arr = [1,2,3,4,5];
// for(let i = 0; i <= arr.length-1; i++){
//   res *= arr[i];
// }
// console.log(res);

// let res = 0;
// let arr = [1,2,3,4,5];
// for(let i =0; i <= arr.length-1; i++){
//   arr[i] *= arr[i];
//   res +=arr[i];
// }
// console.log(res);

// let arr = [2,5,9,15,1,4];
// for(let i = 0; i <= arr.length-1;i++){
//   if(arr[i] > 3 && arr[i] < 10){
//     console.log(arr[i]);
//   }
// }

// let res = 0;
// let arr = [1,2,3,4,-2,-3,-4];
// for(let i = 0; i <= arr.length; i++){
//   if(arr[i] > 0){
//     res += arr[i];
//   }
// }
// console.log(res);

// let arr = [1,2,3,4,5];
// let res = 0;
// for(let i =0; i <= arr.length-1; i++){
//   res += arr[i];
// }
// res /= arr.length;
// console.log(res);

// let arr = [10,20,30,50,235,3000];
// for(let i =0; i <= arr.length-1; i++){
//   if(String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5) {
//     console.log(arr[i]);
//   }
// }

// let arr =[1,2,3,4,5];
// for(let i = arr.length-1; i >= 0 ; i--){
//   console.log(arr[i]);
// }

// let arr = [1,1,2,3,4,4,4,6,7];
// for(let i = 0; i<= arr.length-1; i++){
//   if(arr[i] == i){
//     console.log(arr[i]);
//   }
// }

// let arr = [1,2,3,4,5];
// for(let i = 0; i <= arr.length-1; i++){
//   document.write(arr[i] + '<br>');
// }

// let arr = [1,2,3,4,5];
// for(let i = 0; i <= arr.length-1; i++){
//   document.write('<p>' + arr[i] + '</p>');
// }

// let arr = ['пн','вт','ср','чт','пт','сб','вс'];
// for(let i = 0; i <= arr.length-1; i++){
//   if(arr[i] == 'сб' || arr[i] == 'вс'){
//     document.write('<b>'+ arr[i] +'</b>'+'<br>');
//   } else{
//     document.write(arr[i] + '<br>');
//   }
// }

// let day = 4;
// let arr = ['пн','вт','ср','чт','пт','сб','вс'];
// for(let i = 0; i <= arr.length-1; i++){
//    if(arr[i] == arr[day]){
//     document.write('<i>'+ arr[i] +'</i>'+'<br>');
//   } else{
//     document.write(arr[i] + '<br>');
//   }
// }

