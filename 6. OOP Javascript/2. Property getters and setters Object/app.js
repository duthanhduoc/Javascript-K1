let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`
  }
}

user.name = 'Duoc'

console.log(user.fullName)