let user = {
  name: 'John',
  toString() {
    return this.name
  }
}
Object.preventExtensions(user) 
user.age = 24
console.log(user)
console.log(Object.getOwnPropertyDescriptor(user, 'name'))