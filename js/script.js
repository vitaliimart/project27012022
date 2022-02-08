'use strict';

const now = new Date('2022-03-01');
// new Date.parse('2022-03-01');
// console.log(now);


// const now = new Date('2022-03-01');
// const now = new Date(2022, 5, 1, 20);
// const now = new Date(0);
// const now = new Date(-99999999);
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());


// console.log(now);
// console.log(now.setHours(18, 40));
// console.log(now);


// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i**3;
}

let end = new Date();
alert(`Цикл відпрацював за ${end-start} мілісекунд`);