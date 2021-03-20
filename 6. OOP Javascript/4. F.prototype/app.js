// let animal = {
//   eats: true
// }

// function Rabbit(name) {
//   this.name = name
// }

// Rabbit.prototype = animal

// let rabbit = new Rabbit('White Rabbit') //  rabbit.__proto__ == animal

// console.log(rabbit)

// function Rabbit() {}
// console.log(Rabbit.prototype.constructor === Rabbit)

function Rabbit() {}
// Mặc định:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit() // kế thừa từ {constructor: Rabbit}

console.log(rabbit.constructor === Rabbit) // true (from prototype)
