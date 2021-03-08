// const cards = document.getElementsByClassName('card')
// cards[0].remove()

// document.querySelector('.container').removeChild(cards[2])
const last = document.getElementsByClassName('card')[2]
last.classList.add('bg-info')
last.classList.remove('p-2')
last.setAttribute('data-name', '123')
last.removeAttribute('data-name')
last.removeAttribute('class')

const h2 = document.getElementsByTagName('h2')[0]
// console.log(h2.dataset.id)
console.log(h2.getAttribute('data-id'))