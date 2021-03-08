// const suaMayTinh = document.querySelectorAll('.card.mb-2.p-2')[0]
// suaMayTinh.remove()
// console.log(suaMayTinh)

// const container = document.getElementsByClassName('container')
// container[0].removeChild(document.querySelectorAll('.card.mb-2.p-2')[0])

// const suaMayTinh = document.querySelectorAll('.card.mb-2.p-2')[0]
// const h1 = document.createElement('h1')
// h1.innerText = 'List'
// h1.className = 'mb-3'
// suaMayTinh.replaceWith(h1)

// const container = document.getElementsByClassName('container')
// const h1 = document.createElement('h1')
// h1.innerText = 'List'
// h1.className = 'mb-3'
// const suaMayTinh = document.querySelectorAll('.card.mb-2.p-2')[0]
// container[0].replaceChild(h1, suaMayTinh)

const input = document.getElementById('name')
// input.classList.add('text-danger', 'p-5')
// input.classList.remove('form-control')
console.log(input.attributes)
console.log(input.getAttribute('placeholder'))
input.setAttribute('placeholder', 'Enter name...')
input.removeAttribute('id')
