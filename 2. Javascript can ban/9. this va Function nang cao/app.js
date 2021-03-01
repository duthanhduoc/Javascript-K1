// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function () {
//     console.log(this)
//   return this.firstName + ' ' + this.lastName
//   }
//  }
//  var handleFullName = person.fullName
// //  console.log(person.fullName()) // John Doe
//  console.log(handleFullName()) // undefined undefined

// console.log(this)
// 'use strict'
// function myfunc() {
//   console.log(this)
// }

// myfunc()
// 'use strict'
// const delay = {
//   lastName: 'Duoc',
//   print() {
//     setTimeout(() => {
//       console.log(this)
//       console.log(this.lastName) // undefined
//     }, 1000)
//   }
// }
// delay.print()

// function broke(func) {
//   const obj = {
//     name: 'duoc',
//     func
//   }
//   return obj.func()
// }
// broke(() => {
//   console.log(this) // obj
// })

const tinhTong = (a) => {
  return (b) => {
    return a + b
  }
}

const tinhTong = (a) => (b) => a + b

function tinhTong(a) {
  return function (b) {
    return a + b
  }
}
