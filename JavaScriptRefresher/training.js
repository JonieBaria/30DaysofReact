let sum = 0
for (let i = 0; i < 101; i++) {
  sum += i
}

console.log(sum)


let total = 0
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    total += i
  }
}
console.log(total)

const nums = [6, 22, 23, 24, 25]
for (let i = 0; i < 6; i++) {
  console.log(nums[i])
}

const nums1 = [1, 2, 3, 4, 5]
const lastIndex = nums.length - 1
const newArray = []
for (let i = lastIndex; i >= 0; i--) {
  newArray.push(nums1[i])
}

console.log(newArray)


let count = 0
do {
  console.log(count)
  count++
} while (count < 11)

const numbers4 = [1, 2, 3, 4, 5]
numbers4.forEach((number, i) => {
  console.log(i, number)
})


const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries.forEach((country, yow, arr) => {
  console.log(yow, country.toUpperCase())
  console.log(arr)
})