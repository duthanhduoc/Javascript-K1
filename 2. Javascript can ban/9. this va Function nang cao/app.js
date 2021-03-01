// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function () {
//     console.log(this)
//     return this.firstName + ' ' + this.lastName
//   }
// }
// var handleFullName = person.fullName
// // console.log(person.fullName()) // John Doe
// console.log(handleFullName()) // undefined undefined

// console.log(this)
// function myFunction() {
//   return this
// }
// console.log(myFunction()) // [object Window]
// 'use strict'
// function myfunc() {
//   console.log(this)
// }
// myfunc()

// 'use strict'
// function Car(name) {
//   this.name = name
//   this.printName = function () {
//     console.log(this.name)
//   }
// }
// // Car('bmw') // Lỗi vì không thể truy cập thuộc tính name của undefined
// const bmw = new Car('BMW')
// console.log(bmw)
// bmw.printName() // log ra BMW
// setTimeout(function () {
//   console.log(this)
//   // console.log(this.lastName) // undefined
// }, 1000)
// const delay = {
//   lastName: 'Duoc',
//   print() {
//     setTimeout(() => {
//       console.log(this.lastName) // undefined
//     }, 1000)
//   }
// }
// delay.print()

// function broke(func) {
//   const obj = {
//     name: 'duoc',
//     func: function() {
//       console.log(this)
//     }
//   }
//   return obj.func()
// }

// broke(function () {
//   console.log(this) // obj
// })

// setTimeout(() => {
//   console.log(this)
// }, 1000);

// document.getElementById('btn').addEventListener("click", () => {
//   console.log('Ban da click')
// })

// const arr1 = [1, 2, 3, 4]
// //output: [2,4,6,8]

// const result = arr1.map((item, index) => {
//   return item * 2
// })
// console.log(result)

// const increase = () => {
//   let x = 0;
//   const increaseInner = () => ++x;
//   return increaseInner;
// };
// const myFunc = increase();
// // console.log(increase()()); // 1
// // console.log(increase()()); // 1
// console.log(myFunc()); // 1
// console.log(myFunc()); // 2
// console.log(myFunc()); // 3

// function sum(a) {
//   return function (b) {
//     return a + b
//   }
// }

// function sum(a, b) {
//   return a + b
// }
// console.log(sum(1, 2))
// // console.log(sum(1)(2))

// const findNum1 = () => {
//   const result = []
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 === 1) {
//       result.push(i)
//     }
//   }
//   return result
// }

// const findNum2 = () => {
//   const result = []
//   for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//       result.push(i)
//     }
//   }
//   return result
// }

// const findNum3 = () => {
//   const result = []
//   for (let i = 0; i < 30; i++) {
//     if (i % 3 === 2) {
//       result.push(i)
//     }
//   }
//   return result
// }

// const findNum = (num, callback) => {
//   const result = []
//   for (let i = 0; i < num; i++) {
//     if (callback(i)) {
//       result.push(i)
//     }
//   }
//   return result
// }

// const findNumCurrying = (num) => (callback) => {
//   const result = []
//   for (let i = 0; i < num; i++) {
//     if (callback(i)) {
//       result.push(i)
//     }
//   }
//   return result
// }
// console.log(findNum1())
// console.log(findNum2())
// console.log(findNum3())

// console.log(findNumCurrying(10)((num) => num % 2 === 1))
// console.log(findNumCurrying(20)((num) => num % 2 === 0))
// console.log(findNumCurrying(30)((num) => num % 3 === 2))

// const arr = [1, 2, 3, 4]

// const callback = (item, index, func, x) => {
//   console.log(item, index, func, x)
// }

// const callbackCurrying = x => {
//   return (item, index, func) => {
//     console.log(item, index, func, x)
//   }
// }
// arr.forEach(callbackCurrying(40))

const sum = (a, b) => a + b
const sum = (a) => (b) => a + b
