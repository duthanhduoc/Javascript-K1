class FastHttp {
  static async send(method, url, data) {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify(data) : undefined
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res.json()
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

;(async function () {
  try {
    const res = await FastHttp.get(
      'https://606191f6ac47190017a711f1.mockapi.io/users'
    )
    console.log(res)
  } catch (error) {
    console.error(err)
  }
})()

// // FastHttp.post('https://606191f6ac47190017a711f1.mockapi.io/users', {
// //   name: 'Nguyen van cu'
// // })
// //   .then((res) => {
// //     console.log(res)
// //   })
// //   .catch((err) => {
// //     console.error(err)
// //   })

// // FastHttp.put('https://606191f6ac47190017a711f1.mockapi.io/users/1', {
// //   name: 'Dang Cong Minh'
// // })
// //   .then((res) => {
// //     console.log(res)
// //   })
// //   .catch((err) => {
// //     console.error(err)
// //   })

// // FastHttp.delete('https://606191f6ac47190017a711f1.mockapi.io/users/1')
// //   .then((res) => {
// //     console.log(res)
// //   })
// //   .catch((err) => {
// //     console.error(err)
// //   })
