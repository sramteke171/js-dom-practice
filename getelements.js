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
const first = document.getElementById("first");
console.log("this is first", first);

// 2. Now delete that first element (in the html file), and re-run your code.
//    What changed?
// it now grabbed another element with an id of first at the bottom of the page
// getElementById will only return the first element it finds...it ignores all others

// 3. Get the elements with a class of 'second' with getElementsByClassName:
const second = document.getElementsByClassName("second");
console.log("this is second", second);
// there are mulitple h1's which is also a no-no...

// 4. Delete one of the elements with a class of 'second' and refresh the page.
//    Do you get a similar result?
// only 2 elements were returned

// 5. Get the span element using getElementsByTagname:
const span = document.getElementsByTagName("span");
console.log("this is span", span);

// 6. Add a span anywhere, and re-run the last piece of code. What's different?
//  another span is returned
