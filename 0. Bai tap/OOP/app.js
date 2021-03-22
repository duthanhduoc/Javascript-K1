// function Car(nameCar, gasCar) {
//   this.gas = gasCar
//   this.name = nameCar
// }
// Car.prototype.run = function () {
//   this.gas = this.gas / 2
//   setTimeout(() => {
//     if (typeof this.onFinish === 'function') {
//       this.onFinish(this, this.gas)
//     }
//   }, 1000)
// }

class Car {
  constructor(nameCar, gasCar) {
    this.name = nameCar
    this.gas = gasCar
  }
  run() {
    this.gas = this.gas / 2
    setTimeout(() => {
      if (typeof this.onFinish === 'function') {
        this.onFinish(this, this.gas)
      }
    }, 1000)
  }
}

const BMW = new Car('BMW', 100)
BMW.onFinish = function () {
  console.log(this.gas)
}
BMW.run()
