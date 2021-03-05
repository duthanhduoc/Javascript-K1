// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// delete fruits[1]
// console.log(fruits)
// console.log(fruits[1])
// console.log( ['Banana', undefined, 'Apple', 'Mango'])

// const fruits = ['Banana', 'Orange']
// const fruits2 = ['Apple', 'Mango']
// const fruits3 = ['Cherry']

// console.log(fruits.concat(fruits2).concat(fruits3))

// const cars1 = [1, 2, 3]
// const cars2 = [...cars1]
// console.log(cars2 === cars1)

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// for(let i = 0; i < numbers.length; i++) {
//   if(i > 1) {
//     break
//   }
//   console.log(numbers[i])
// }

// numbers.forEach((value, index) => {
//   if (index > 1) {
//     break
//   }
//   console.log(value)
// })

// const output = numbers.map((value) => {
//   value + 2
// })

// console.log(output)

// const output = numbers.filter((value) => {
//   return value > 5
// })

// console.log(output)

// const output = numbers.find(value => {
//   console.log('value la', value)
//   return value % 4 === 0
// })
// console.log(output)

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// const check = numbers.every((value) => {
//   console.log('gia tri', value)
//   return value > 1
// })
// console.log(check)

// const check = numbers.some(value => value > 8)

// console.log(check)

// const check = numbers.every((value) => {
//   return value > 0
// })

// const check2 = numbers.some(value => {
//   return value <= 0
// })

// console.log(check)

// console.log(!)
// const check = 3
// if (check === 1 || check === 2 || check === 3 || check === 4) {
//   console.log('Check')
// }
// if ([1, 2, 3, 4].includes(check)) {
//   console.log('Check')
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// for (const item of numbers) {
//   if(item === 3) {
//     break
//   }
//   console.log(item)
// }