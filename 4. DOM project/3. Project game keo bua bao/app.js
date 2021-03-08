let i = 0
const change = () => {
  const spans = document.querySelectorAll('.b span')
  spans.forEach(
    (item) =>
      item.classList.contains('d-block') && item.classList.remove('d-block')
  )
  spans[i].classList.add('d-block')
  if (i === spans.length - 1) {
    i = 0
  } else {
    i++
  }
}
let intervalChange = setInterval(change, 100)
const firstWinSecond = (value1, value2) => {
  const arr = ['scissors', 'rock', 'paper']
  if (arr.indexOf(value1) === 0 && arr.indexOf(value2) === arr.length - 1) {
    return 1
  } else if (value1 === value2) {
    return 0
  }
  return arr.indexOf(value1) > arr.indexOf(value2) ? 1 : -1
}

document.querySelectorAll('.a .btn').forEach((item) => {
  item.addEventListener('click', (event) => {
    if (!item.classList.contains('active')) {
      clearInterval(intervalChange)
      item.classList.add('active')
      document
        .querySelectorAll('.a .btn:not(.active)')
        .forEach((item) => item.setAttribute('disabled', ''))
      const value1 = item.dataset.value
      const value2 = document.querySelector('.b span.d-block').dataset.value
      const result = firstWinSecond(value1, value2)
      const notificationNode = document.querySelector('.notification')
      const alertNode = document.createElement('div')
      notificationNode.appendChild(alertNode)
      if (result === -1) {
        alertNode.classList.add('d-inline-block', 'alert', 'alert-dark')
        alertNode.textContent = 'Bạn đã thua'
      } else if (result === 0) {
        alertNode.classList.add('d-inline-block', 'alert', 'alert-primary')
        alertNode.textContent = 'Bạn đã hòa'
      } else {
        alertNode.classList.add('d-inline-block', 'alert', 'alert-success')
        alertNode.textContent = 'Bạn đã thắng'
      }
      document.querySelector('.btn__play-again').classList.remove('d-none')
    }
  })
})

document
  .querySelector('.btn__play-again')
  .addEventListener('click', (event) => {
    document.querySelector('.btn__play-again').classList.add('d-none')
    intervalChange = setInterval(change, 100)
    document.querySelectorAll('.a .btn').forEach((item) => {
      item.removeAttribute('disabled')
      item.classList.contains('active') && item.classList.remove('active')
      document.querySelector('.notification').innerHTML = ''
    })
  })
