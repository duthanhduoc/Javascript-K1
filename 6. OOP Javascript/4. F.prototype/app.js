// const animal = {
//   eats: true
// }
// const human = {
//   talks: true
// }

// function Rabbit(name) {
//   this.name = name
// }

// Rabbit.prototype = animal
// const rabbit_1 = new Rabbit('White Rabbit') //  rabbit_1.__proto__ == animal

// Rabbit.prototype = human
// const rabbit_2 = new Rabbit('Black Rabbit') //  rabbit_2.__proto__ == human
// console.log(rabbit_1.eats) // true
// console.log(rabbit_2.eats) // undefined


function Animal() {
  this.age = 24
  this.handle = () => {
    return this.age
  }
}
Animal.prototype.sayHi = function() {
  return 'Hello'
}
const animal = new Animal()
console.log(animal.sayHi())