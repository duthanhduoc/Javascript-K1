class CoffeeMachine {
  // ...
  #coffee = 100;
  constructor() {
    this['#age'] = 24
  }
}

let coffeeMachine = new CoffeeMachine();
console.log(coffeeMachine["#age"])
