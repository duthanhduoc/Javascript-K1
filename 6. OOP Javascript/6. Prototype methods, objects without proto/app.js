let animal = {
  eats: true
}

// Tạo một object mới với animal như một prototype
let rabbit = Object.create(animal)
console.log(rabbit.eats) // true

console.log(Object.getPrototypeOf(rabbit)) // true

Object.setPrototypeOf(rabbit, {}) // thay đổi prototype của rabbit thành {}
console.log('rabbit', rabbit)
