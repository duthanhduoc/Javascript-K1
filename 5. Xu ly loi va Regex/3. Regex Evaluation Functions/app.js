// const reg = /name/
// let val
// val = reg.exec('what is your name') // array
// // reg.exec('hello everybody') // null
// console.log(val)
// const reg = /name/
// const string = 'what is your name'
// let val = string.match(reg) // array
// console.log(val)


// const reg = /name/
// const string = 'what is your name'
// let val = string.search(reg) // 13
// console.log(val)


const regex = /name/i
const string = 'my name is Name'
const newString = string.replace(regex, 'cat')
console.log(newString) // my cat is cat