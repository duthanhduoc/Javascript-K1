// let person = { name: 'Duoc', age: 24 }
// function say(text1, text2) {
//   console.log(text1 + ' ' + text2 + ' ' + this.name + ' ' + this.age)
// }
say.call(person, 'hi', 'morning')
say.apply(person, ['hi', 'morning'])
say.bind(person)('hi', 'morning')

// const delay = {
//   lastName: 'Duoc',
//   print() {
//     setTimeout((function () {
//       console.log(this.lastName) // undefined
//     }).bind(this), 1000)
//   }
// }
// delay.print()

const obj = ''

console.log(obj.__proto__)