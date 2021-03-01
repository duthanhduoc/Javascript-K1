class Animal {
  name = 'animal'
  constructor() {
    this.age = 24
    this.handle2 = function() {
      return 'handle2'
    }
  }
  handle1 = () => {
    return 'handle1'
  }
}

class Rabbit {
  static name = 'Rabbit'
}

console.log(new Animal())
console.log(new Rabbit())

