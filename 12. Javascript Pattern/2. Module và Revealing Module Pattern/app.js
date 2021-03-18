class Subject {
  constructor() {
    this.observers = []
  }
  // Dùng để đăng ký
  subscribe(func) {
    this.observers.push(func)
  }
  // Dùng để hủy đăng ký
  unsubscribe(func) {
    this.observers = this.observers.filter((subscriber) => subscriber !== func)
  }
  // Gửi 1 thông báo đến mọi
  fire(data) {
    this.observers.forEach((observer) => observer(data))
  }
}

const $gun = new Subject()
const func = (value) => {
  console.log(value)
}
$gun.subscribe(func)
$gun.fire('boom')

$gun.unsubscribe(func)
