// const arr = [5, 3, 1, 2, 4]
// arr.sort((a, b) => a - b)
// console.log(arr)
// class Article {
//   constructor(title, date) {
//     this.title = title
//     this.date = date
//   }

//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date
//   }
// }
// const article1 = new Article('HTML', new Date(2019, 1, 1))
// console.log(article1)

// class UI {
//   static show() {}
//   static print() {}
// }

// const UI = {
//   show() {},
//   print() {}
// }

// UI.show()
// UI.print()
// class Animal {
//   static planet = 'Earth'

//   constructor(name, speed) {
//     this.speed = speed
//     this.name = name
//   }

//   run(speed = 0) {
//     this.speed += speed
//     alert(`${this.name} runs with speed ${this.speed}.`)
//   }

//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed
//   }
// }

// // Inherit from Animal
// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`)
//   }
// }

// console.log(Rabbit.prototype)

class Animal {}
Animal.show = function () {
  alert('hello')
}
// function Animal() {}
// Animal.show = function () {
//   alert('hello')
// }
Animal.show()
// console.log(Animal.prototype)
