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
// for (const iterator of it) {
//   console.log(iterator)
// }
// function* makeGenerator(i) {
//   yield i + 1
//   console.log('Dòng này sẽ được in khi next() lần 2')
//   yield i + 2
//   console.log('Dòng này sẽ được in khi next() lần 3')
//   yield i + 3
//   return i + 4
// }
// const generator = makeGenerator(0)
// console.log(generator.next())
// console.log(generator.return())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// function* gen() {
//   while (true) {
//     try {
//       yield 42
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }
// const g = gen()
// g.next()
// // { value: 42, done: false }
// console.log(g.throw(new Error('Something went wrong')))
// "Something went wrong"
// { value: 42, done: false }
function* fibonacci() {
  yield 1
  yield 1
  yield 1
  yield 2
}
const fib = fibonacci()
// console.log(fib.next().value) // 1
// console.log(fib.next().value) // 2
// console.log(fib.next().value) // 2
// console.log(fib.next().value) // 3

for (const item of fib) {
  console.log(item)
}
