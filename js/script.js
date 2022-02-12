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

function sayName(surname){
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'John'
};

sayName.call(user, ' Smith');
sayName.apply(user, [' Smith']);

function count(num) {
	return this*num;
}

const double = count.bind(2);
console.log(double(13));