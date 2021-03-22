// class Animal {
//   constructor(name) {
//     this.speed = 0
//     this.name = name
//   }
//   run(speed) {
//     this.speed = speed
//     alert(`${this.name} runs with speed ${this.speed}.`)
//   }
//   stop() {
//     this.speed = 0
//     alert(`${this.name} stands still.`)
//   }
// }
// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`)
//   }
//   stop() {
//     super.stop() // call parent stop
//     this.hide() // and then hide
//   }
// }

// let rabbit = new Rabbit('White Rabbit')

// rabbit.run(5)
// rabbit.stop()
// class Animal {
//   constructor(name) {
//     this.speed = 0
//     this.name = name
//   }
//   // ...
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     this.speed = 0
//     this.name = name
//     this.earLength = earLength
//   }

//   // ...
// }

// // Doesn't work!
// let rabbit = new Rabbit('White Rabbit', 10) // Error: this is not defined.
// class Animal {
//   name = 'animal'

//   constructor() {
//     alert(this.name) // (*)
//   }
// }

// class Rabbit extends Animal {
//   name = 'rabbit'
// }

// new Animal() // animal
// new Rabbit()
// class Animal {
//   showName() {
//     // instead of this.name = 'animal'
//     alert('animal')
//   }

//   constructor() {
//     this.showName() // instead of alert(this.name);
//   }
// }

// class Rabbit extends Animal {
//   showName() {
//     alert('rabbit')
//   }
// }

// new Animal() // animal
// new Rabbit() // rabbit
