const asyncFunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello')
    }, 1000)
  })
}

function asyncFunc1() {
  // return new Promise(function (resolve, reject) {
  //   asyncFunc2()
  //     .then(function (data) {
  //       console.log(data)
  //       resolve(data)
  //     })
  //     .catch(reject)
  // })
  return asyncFunc2().then((res) => {
    console.log(res)
    return res
  })
}

asyncFunc1().then((res) => {
  console.log('data: ', res)
})
