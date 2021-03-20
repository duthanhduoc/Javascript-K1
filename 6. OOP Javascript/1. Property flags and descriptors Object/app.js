// let user = {
//   name: 'John'
// }
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')
// console.log(descriptor)
// 'use strict'
// let user = {
//   name: 'John'
// }

// Object.defineProperty(user, 'name', {
//   writable: false
// })

// user.name = 'Pete' // Error: Cannot assign to read only property 'name'
// console.log(user)

// let user = {}

// Object.defineProperty(user, 'name', {
//   value: 'John',
//   enumerable: true,
//   configurable: true
// })

// console.log(user.name) // John
// user.name = 'Pete' // Error
// console.log(user.name)

// let user = {
//   name: 'John',
//   toString() {
//     return this.name
//   }
// }
// Object.defineProperty(user, 'toString', {
//   enumerable: false
// })
// console.log(user)
// // Mặc định thì cả 2 thuộc tính sẽ được liệt kê trong vòng lặp
// for (let key in user) console.log(key) // name, toString
// console.log(Object.keys(user))

// let user = {
//   name: 'John'
// }

// Object.defineProperty(user, 'name', {
//   configurable: false
// })

// user.name = 'Pete' // Chạy ok
// console.log(user)

// let user = {
//   name: 'John'
// }

// Object.defineProperty(user, 'name', {
//   writable: false,
//   configurable: false
// })

// // Không thể thay đổi user.name và cờ của nó
// // Ngay cả việc xóa user.name
// // user.name = 'Pete'
// // delete user.name
// // Object.defineProperty(user, 'name', { value: 'Pete' })
// console.log(user)
// let user = {
//   name: 'John',
//   age: 30
// }

// console.log(Object.getOwnPropertyDescriptors(user))
// let user = {
//   name: 'John',
//   age: 30
// }

// Object.defineProperty(user, 'age', {
//   enumerable: false
// })

// // let cloneUser = {...user}
// let cloneUser = Object.defineProperties(
//   {},
//   Object.getOwnPropertyDescriptors(user)
// )
// console.log(cloneUser)

let user = {
  name: 'John',
  age: 30
}

// Object.preventExtensions(user)
// user.fullName = 'Mike John'
// console.log(user)
// console.log(Object.isExtensible(user))

Object.seal(user)
// delete user.name
// user.fullName = 'Mike John'
console.log(user)
console.log(Object.isExtensible(user))
