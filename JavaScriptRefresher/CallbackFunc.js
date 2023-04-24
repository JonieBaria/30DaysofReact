
//High Order Function: Takes a function as a parameter or 
//returns a function once 



//primitive parameters
function double(n) {
    return n * 2  
}
 console.log(double(2))


function person(n) {
    console.log(`Hello ${n}`)
}

person('Jonyver')



const numbers = [1, 2, 3, 4]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))


const callback = (n) => {
    return n ** 2
  }

console.log(callback(4))

//Below: Cube takes callback as param but not invoke it. Only when the cube is 
//called then the callback function(signature above) is invoked with callback new parameter.

function cube(callback, n) {
    return callback(n) * n
  }

console.log(cube(callback, 3))


const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }

    return doSomething
  }
  
console.log(higherOrder(2)(3)(10))


// IMPORTANT SYNTAX: when you create a function and will later invoke it,
// Use the assigned variable/destructured variable of that function plus
// the value or parameter inside the parenthesis. See below 'y' variable.

const [x, y] = [2, (value) => value ** 2]

console.log(x, y(2))