// function Item() {
//   this.name = 'Dư Thanh Được'
//   this.printName = function() {
//     console.log(this.name)
//   }
// }

// const item = new Item()
// console.log(item)

function init() {
  return {
    name: 'Dư Thanh Được',
    printName() {
      console.log(this.name)
    }
  }
}

const test = init()
console.log(test)