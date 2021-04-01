// let id1 = Symbol('id')
// let id2 = Symbol('id')
// console.log(id1)
// console.log(id2)
// console.log(id1 == id2) // false

// const obj = { age: 18 }
// const arr = [1, 2, 3]
// const sym = Symbol('Hi')
// alert(sym.description)
// const initState = () => ({
//   [Symbol('id')]: 1
// })
// const state = initState()
// const syms = Object.getOwnPropertySymbols(state)
// state[syms[0]] = 2
// console.log(state)
// let id = Symbol('id')
// let user = {
//   name: 'John',
//   age: 30,
//   [id]: 123
// }
// for (const key in user) {
//   console.log(key)
// }
// console.log(Object.assign({}, user))
let id = Symbol.for('id') // nếu symbol chưa tồn tại, nó sẽ được tạo
// đọc lại lần nữa, có thể từ một nơi nào đó trong code
let idAgain = Symbol.for('id')
console.log(Symbol.keyFor(idAgain))
