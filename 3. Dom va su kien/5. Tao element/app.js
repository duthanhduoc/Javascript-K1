const el = document.createElement('div')
// el.className = 'card p-2 mb-3'
// el.classList.add('card', 'p-2', 'mb-3')
el.setAttribute('class', 'card p-2 mb-3')
// el.setAttribute('id', '123')
el.id = '123'
// el.innerText = 'Choi game'
const strong = document.createElement('strong')
strong.innerText = 'Choi game'
el.appendChild(strong)

document.querySelector('.container').appendChild(el)