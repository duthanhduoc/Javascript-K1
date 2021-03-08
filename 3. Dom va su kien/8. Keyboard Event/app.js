const input = document.getElementsByTagName('input')[0]
input.addEventListener('keyup', event => {
  console.log(event.target.value)
})
