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
// # means the element has an id='first'
const first = document.querySelector("#first");
console.log("this is first", first);

// 2. Get the first element with a class of 'second' with querySelector
const second = document.querySelector(".second");
console.log("query selector: ", second);

// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
const secondAll = document.querySelectorAll(".second");
// this returns all the elements with a class of .second

// 4. Get the span element using querySelector
const span = document.querySelector("span");
console.log("span", span);
// 5. Get multiple span elements using querySelectorAll
const spanAll = document.querySelectorAll("span");
console.log("spanAll", spanAll);

// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
// a space between the elements reppresents that the latter is a child
// div > a will grab all a's that are immediate direct children to the div..
let a = document.querySelectorAll("div > a");
console.log("query selector a: ", a);

// 7. Select all elements that contain a "data-target" attribute
// [data-target] is the attribute name and must be in brackets []
const dataTarget = document.querySelectorAll(`[data-target]`);
console.log("this is dataTarget", dataTarget);
// 8. Select all elements where the data-target attribute equals "#false"
const dataTargetFalse = document.querySelectorAll(`[data-target="#false"]`)
console.log("this is dataTargetFalse", dataTargetFalse);