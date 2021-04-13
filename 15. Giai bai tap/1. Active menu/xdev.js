;(function () {
  function init() {
    window.addEventListener('scroll', () => {
      const pos = window.pageYOffset + 250
      document.querySelectorAll('section').forEach((section) => {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        if (top <= pos && pos < bottom) {
          document
            .querySelector(`nav ul li a[href='#${section.id}']`)
            .classList.add('active')
        } else {
          document
            .querySelector(`nav ul li a[href='#${section.id}']`)
            .classList.remove('active')
        }
      })
    })
  }
  window.addEventListener('DOMContentLoaded', init)
})()
