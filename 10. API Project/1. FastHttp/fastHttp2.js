class FastHttp {
  static send(method, url, data) {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify(data) : undefined
    }).then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
  }
  static get(url) {
    return this.send('GET', url)
  }
  static post(url, data) {
    return this.send('POST', url, data)
  }
  static put(url, data) {
    return this.send('PUT', url, data)
  }
  static delete(url) {
    return this.send('DELETE', url)
  }
}

// const http = new FastHttp()
// http
//   .get('https://6061cc41ac47190017a71c4b.mockapi.io/users')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// http
//   .post('https://6061cc41ac47190017a71c4b.mockapi.io/users', {
//     name: 'Vo Van Cuong'
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// http
//   .put('https://6061cc41ac47190017a71c4b.mockapi.io/users/10', {
//     name: 'Tran Van Canh',
//     address: 'Vietnam'
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
FastHttp.delete('https://6061cc41ac47190017a71c4b.mockapi.io/users/11')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })
