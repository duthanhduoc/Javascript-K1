// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     if (this.status === 200 || this.status === 201) {
//       console.log(JSON.parse(this.responseText))
//     } else {
//       console.error(this.responseText)
//     }
//   }
// }
// xhr.open('GET', 'https://606191f6ac47190017a711f1.mockapi.io/users', true)
// xhr.send()

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
  this.xhr.send(data === null ? null : JSON.stringify(data))
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
// http.get(
//   'https://606191f6ac47190017a711f1.mockapi.io/users',
//   (error, response) => {
//     if (error) {
//       return console.error(error)
//     }
//     console.log(response)
//   }
// )
// const user = {
//   name: 'Du Thanh Duoc',
//   address: 'Da Nang'
// }
// http.post(
//   'https://606191f6ac47190017a711f1.mockapi.io/users',
//   user,
//   (error, response) => {
//     if (error) {
//       return console.error(error)
//     }
//     console.log(response)
//   }
// )
// http.put(
//   'https://606191f6ac47190017a711f1.mockapi.io/users/24',
//   {
//     name: 'Nguyễn Mạnh Cường'
//   },
//   (error, response) => {
//     if (error) {
//       return console.error(error)
//     }
//     console.log(response)
//   }
// )
http.delete(
  'https://606191f6ac47190017a711f1.mockapi.io/users/23',
  (error, response) => {
    if (error) {
      return console.error(error)
    }
    console.log(response)
  }
)
