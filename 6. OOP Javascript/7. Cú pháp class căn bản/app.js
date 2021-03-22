class Person {
  firstName = 'Person'
  constructor(hi) {
    this.hi = hi
  }
  sayHi() {
    alert(`Hello, ${this.firstName}!`)
  }
}
class User extends Person {
  firstName = 'John'
  constructor() {
    super('Hi')
    this.age = 24
    this.name = 'Alan'
  }
  sayHi() {
    alert(`Hello, ${this.firstName}!`)
  }
}
// new User().sayHi() // Hello, John!
const user = new User()

console.log(user)
console.log(user.__proto__)
console.log(User.prototype.__proto__ === Person.prototype)

// class Article {
//   constructor(title, date) {
//     this.title = title
//     this.date = date
//   }

//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date
//   }
// }

// console.log(new Article('HTML', new Date(2019, 1, 1)))
