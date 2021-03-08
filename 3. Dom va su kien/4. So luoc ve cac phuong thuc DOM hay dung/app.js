const el = document.querySelector('#name')
// el
console.log(el.parentElement.parentElement)
console.log(el.parentNode.childNodes)
console.log(el.parentElement.children)
console.log(el.parentElement.parentElement.nextElementSibling.nextElementSibling.previousElementSibling)

const container = document.querySelector('.container')

console.log(container.children[4])