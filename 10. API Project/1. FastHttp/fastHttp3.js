// function handle() {
//   return new Promise((resolve, reject) => {
//     const p = Promise.resolve('duoc')
//     console.log(typeof p)
//     resolve(p)
//   })
// }

// async function handle() {
//   return Promise.resolve('Duoc')
// }

// handle().then((res) => {
//   console.log(res)
// })

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
  static async get(url) {
    const res = await this.send('GET', url)
    return res
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

// window.addEventListener('DOMContentLoaded', async () => {
//   try {
//     const res = await FastHttp.get(
//       'https://6061cc41ac47190017a71c4b.mockapi.io/users'
//     )
//     console.log(res)
//   } catch (error) {
//     console.error(error)
//   }
// })

// IIFE
;(async function () {
  try {
    const res = await FastHttp.post(
      'https://6061cc41ac47190017a71c4b.mockapi.io/users',
      {
        name: 'Vo Van Cuong'
      }
    )
    console.log(res)
  } catch (error) {
    console.error(error)
  }
})()

// FastHttp
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
// FastHttp.delete('https://6061cc41ac47190017a71c4b.mockapi.io/users/11')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
