// console.log(1 + 2)
// console.log(2 + 3)
// console.log(3 + 4)

// function sum(a, b) {
//   console.log(a + b)
// }
// sum(1, 2)
// sum(2, 3)
// sum(3, 4)

// var ex = function() {
//   console.log('hi')
// }

// const ex = function () {
//   console.log('hi')
// }()

// console.log(ex)

// ;(function (a, b, c) {
//   console.log(a, b, c)
// })(1, 2, 3)

// const handle = function () {
//   console.log('hello')
// };(function () {
//   console.log('IIFE')
// })()

// const handleCLick = function () {
//   return 1
// }

// const handleClick = () => 1

// setTimeout(() => {
//   console.log('hio')
// }, 1000);

// Constructor function
// function Car(fullName) {
//   this.fullName = fullName
// }
// // const Car = fullName => {
// //   this.fullName = fullName
// // }
// const bmw = new Car('BMW')
// console.log(bmw)

// function sum(a, b, c, ...d) {
//   console.log(d)
// }

// sum(1, 2, 3, 4, 5, 6)

// function handle(a) {
//   return function (b) {
//     return a + b
//   }
// }

// const handle = a => b => a + b

// function handle(obj) {
//   const {name, age, ...rest} = obj
//   console.log(rest)
// }

// function handle({ name, age, ...rest }) {
//   console.log(rest)
// }

// handle({ name: 'duoc', age: 24, school: 'Hoa vang', class: '12' })

const sum = (...rest) => {
  let result = 0
  for(let i = 0; i < rest.length; i++) {
    result += rest[i]
  }
  return result
}

console.log(sum(1, 2, 3, 4,5,6,7,8))
