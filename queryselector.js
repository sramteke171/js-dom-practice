/*
 * I Do:
 *
 * Watch me as I:
 *   - use the querySelector  methods to retrieve elements from the DOM
 */

/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector
const first = document.querySelector('#first');
console.log(first);

// 2. Get the elements with a class of 'second' with querySelector
// const second = document.querySelector('.second');
// console.log(second);

// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?

const second = document.querySelectorAll('.second');
console.log(second);

// 4. Get the span element using querySelector
const span = document.querySelector('span');
console.log(span);

// 5. Get multiple span elements using querySelectorAll
// const span = document.querySelectorAll('span');
// console.log(span);

// 6. Select only "a" tags *directly inside* of a div (no grandchildren).

const a = document.querySelectorAll('div > a');
// const a = document.querySelectorAll('div > section > a');
console.log(a);

// 7. Select all elements that contain a "data-target" attribute

// const data_target = document.querySelectorAll('[data-target]');
// console.log(data_target);

// 8. Select all elements where the data-target attribute equals "#false"
const false_data_target = document.querySelectorAll('[data-target="#false"]');
console.log(false_data_target);