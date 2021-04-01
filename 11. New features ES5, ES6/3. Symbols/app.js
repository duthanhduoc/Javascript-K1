// let globalSymbol = Symbol.for('name')
// let localSymbol = Symbol('name')

// alert(Symbol.keyFor(globalSymbol)) // name, global symbol
// alert(Symbol.keyFor(localSymbol)) // undefined, not global

// alert(localSymbol.description) // name

// let id = Symbol()
// id = Symbol('test')
// console.log(id)

// const initState = () => {
//   const result = {}
//   const id = Symbol('id')
//   result[id] = 1
//   return result
// }
// const state = initState()
// const key = Object.getOwnPropertySymbols(state)[0]

// console.log(state[key])

let id = Symbol('id')
let user = {
  name: 'John',
  age: 30,
  [id]: 123
}

console.log(Object.keys(user))
