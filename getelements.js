/*
 * I Do:
 *
 * Watch me as I:
 *   - use the getElement(s) methods to retrieve elements from the DOM
 */


/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first'

// let titleElement = document.getElementById("title");
// let paragraphElements = document.getElementsByClassName("paragraph");
// let spanElements = document.getElementsByTagName("span");

const first = document.getElementById("first");
console.log(first);

// 2. Now delete that first element (in the html file), and re-run your code.
//    What changed?

// 3. Get the elements with a class of 'second' with getElementsByClassName:
const second = document.getElementsByClassName("second");
console.log(second);

// 4. Delete one of the elements with a class of 'second' and refresh the page.
//    Do you get a similar result?

// 5. Get the span element using getElementsByTagname:
const span = document.getElementsByTagName("span");
console.log(span);

// 6. Add a span anywhere, and re-run the last piece of code. What's different?
