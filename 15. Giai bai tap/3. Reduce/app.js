// const input = [1, 2, 3, 4, 5]
// let result = 0
// input.forEach(item => {
//   result += item
// })
// console.log(result)

// const output = input.reduce((result, currentItem) => {
//   return result + currentItem
// }, 0)
// console.log(output)


// 2

// const input = [
//   { id: 10, color: 'red' },
//   { id: 20, color: 'blue' },
//   { id: 30, color: 'green' }
// ]

// const result = {}
// input.forEach(item => {
//   result[item.id] = item.color
// })

// console.log(result)

// const output = input.reduce((result, current) => {
//   result[current.id] = current.color
//   return result
// }, {})

// console.log(output)

// 3.
// const input = {
//   An: 100,
//   My: 200,
//   Nga: 300,
//   Huy: 150
// }
// const output = Object.values(input).reduce((result, current) => {
//   return result + current
// })

// console.log(output)

// 4
const input = [
  { name: 'A', age: 1 },
  { name: 'B', age: 2 },
  { name: 'C', age: 3 }
]
const output = input.reduce((result, current) => {
  result.name = [...result.name, current.name]
  result.age = [...result.age, current.age]
  return result
}, {name: [], age: []})
console.log(output)