'use strict';

const box = document.querySelector('.box'),
			btn = document.querySelector('button');
// const	width = box.clientWidth;
// const	height = box.clientHeight;
// const	width = box.offsetWidth;
// const	height = box.offsetHeight;
// const	width = box.scrollWidth;
// const	height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
	// box.style.height = box.scrollHeight + 'px';
	// console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);
// console.log(box.getBoundingClientRect().right);
// console.log(box.getBoundingClientRect().bottom);
// console.log(box.getBoundingClientRect().left);

const style = window.getComputedStyle(box);
// console.log(style);
console.log(style.display);

console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400);
window.scrollTo(400, 0);
