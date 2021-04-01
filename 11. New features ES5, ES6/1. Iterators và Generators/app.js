// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start
//   let iterationCount = 0
//   const rangeIterator = {
//     next: function () {
//       let result
//       if (nextIndex <= end) {
//         result = { value: nextIndex, done: false }
//         nextIndex += step
//         iterationCount++
//         return result
//       }
//       return { value: iterationCount, done: true }
//     }
//   }
//   return {
//     [Symbol.iterator]: function () {
//       return rangeIterator
//     }
//   }
// }
// let it = makeRangeIterator(1, 6, 2)
// console.log(it.next()) // {value: 1, done: false}
// console.log(it.next()) // {value: 3, done: false}
// console.log(it.next()) // {value: 5, done: false}
// console.log(it.next()) // {value: 3, done: true}
// it.next()
// for (const item of it) {
//   console.log(item)
// }

// const arr = [0, 2, 3, 4, 5]
// console.log(arr)
// const obj = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]: function () {
//     return {
//       current: this.from,
//       last: this.to,
//       next() {
//         return this.current <= this.last
//           ? { done: false, value: this.current++ }
//           : { done: true }
//       }
//     }
//   }
// }
// for (const item of obj) {
//   console.log(item)
// }
// const str = 'du thanh duoc'
// for (const char of str) {
//   console.log(char)
// }
// console.log(String.prototype)

// function* makeGenerator(i) {
//   yield i + 1
//   console.log('Dòng này sẽ được in khi next() lần 2')
//   yield i + 2
//   console.log('Dòng này sẽ được in khi next() lần 3')
//   yield i + 3
//   return i + 4
// }
// const generator = makeGenerator(0)
// // console.log(generator.next()) // {value: 1, done: false}
// // console.log(generator.next()) // {value: 2, done: false}
// // console.log(generator.next()) // {value: 3, done: false}
// // console.log(generator.next()) // {value: 4, done: true}
// // console.log(generator.next())
// // for (const item of generator) {
// //   console.log(item)
// // }
// console.log(generator.return())
// console.log(generator.next())
function* gen() {
  while (true) {
    try {
      yield 42
    } catch (e) {
      console.log(e.message)
    }
  }
}
const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.throw(new Error('Loi')))
console.log(g.next())
