// const value = null

// value.name = 'Duoc'
// console.log(value)

// try {
//   console.log('Bắt đầu chạy') // (1) <--
//   lalala // Lỗi, biến chưa được khai báo
//   console.log('Dòng này sẽ không bao giờ chạy') // (2)
// } catch (err) {
//   console.log(`Đã xảy ra lỗi`) // (3) <--
// }

// console.log('hahahah')

// try {
//   {{{{{{{{{{{{
// } catch(e) {
//   alert("Dòng này sẽ không được in ra");
// }

// setTimeout(function () {
//   try {
//     noSuchVariable // Biến chưa được khai báo, lỗi!
//   } catch (e) {
//     alert('Không hoạt động')
//   }
// }, 1000)

// try {
//   lalala // Lỗi, biến chưa được khai báo!
// } catch (err) {
//   console.log(err.name) // ReferenceError
//   console.log(err.message) // lalala is not defined
//   console.log(err.stack) // ReferenceError: lalala is not defined at (...call stack)

//   // Khi dùng như thế này thì alert sẽ tự hiểu
//   // và convert object để show ra như một string
//   // alert(err) // ReferenceError: lalala is not defined
// }

// try {
//   // throw 'Loi'
//   throw new Error('Loi roi')

// } catch (error) {
//   console.log(error)
// }

// let json = '{ "age": 30 }' // incomplete data
// try {
//   let user = JSON.parse(json)
//   if (!user.name) {
//     throw new SyntaxError('Incomplete data: no name')
//   }
//   blabla() // Lỗi không mong đợi
//   alert(user.name)
// } catch (e) {
//   if (e instanceof SyntaxError) {
//     alert('JSON Error: ' + e.message)
//   } else {
//     throw e // rethrow (quăng lại lỗi)
//   }
// }
const getApi = () => {
  let loading = true
  try {
    // loading()
    const x = 'hello'
    return true
  } finally {
    console.log('finally')
  }
}

console.log(getApi())