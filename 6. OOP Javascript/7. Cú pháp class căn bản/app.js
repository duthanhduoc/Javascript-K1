class Button {
  api = 'Alan'
  static add() {
    console.log(this.api)
  }
}

console.log(new Button().add())
