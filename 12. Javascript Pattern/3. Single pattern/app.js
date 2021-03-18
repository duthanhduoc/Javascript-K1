const User = (function () {
  let instance
  function init() {
    return {
      name: 'Dư Thanh Được',
      printName() {
        console.log(this.name)
      }
    }
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init()
      }
      return instance
    }
  }
})()

// Dù cho gọi getInstance() bao nhiêu lần
// thì cũng chỉ có 1 instance được tạo ra mà thôi
const user1 = User.getInstance()
const user2 = User.getInstance()
console.log(user1 === user2) // true