// function Person(firstName, age) {
//   this.firstName = firstName
//   this.age = age
// }

// Person.prototype.show = function () {
//   alert(`Xin chào ${this.firstName}, bạn ${this.age} tuổi`)
// }

// class Person {
//   constructor(firstName, age) {
//     this.firstName = firstName
//     this.age = age
//   }
//   show() {
//     alert(`Xin chào ${this.firstName}, bạn ${this.age} tuổi`)
//   }
// }

// const duoc = new Person('Du', 25)
// for (const key in duoc) {
//   console.log(key)
// }
// console.log(duoc)
// duoc.show()

// class User {
//   constructor(name) {
//     this.name = name
//   }

//   sayHi() {
//     alert(this.name)
//   }
// }

// // Usage:
// let user = new User('John')
// user.sayHi()

// console.log(user)

// class User {
//   constructor(name) {
//     this.name = name
//   }
//   sayHi() {
//     alert(this.name)
//   }
// }

// function User() {}

// console.log(User)

// Function Expression
// let User = function(age) {
//   this.age = age
// }
// let User = class MyClass {
//   sayHi() {
//     alert(MyClass) // MyClass name is visible only inside the class
//   }
// }

// new User().sayHi()

// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name
//   }

//   get name() {
//     return this._name
//   }

//   set name(value) {
//     if (value.length < 4) {
//       alert('Name is too short.')
//       return
//     }
//     this._name = value
//   }
// }

// let user = new User('John')
// // alert(user.name) // John
// console.log(user)

// class User {
//   firstName = 'John'
//   constructor() {
//     this.age = 24
//     this.name = 'Alan'
//   }
//   sayHi() {
//     alert(`Hello, ${this.firstName}!`)
//   }
// }

// // const user = new User()
// // console.log(user)
// console.log(User.firstName)
class Button {
  constructor(value) {
    this.value = value
  }

  click = () => {
    alert(this.value)
  }
}

let button = new Button('hello')
// console.log(button)
setTimeout(() => button.click(), 1000) // undefined

// document.body.addEventListener('click', Button.click)
