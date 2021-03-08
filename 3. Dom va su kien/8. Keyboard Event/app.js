const btns = document.getElementsByClassName('btn')

for (const btn of btns) {
  btn.addEventListener('click', event => {
    document.querySelectorAll('.btn').forEach(item => {
      item.classList.remove('active')
    })
    event.target.classList.add('active')
    const id = event.target.id
    document.querySelectorAll('.content').forEach(content => {
      if(content.dataset.id === id) {
        content.classList.add('active')
      } else {
        content.classList.remove('active')
      }
    })
  })
}