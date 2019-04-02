/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding meaning that if you use console.log(this), it is equal to looking at the window of the website and calls all things forward.
* 2. Implicit Binding meaning when you call an object with a method using a dot (.) to the left of the function using console.log.
* 3. New Binding meaning we input the data that we will use soon later in the equation using the keyword 'new' 
* 4. Explicit Binding meaning to use .call, .apply and bind. 
*
* write out a code example of each explanation above
*/

// code example for Window Binding
function doThis (task) {
    console.log(this);
    return task
}
doThis('wash up');

// code example for Implicit Binding
const People = {
    greeting: 'What Up!',
    sayHi: function (name){
        console.log(`${this.greeting} this is ${name} creepin in yo ear and messing with your mind with sound`);
        console.log(this);
    }
};
People.sayHi('Professor K');

// code example for New Binding

// code example for Explicit Binding