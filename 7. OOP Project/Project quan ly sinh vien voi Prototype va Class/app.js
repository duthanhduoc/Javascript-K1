// function Student(name, birthday) {
//   this.name = name
//   this.birthday = birthday
// }
// function UI() {}
// UI.prototype.addStudent = function (student) {
//   const trNode = document.createElement('tr')
//   trNode.innerHTML = `
//   <td>${student.name}</td>
//   <td>${student.birthday}</td>
//   <td>
//     <button class="btn btn-danger btn-sm">Xóa</button>
//   </td>
//   `
//   document.querySelector('table tbody').appendChild(trNode)
// }
// UI.prototype.clearFields = function () {
//   document.getElementById('name').value = ''
//   document.getElementById('birthday').value = ''
// }
// UI.prototype.removeStudent = function (target) {
//   const trNode = target.parentElement.parentElement
//   trNode.remove()
// }
// UI.prototype.alert = function (message, className) {
//   const alertNode = document.createElement('div')
//   alertNode.classList.add('alert', 'text-center', className)
//   alertNode.textContent = message
//   document.querySelector('form').appendChild(alertNode)
//   setTimeout(() => {
//     alertNode.remove()
//   }, 2000)
// }
class Student {
  constructor(name, birthday, id) {
    this.name = name
    this.birthday = birthday
    this.id = id
  }
}
class UI {
  addStudent(student) {
    const trNode = document.createElement('tr')
    trNode.innerHTML = `
      <td>${student.name}</td>
      <td>${student.birthday}</td>
      <td>${student.id}</td>
      <td>
        <button class="btn btn-danger btn-sm">Xóa</button>
      </td>
      `
    document.querySelector('table tbody').appendChild(trNode)
  }
  clearFields() {
    document.getElementById('name').value = ''
    document.getElementById('birthday').value = ''
    document.getElementById('id').value = ''
  }
  removeStudent(target) {
    const trNode = target.parentElement.parentElement
    trNode.remove()
  }
  alert(message, className) {
    const alertNode = document.createElement('div')
    alertNode.classList.add('alert', 'text-center', className)
    alertNode.textContent = message
    document.querySelector('form').appendChild(alertNode)
    setTimeout(() => {
      alertNode.remove()
    }, 2000)
  }
}

class Store {
  static getStudents() {
    let students = []
    if (localStorage.getItem('students') !== null) {
      students = JSON.parse(localStorage.getItem('students'))
    }
    return students
  }
  static displayStudents() {
    const ui = new UI()
    Store.getStudents().forEach((student) => {
      ui.addStudent(student)
    })
  }
  static addStudent(student) {
    const students = Store.getStudents()
    students.push(student)
    localStorage.setItem('students', JSON.stringify(students))
  }
  static removeStudent(id) {
    const students = Store.getStudents()
    const index = students.findIndex((item) => item.id === id)
    students.splice(index, 1)
    localStorage.setItem('students', JSON.stringify(students))
  }
}

window.addEventListener('DOMContentLoaded', Store.displayStudents)

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.getElementById('name').value
  const birthday = document.getElementById('birthday').value
  const id = document.getElementById('id').value
  const ui = new UI()
  if (name === '' || birthday === '' || id === '') {
    ui.alert('Hãy điền đầy đủ các trường', 'alert-warning')
  } else {
    const student = new Student(name, birthday, id)
    ui.addStudent(student)
    Store.addStudent(student)
    ui.clearFields()
    ui.alert('Thêm thành công', 'alert-success')
  }
})

document.querySelector('table').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-danger')) {
    const ui = new UI()
    ui.removeStudent(event.target)
    Store.removeStudent(
      event.target.parentElement.previousElementSibling.textContent
    )
    ui.alert('Xóa thành công', 'alert-success')
  }
})
