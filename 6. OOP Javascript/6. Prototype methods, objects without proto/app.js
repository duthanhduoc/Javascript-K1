// create a new object with animal as a prototype
const animal = {
  name: 'thỏ'
}
const  rabbit = {
  age: 13,
  __proto__: animal
}
for(const key in rabbit) {
  console.log(key)
}
console.log(rabbit)
