// let map = new Map()
// map.set(1, 'str1') // string key
// map.set(1, 'num1') // numeric key
// map.set(true, 'bool1') // boolean key
// // let a = {}
// // let b = { age: 18 }
// // map[a] = 18
// console.log(map)

// const obj = {}
// obj['1'] = 'str1'
// obj[1] = 'num1'
// obj[true] = 'bool1'
// console.log(obj)

// let recipeMap = new Map([
//   ['cucumber', 500],
//   ['tomatoes', 350],
//   ['onion', 50]
// ])
// for (const key of recipeMap.keys()) {
//   console.log(key)
// }
// for (const key of recipeMap.values()) {
//   console.log(key)
// }
// for (const key of recipeMap.entries()) {
//   console.log(key)
// }
// for (const key of recipeMap) {
//   console.log(key)
// }
// console.log(recipeMap)
// console.log()

// const obj = {
//   age: 18,
//   name: 'Duoc',
//   location: 'Viet Nam'
// }

// const map = new Map(Object.entries(obj))
// console.log(map)

// const map = new Map()
//   .set('age', 18)
//   .set('name', 'Duoc')
//   .set('location', 'Viet Nam')
// console.log(typeof map)
// const obj = Object.fromEntries(map)

// console.log(obj)

// const obj = {}
// obj.name = 'Duoc'
// obj[1] = 100
// console.log(obj)
// console.log(Object.keys(obj))

// const map = new Map().set('name', 'Duoc').set(1, 100)
// console.log(map)

// let set = new Set()
// let john = { name: 'John' }
// let pete = { name: 'Pete' }
// let mary = { name: 'Mary' }
// // Một số user đến thăm nhiều lần
// set.add(john)
// set.add(pete)
// set.add(mary)
// set.add(john)
// set.add(mary)

// console.log(set)
const arr = [1, 2, 3, 1, 3]
const set = new Set(arr)
console.log(Array.from(set))
console.log([...set])
