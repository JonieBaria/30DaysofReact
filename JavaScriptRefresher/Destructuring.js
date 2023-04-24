const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  
  for (const [country, city] of countries) {
    console.log(country, city)
  }

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB', 'Postgres'],
]

for (const [first, second, third, fourth] of fullStack) {
    console.log(first, second, third, fourth)
}


// IMPORTANT SYNTAX: when you create a function and will later invoke it,
// Use the assigned variable/destructured variable of that function plus
// the value or parameter inside the parenthesis. See below 'y' variable.

const [x, y] = [2, (value) => value ** 2]

console.log(`Values are: x = ${x}, y = ${y(2)}`)


//Destructuring Object Literals
const rectangle = {
    width: 20,
    height: 10,
  }
  
  let { width, height } = rectangle
  console.log(width, height)

//Renaming Variable

const rectangles = {
    width: 20,
    height: 10,
  }
  
  let { width: w, height: h } = rectangles

// Let's also destructure, nested objects. In the example below, we have nested objects and we can destructure it in two ways.

// We can just destructure step by step

const props = {
  user:{
    firstName:'Asabeneh',
    lastName:'Yetayeh',
    age:250
  },
  post:{
    title:'Destructuring and Spread',
    subtitle:'ES6',
    year:2020
},
skills:['JS', 'React', 'Redux', 'Node', 'Python']

}

const {user, post, skills} = props
const {firstName, lastName, age} = user
const {title, subtitle, year} = post
const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills

// Destructuring during loop through an array

const languages = [
  { lang: 'English', count: 91 },
  { lang: 'French', count: 45 },
  { lang: 'Arabic', count: 25 },
  { lang: 'Spanish', count: 24 },
  { lang: 'Russian', count: 9 },
  { lang: 'Portuguese', count: 9 },
  { lang: 'Dutch', count: 8 },
  { lang: 'German', count: 7 },
  { lang: 'Chinese', count: 5 },
  { lang: 'Swahili', count: 4 },
  { lang: 'Serbian', count: 4 },
]

for (const { lang, count } of languages) {
  console.log(`The ${lang} is spoken in ${count} countries.`)
}


// Destructuring function parameter

const rectangled = { widths: 20, heights: 10 };

let {widths, heights} = rectangled;
console.log(widths, height);

const calcualteArea = ( widths, heights ) => widths * heights


console.log(calcualteArea(widths, heights));
// console.log(widths, heights);


const calculatePerimeter = ({ widths, heights } = 2 * (widths + heights))

console.log(calculatePerimeter);

//Modifying or changing the object while copying

const userd = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
}

const copiedUser = { ...user, title: 'instructor' }
console.log(copiedUser)

const { a: aa = 10, b: bb = 5 } = { a: 3 }; //aa=10 is only showed if there is no value for a eg. a:3

console.log(aa); // 3
console.log(bb); // 5




//Spread operator with arrow function
//Args
//Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed 
//when we invoke a function will change to an array.

const sumAllNumss = (...args) => {
    console.log(args)
  }
  
  sumAllNums(1, 2, 3, 4, 5)  //[1, 2, 3, 4, 5]

  const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args) {
      sum += num
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4, 5)) //15


