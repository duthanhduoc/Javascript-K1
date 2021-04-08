class Http {
  constructor() {
    this.api = 'https://6061cc41ac47190017a71c4b.mockapi.io/posts/'
    this.headers = {
      'Content-Type': 'application/json'
    }
  }

  getPosts() {
    return fetch(this.api, {
      method: 'GET',
      headers: this.headers
    }).then((res) => res.json())
  }

  getPost(id) {
    return fetch(this.api + id, {
      method: 'GET',
      headers: this.headers
    }).then((res) => res.json())
  }

  createPost(body) {
    return fetch(this.api, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then((res) => res.json())
  }

  updatePost(id, body) {
    return fetch(this.api + id, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then((res) => res.json())
  }

  deletePost(id) {
    return fetch(this.api + id, {
      method: 'DELETE',
      headers: this.headers
    }).then((res) => res.json())
  }
}

export default new Http()
