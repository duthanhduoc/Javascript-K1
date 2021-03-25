// Prototype
// function Student(name, birthday) {
//   this.name = name
//   this.birthday = birthday
// }

// function UI() {}

// UI.prototype.add = function (student, order = undefined) {
//   const tr = document.createElement('tr')
//   const store = new Store()
//   const listStudent = store.getList()
//   tr.innerHTML = `
//   <td>${order === undefined ? listStudent.length + 1 : order}</td>
//   <td>${student.name}</td>
//   <td>${student.birthday}</td>
//   <td><button class="btn btn-danger">Xóa</button></td>
//   `
//   document.querySelector('table tbody').appendChild(tr)
// }
// UI.prototype.render = function () {
//   const store = new Store()
//   const listStudent = store.getList()
//   listStudent.forEach((student, index) => {
//     this.add(student, index + 1)
//   })
// }
// UI.prototype.clearAll = function () {
//   document.querySelector('table tbody').innerHTML = ''
// }
// UI.prototype.alert = function (type, message) {
//   const alert = document.createElement('div')
//   alert.className = `alert alert-${type}`
//   alert.textContent = message
//   document.querySelector('.notification').appendChild(alert)
//   setTimeout(() => {
//     alert.remove()
//   }, 2000)
// }

// function Store() {}

// Store.prototype.getList = function () {
//   return JSON.parse(localStorage.getItem('student')) || []
// }
// Store.prototype.add = function (student) {
//   const listStudent = this.getList()
//   listStudent.push(student)
//   localStorage.setItem('student', JSON.stringify(listStudent))
// }
// Store.prototype.remove = function (index) {
//   const listStudent = this.getList()
//   listStudent.splice(index, 1)
//   localStorage.setItem('student', JSON.stringify(listStudent))
// }

// Class
class Student {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
  }
}

class UI {
  static add(student, order = undefined) {
    const tr = document.createElement('tr')
    const listStudent = Store.getList()
    tr.innerHTML = `
    <td>${order === undefined ? listStudent.length + 1 : order}</td>
    <td>${student.name}</td>
    <td>${student.birthday}</td>
    <td><button class="btn btn-danger">Xóa</button></td>
    `
    document.querySelector('table tbody').appendChild(tr)
  }
  static render() {
    const listStudent = Store.getList()
    listStudent.forEach((student, index) => {
      this.add(student, index + 1)
    })
  }
  static clearAll() {
    document.querySelector('table tbody').innerHTML = ''
  }
  static alert(type, message) {
    const alert = document.createElement('div')
    alert.className = `alert alert-${type}`
    alert.textContent = message
    document.querySelector('.notification').appendChild(alert)
    setTimeout(() => {
      alert.remove()
    }, 2000)
  }
}

class Store {
  static getList() {
    return JSON.parse(localStorage.getItem('student')) || []
  }
  static add(student) {
    const listStudent = this.getList()
    listStudent.push(student)
    localStorage.setItem('student', JSON.stringify(listStudent))
  }
  static remove(index) {
    const listStudent = this.getList()
    listStudent.splice(index, 1)
    localStorage.setItem('student', JSON.stringify(listStudent))
  }
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.getElementById('name').value
  const birthday = document.getElementById('birthday').value
  const student = new Student(name, birthday)
  UI.add(student)
  Store.add(student)
  UI.alert('success', `Bạn vừa thêm thành công ${name}`)
})

UI.render()

document.querySelector('table tbody').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-danger')) {
    const tr = event.target.parentElement.parentElement
    const name = tr.children[1].textContent
    const index = Number(tr.children[0].textContent) - 1
    const isCheck = confirm(`Bạn có muốn xóa ${name}?`)
    if (isCheck) {
      Store.remove(index)
      UI.clearAll()
      UI.render()
      UI.alert('danger', `Bạn vừa xóa thành công ${name}`)
    }
  }
})
