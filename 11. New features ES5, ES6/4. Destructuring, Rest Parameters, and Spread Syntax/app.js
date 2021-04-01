// Destructuring

// const user = {
//   age: 18,
//   name: 'Alan',
//   gender: 'male',
//   local: undefined
// }
// // const age = user.age
// // const name = user.name
// // const gender = user.gender
// const { age, name, gender, local = 'Viet Nam' } = user
// console.log(local)

// const handle = (param) => {
//   const { a, b = 0, c } = param
//   return a + b + c
// }

// const handle = ({ a, b = 2, c }) => {
//   return a + b + c
// }

// console.log(handle({ a: 1, c: 3 }))

const user = {
  name: 'Duoc',
  age: 24,
  ability: ['coding']
}

// const copyUser = user
// const cloneUser = { ...user }
// // console.log(cloneUser === user)

// const info = {
//   address: 'Vietnam'
// }
// const mergedUser = { ...user, ...info }

// console.log(mergedUser)
const userPlus = { ...user, ability: ['sing'], bike: true }
console.log(userPlus)
