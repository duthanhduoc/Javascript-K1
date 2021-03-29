class App {
  constructor() {
    this.api = new Api()
    this.ui = new Ui()
  }

  async render(username) {
    try {
      const { profile, repos } = await this.api.getUser(username)
      this.ui.render(profile, repos)
      this.ui.alert('success', `Tìm thấy ${username}`)
    } catch (error) {
      this.ui.alert('danger', error.message)
    }
  }
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const username = document.querySelector('form input').value
  new App().render(username)
})
