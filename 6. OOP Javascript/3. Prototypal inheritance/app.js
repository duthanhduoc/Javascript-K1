const animal = {
  eats: true
}
const rabbit = {
  jumps: true
}
rabbit.__proto__ = animal
console.log(rabbit)