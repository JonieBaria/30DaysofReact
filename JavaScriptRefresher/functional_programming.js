//Functional programming allows you to write shorter code, clean code, and also to solve complicated problems which might be difficult to solve in a traditional way.


// function callback(item, index, arr) {}
// array.forEach(callback)

// or syntax in an arrow function
// const callbacks = (item, i, arr) => {}
// array.forEach(callbacks)



//FOREACH

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway'];
countries.forEach(function (country, index, arr) {
  console.log(index, country.toUpperCase())
})


const county = ['Finland', 'Estonia', 'Sweden', 'Norway'];
county.forEach((count, index) => console.log(index, count.toUpperCase())
);


const countriess = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = []

countriess.forEach((country) => newCountries.push(country));
console.log(newCountries);


//MAP : whenever we like to modify an array. We use the map 
//method only with arrays and it always returns an array.


//Now, let us modify the countries array using the map method. The index is an optional parameter

// Using function declaration

const countries1 = ['Finland', 'Estonia', 'Sweden', 'Norway']

const newCountries1 = countries1.map(function (country) {
  return country.toUpperCase()
})

console.log(newCountries1)



//FILTER:  it filters out items based on some criteria.
const countries2 = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = countries2.filter((country) =>
  country.includes('land')
)
console.log(countriesWithLand) // ["Finland", "Iceland"]


const countries3 = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand1 = countries3.filter(
  (country) => !country.includes('land')
)
console.log(countriesWithLand1) // ["Estonia", "Sweden", "Norway"]

//REDUCE; used with an array and it returns a single value. You can associate reduce with a blender. You put different fruits to a blend and you get a mix of fruit juice. The juice is the output from the reduction process.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum) // 55

//Let us concatenate strings using reduce

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld) // "Hello world !


//Let us find the first country which has only six characters

const countries4 = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const sixCharsCountry = countries4.find((country) => country.length === 6)
console.log(sixCharsCountry) // Sweden

//Let us find the first country in the array which has the letter 'o'

const countries5 = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries5.find((country) => country.includes('o'))
console.log(index) // Estonia

//SOME

//EVERY