class App {
  static init() {
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault()
      const username = document.getElementById('username').value
      API.getUser(username)
        .then((value) => {
          UI.alert('Đã tìm thấy người dùng', 'alert-success')
          UI.showInfo(value.profile, value.repo)
        })
        .catch((e) => {
          UI.alert(e.message, 'alert-danger')
        })
    })
  }
}
document.addEventListener('DOMContentLoaded', App.init)
