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

const subject = new Subject()
const handle = (response) => {
  console.log('1', response)
}
const handle2 = (response) => {
  console.log('2', response)
}
subject.subscribe(handle)
subject.subscribe(handle2)
subject.fire('Hello')
subject.unsubscribe(handle)
subject.fire('Video moi')
