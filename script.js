"use strict";

// const start = document.querySelector('#start'),
// 			progress = document.querySelector('#progress'),
// 			previews = document.querySelector('.previews');

// alert('1');


// let number = 5;
// let letBorderWidth = 1;
// const wert = 4;

// number = 10;
// console.log(number);

// const obj = {
// 	a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = "Ivan";

// {
// 	var result = 50;
// }

// console.log(result);
// "use strict";
// let a = 15;
// console.log(a);

// let number = 4.6;
// console.log(4/0);
// console.log(-4/0);
// console.log(-4/'1');
// console.log(4/"ww");
// console.log('www'/"ww");
// console.log(0/0);

// let person = 'Alex';
// person = 'Andrew';
// console.log(person);
// console.log(typeof(person));

// const bool = true;

// console.log(fabrik);

// let und;
// console.log(und);

// const objict = {
// 	name: 'Jonh',
// 	age: 25,
// 	isMarried: false
// };

// console.log(objict.name);
// console.log(objict["name"]);

// let arr = [
// 	'plum.png',
// 	'orange.png',
// 	'apple.png',
// 	6,
// 	{},
// 	[]
// ];

// console.log(arr[5]);
// console.log(arr[4]);
// console.log(arr[1]);
// console.log(arr[0]);

// alert('hello, world');

// const result = confirm('Are you here?');
// console.log(result);

// const results = prompt('How old are you?', '');
// console.log(results);
// console.log(typeof(results));

// const results2 = +prompt('How old are you?', '');
// console.log(results2);
// console.log(typeof(results2));

// const answers = [];

// answers[0] = +prompt('Твой возраст?', '');
// answers[1] = prompt('Твое имя?', '');
// answers[2] = prompt('Твоя фамилия?', '');
// console.log(answers);
// console.log(typeof(answers));
// console.log(typeof(answers[0]));
// console.log(typeof(answers[1]));
// console.log(typeof(answers[2]));
// console.log(typeof(null));
// document.write(answers);

// const category = 'toys';

// console.log('https://someurl.com/' + category + '/5');
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Hello,${user}`);

// "use strict";

// console.log('arr' + '-object');
// console.log(4 + '-object');
// console.log(4 + +'-object');
// console.log(4 + +'50');

// let incr = 10,
// 		decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// let incrs = 10,
// 		decrs = 10;

// ++incrs;
// --decrs;

// console.log(incrs++);
// console.log(decrs--);

// console.log(++incrs);
// console.log(--decrs);

// console.log(5%2);
// console.log(2*4 == 8);
// console.log(2*4 == "8");
// console.log(2*4 === "8");
// console.log(2 + 2 * 2 === 8); // false
// console.log(2 + 2 * 2 !== 8); // true
// console.log((2 + 2) * 2 === 8); // true

// &&
// ||

// const isChecked = true,
// 			isClose = false;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);
// console.log(isChecked || !isClose);



// if (4 == 42) {
// 	console.log('Ok');
// } else {
// 	console.log('Error');
// }

// const num = 50;

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Too much');
// } else {
// 	console.log('Good');
// }
// const num = 50;
// (num == 50) ? console.log("Correct") : console.log("Not Nice");

// const num = 51;

// switch (num) {
// 	case 49:
// 		console.log('Not corrrect');
// 		break;
// 	case 100:
// 		console.log('Not corrrect');
// 		break;
// 	case 50:
// 		console.log('You are wright');
// 		break;
// 	default:
// 		console.log('Not in this time');
// 		break;
// }
// let num = 50;

// while (num <= 55) {
	// console.log(num);
	// num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num <= 55);

// for (let i = 0; i < 11; i++) {
// 	console.log(num);
// 	num++;
// }

// for (let i = 1; i < 8; i++) {
// 	if (i === 5) {
// 		// continue;
// 		break;
// 	}
// 	console.log(i);
// }

// function showFirstMessage(a) {
// 	console.log(`hello, ${a}`);
// }
// showFirstMessage('Mike');

// let num = 33;

// function showFirstMessage(text) {
// 	console.log(text);
// 	// let num = 27;
// 	console.log(num);
// }
// showFirstMessage('hello world!');
// console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(40, 50));
// console.log(calc(400, 500));

// function ret() {
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
// 	console.log('HELLO WORLD');
// };

// logger();

// const calc = (a, b) => {return a + b;};

// console.log(calc(3,3));
// console.log(calc(4,3));
// console.log(calc(5,3));
// console.log(calc(6,3));

const str = 'test';
const arr = [1, 2, 3];

console.log(arr.length);
console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

const logg = 'Hello world';
console.log(logg.slice(6, 11));
console.log(logg.length);

console.log(logg.slice(6, logg.length));
console.log(logg.slice(6));
console.log(logg.slice(-5));

console.log(logg.slice(-1));
console.log(logg.slice(0, 5));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));