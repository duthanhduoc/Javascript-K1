// const person = {
//   name: 'Duoc',
//   ability: ['programing']
// }

// const obj = { ability: ['dance', 'sing'], age: 24 }
// const person2 = Object.assign(person, obj)
// console.log(person2) // { name: 'Duoc', ability: [ 'dance', 'sing' ] }

// const person = {
//   name: 'Duoc',
//   ability: ['programing']
// }

// const person2 = { name: person.name, ability: person.ability }
// // const person2 = {...person}
// console.log(person2.ability === person.ability)

const object = { a: 1, b: 2, c: 3 }
// for (const key in object) {
//   console.log(object[key])
// }

Object.values(object).forEach(item => {
  console.log(item)
})

Object.keys(object).forEach(item => {
  console.log(item)
})