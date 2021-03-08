const btns = document.getElementsByClassName('btn-control')

for (const btn of btns) {
  btn.addEventListener('click', (event) => {
    for (const _btn of btns) {
      _btn.classList.remove('active')
    }
    event.target.classList.add('active')
    const id = event.target.id
    document.querySelectorAll('.content').forEach(content => {
      content.classList.remove('active')
      if(content.dataset.name === id) {
        content.classList.add('active')
      }
    })
  })
}

