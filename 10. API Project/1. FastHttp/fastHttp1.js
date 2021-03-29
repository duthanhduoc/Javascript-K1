function FastHttp() {
  this.xhr = new XMLHttpRequest()
}
FastHttp.prototype.send = function (method, url, data, callback) {
  this.xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200 || this.status === 201) {
        callback(null, JSON.parse(this.responseText))
      } else {
        callback(this.responseText)
      }
    }
  }
  this.xhr.open(method, url, true)
  this.xhr.setRequestHeader('Content-Type', 'application/json')
  this.xhr.send(data ? JSON.stringify(data) : null)
}
FastHttp.prototype.get = function (url, callback) {
  this.send('GET', url, null, callback)
}
FastHttp.prototype.post = function (url, data, callback) {
  this.send('POST', url, data, callback)
}
FastHttp.prototype.put = function (url, data, callback) {
  this.send('PUT', url, data, callback)
}
FastHttp.prototype.delete = function (url, callback) {
  this.send('DELETE', url, null, callback)
}
const http = new FastHttp()
// http.get('https://6061cc41ac47190017a71c4b.mockapi.io/users', (error, data) => {
//   if (error) {
//     return console.error(error)
//   }
//   console.log(data)
// })
// http.post(
//   'https://6061cc41ac47190017a71c4b.mockapi.io/users',
//   {
//     name: 'Du Thanh Duoc'
//   },
//   (error, data) => {
//     if (error) {
//       return console.error(error)
//     }
//     console.log(data)
//   }
// )
// http.put(
//   'https://6061cc41ac47190017a71c4b.mockapi.io/users/1',
//   {
//     name: 'Dang Cong Minh'
//   },
//   (error, data) => {
//     if (error) {
//       return console.error(error)
//     }
//     console.log(data)
//   }
// )

http.delete(
  'https://6061cc41ac47190017a71c4b.mockapi.io/users/23',
  (error, data) => {
    if (error) {
      return console.error(error)
    }
    console.log(data)
  }
)
