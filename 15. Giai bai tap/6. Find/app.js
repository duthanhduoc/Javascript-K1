const people = [
  { name: 'An', age: 18 },
  { name: 'Minh', age: 20 },
  { name: 'Ngoc', age: 17 },
  { name: 'Tu', age: 22 }
]

// let result
// for (let i = 0; i < people.length; i++) {
//   if (people[i].name === 'Ngoc') {
//     result = people[i]
//     break
//   }
//   console.log(people[i])
// }

// const result = people.find((person) => person.name === 'Ngoc')
// console.log(result)

// Filter
// const result = people.filter((person) => person.name === 'Ngoc')
// console.log(result)

// Find index
const result = people.findIndex((person) => person.name === 'Hung')
console.log(result)