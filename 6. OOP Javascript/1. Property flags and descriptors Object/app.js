let user = {
  name: 'Duoc',
}
Object.seal(user)
user.age = 14
console.log(user)
console.log(Object.getOwnPropertyDescriptor(user, 'name'))