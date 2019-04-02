/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding meaning that if you use console.log(this), it is equal to looking at the window of the website and calls all things forward.
* 2. Implicit Binding meaning when you call an object with a method using console.log.
* 3. New Binding meaning we input the data that we will use soon later in the equation using the keyword 'new' 
* 4. Explicit Binding meaning to use .call, .apply and bind. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function doThis (task) {
    console.log(this);
    return task
}
doThis('wash up');
// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding