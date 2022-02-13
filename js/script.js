// 'use strict';
// 1) звичайна функція: this = window, але якщо 'use strict' - underfined
// function showThis() {
// 	console.log(this);
// }
// showThis();

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }
// showThis(4, 5);



// 2) контекст виклику функції як метод об'єкту
// контекст у методів об'єкту - сам об'єкт

// 'use strict';

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this);
		// function shout() {
		// 	console.log(this);
		// }
		// shout();
// 	}
// };
// obj.sum();

//3) this у функціях-конструкторах і класах - це новий екземпляр об'єкта

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log('Hello' + this.name);
// 	};
// }
// let ivan = new User('Ivan', 23);
// console.log(ivan);

// 4) присвоєння this вручну будь-якій функції
// function sayName(){
// 	console.log(this);
// 	console.log(this.name);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user);
// sayName.apply(user);

// function sayName(surname){
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// function count(num) {
// 	return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));




const btn = document.querySelector('button');


// класичний запис функції та приклад конткесту її виклику
// btn.addEventListener('click', function() {
// 	console.log(this);
// 	this.style.backgroundColor = 'red';
// });

// btn.addEventListener('click', () => {
// 	this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e) => {
	e.target.style.backgroundColor = 'red';
});





// стрілкова функція та приклад контексту її виклику
const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this.num);
		};

		say();
	}
};

obj.sayNumber();

// приклад 3
// const doubles = (a) => {
// 	return a*2;
// };

// const doubles = (a) => a*2;
// const doubles = (a, b) => a*b;
// console.log(doubles(4, 6));