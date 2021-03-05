// const user = {
//   name: 'Duoc',
//   age: 24,
//   greet() {
//     console.log('Hello, Toi ten la ' + this.name)
//   }
// }
// // user.greet() // Hello, Toi ten la Duoc
// delete user.greet

// console.log(user)

// const person = {
//   name: 'Duoc',
//   ability: ['programing']
// }
// const person1 = { ability: ['dance', 'sing'], age: 24 }
// const person2 = Object.assign(person, person1)
// console.log(person2) // { name: 'Duoc', ability: [ 'dance', 'sing' ] }
// const person = {
//   name: 'Duoc',
//   ability: ['programing']
// }

// const person1 = { ability: ['dance', 'sing'], age: 24 }
// const person2 = { ...person1, ...person }

// console.log(person2)

// const obj = {name: 'duoc', age: 24}
// function handle1(rest) {
//   console.log('handle1:', rest === obj)
// }

// function handle2({...rest}) {
//   console.log('handle2:', rest === obj)
// }
// handle1(obj)
// handle2(obj)

// const person = {
//   name: { firstName: 'Du', lastName: 'Duoc' },
//   age: 24
// }

// Object.keys(person).forEach(item => {
//   console.log(person[item])
// })

// Object.values(person).forEach(item => {
//   console.log(item)
// })

// const object = { a: 1, b: 2, c: 3 }

// for (const key in object) {
//   console.log(object[key])
// }