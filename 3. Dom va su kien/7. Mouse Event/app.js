// const btn = document.querySelector('.btn.btn-primary')
// btn.addEventListener('click', event => {
//   event.preventDefault()
//   // console.log(document.getElementsByTagName('input')[0].value)
//   // console.log(event.target.parentElement)

// })

// document.querySelector('.container').addEventListener('mousemove', event => {
//   event.target.style.background = `rgb(${event.clientX}, ${event.clientY}, 60)`
// })

// function handleClick(event) {
//   // event.preventDefault()
//   console.log(event)
// }

// Template String
const string1 = 'du', string2 = 'thanh', string3 = 'duoc'
const so = 10
const string4 = string1 + ' ' + string2 + ' ' + so + ' ' + string3
const string5 = `${string1} ${string2} ${so} ${string3}`
console.log(string4)
console.log(string5)

const string6 = 'xdev\nclass'
const string7 = `xdev
class`
console.log(string6)