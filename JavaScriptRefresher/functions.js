//Higher order function that creates a function
//function factory

function multiplier(factor) {
    return function(n){ 
        return factor * n
    }
}
// whereas the original function *multiplier
// is converted into a new undefined function
// but the new function was coupled with the para-
// meter of the original function to create a new task.
// **Take note: that the new function requires also a parameter (n).

//Original function *multiplier will be returned as a new function. See below implementation.

// We assign the original function *multiplier with its parameter
// to a variable, *doubler.

// When executing this new doubler function it will also require the (n)
// parameter for the dynamically created anonymous function inside
// *multiplier function

let doubler = multiplier(2);
let tripler = multiplier(3);

doubler(2); //4
tripler(10); //30


function func() {
	return function() {
		return function() {
			return '!';
		};
	};
}

console.log( func()()() ); // shows '!'