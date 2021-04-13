// $('.panel-header').click(() => {
//   $('.panel-body').slideToggle('1000')
// })

function slideDown(element) {
  const initalHeight = Number(
    window.getComputedStyle(element).height.split('px')[0]
  )
  let height = 0
  const eachHeight = initalHeight / 100
  const interval = setInterval(() => {
    if (height < initalHeight) {
      element.style.display = 'block'
      element.style.overflow = 'hidden'
      element.style.height = height + 'px'
      height += eachHeight
    } else {
      clearInterval(interval)
      element.setAttribute('style', 'display: block')
    }
  }, 1)
}

function slideUp(element) {
  const initalHeight = Number(
    window.getComputedStyle(element).height.split('px')[0]
  )
  let height = initalHeight
  const eachHeight = initalHeight / 100
  const interval = setInterval(() => {
    if (0 < height) {
      element.style.display = 'block'
      element.style.overflow = 'hidden'
      element.style.height = height + 'px'
      height -= eachHeight
    } else {
      clearInterval(interval)
      element.setAttribute('style', 'display: none')
    }
  }, 1)
}

document.querySelector('.panel-header').addEventListener('click', () => {
  const panelBody = document.querySelector('.panel-body')
  if(window.getComputedStyle(panelBody).display === 'block') {
    slideUp(panelBody)
  } else {
    slideDown(panelBody)
  }
})
