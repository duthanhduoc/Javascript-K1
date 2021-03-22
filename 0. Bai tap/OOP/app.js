// function Car(name, gas) {
//   this.name = name
//   this.gas = gas
// }
// Car.prototype.run = function () {
//   setTimeout(() => {
//     this.gas = this.gas / 2
//     if (typeof this.onFinish === 'function') this.onFinish(this, this.gas)
//   }, 1000)
// }

class Car {
  constructor(name, gas) {
    this.name = name
    this.gas = gas
  }
  run() {
    setTimeout(() => {
      this.gas = this.gas / 2
      if (typeof this.onFinish === 'function') this.onFinish(this, this.gas)
    }, 1000)
  }
}

const BMW = new Car('BMW', 100)
BMW.run()
BMW.onFinish = function (a, b) {
  console.log(b)
}
