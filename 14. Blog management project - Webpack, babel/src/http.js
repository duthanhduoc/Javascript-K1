class Http {
  constructor() {
    this.API = 'https://6024a0f336244d001797adb8.mockapi.io/post'
    this.headers = {
      'Content-Type': 'application/json'
    }
  }
  addPost(body) {
    return fetch(this.API, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then((res) => res.json())
  }
  getPosts() {
    return fetch(this.API, {
      method: 'GET',
      headers: this.headers
    }).then((res) => res.json())
  }
  getPost(id) {
    return fetch(this.API + '/' + id, {
      method: 'GET',
      headers: this.headers
    }).then((res) => res.json())
  }
  updatePost(id, body) {
    return fetch(this.API + '/' + id, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then((res) => res.json())
  }
  removePost(id) {
    return fetch(this.API + '/' + id, {
      method: 'DELETE',
      headers: this.headers
    }).then((res) => res.json())
  }
}

const HttpClient = new Http()

export default HttpClient
