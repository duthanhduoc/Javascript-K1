// // function* makeGenerator(i) {
// //   console.log('hello')
// //   yield i + 1
// //   console.log('Dòng này sẽ được in khi next() lần 2')
// //   yield i + 2
// //   console.log('Dòng này sẽ được in khi next() lần 3')
// //   yield i + 3
// //   return i + 4
// // }

// // const generator = makeGenerator(0)
// // try {
// //   console.log(generator.throw())
// // } catch (error) {
// //   console.log(error)
// // }
// // // generator.next() // {value: 1, done: false}
// // // generator.next() // {value: 2, done: false}
// // // generator.next() // {value: 3, done: false}
// // // generator.next() // {value: 4, done: true}

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
// g.throw(new Error('Something went wrong'))
// // "Something went wrong"
// // { value: 42, done: false }

function* fibonacci() {
  let prev = 0
  let curr = 1
  while (true) {
    yield curr
    const next = prev + curr
    prev = curr
    curr = next
  }
}
const fib = fibonacci()
console.log(fib.next().value) // 1
console.log(fib.next().value) // 2
console.log(fib.next().value) // 2
console.log(fib.next().value) // 3


