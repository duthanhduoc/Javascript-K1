const ItemController = (function () {
  const current = null

  function Item(name, amount) {
    this.name = name
    this.amount = amount
    this.id = new Date().toISOString()
  }

  function create(name, amount) {
    return new Item(name, amount)
  }

  return {
    create,
    current
  }
})()

const UIController = (function () {
  function add(item) {
    const divNode = document.createElement('div')
    divNode.className =
      'border d-flex item justify-content-between p-3 shadow-sm mb-3'
    divNode.innerHTML = `
    <div class="item__info">
    <strong>${item.name}: </strong>
    <span>${item.amount}</span>
  </div>
  <button class="btn-sm btn btn-info btn__edit" data-id="${item.id}">Sửa</button>
    `
    document.querySelector('.list').appendChild(divNode)
    // Reset
    document.getElementById('name').value = ''
    document.getElementById('amount').value = ''
  }

  function alert(type, message) {
    const divNode = document.createElement('div')
    divNode.className = `alert alert-${type}`
    divNode.textContent = message
    document.getElementById('notification').appendChild(divNode)
    setTimeout(() => {
      divNode.remove()
    }, 2000)
  }

  function validate(name, amount) {
    if (name.trim() === '' || amount.trim() === '') {
      return false
    }
    return true
  }

  function render() {
    renderTotal()
    document.querySelector('.list').innerHTML = ''
    LSController.getList().forEach((item) => {
      add(item)
    })
  }

  function renderTotal() {
    document.querySelector(
      '.total__amount strong'
    ).textContent = LSController.getTotal()
  }

  function startEdit(name, amount) {
    document.getElementById('name').value = name
    document.getElementById('amount').value = amount
    document.querySelector('.btn__add').classList.add('d-none')
    document.querySelector('.edit-buttons').classList.remove('d-none')
    document.querySelector('.edit-buttons').classList.add('d-flex')
  }

  function edit() {
    // Reset
    document.getElementById('name').value = ''
    document.getElementById('amount').value = ''
    document.querySelector('.btn__add').classList.remove('d-none')
    document.querySelector('.edit-buttons').classList.add('d-none')
    document.querySelector('.edit-buttons').classList.remove('d-flex')
  }

  function back() {
    edit()
  }

  function remove() {
    edit()
  }

  return {
    add,
    alert,
    validate,
    render,
    startEdit,
    edit,
    back,
    renderTotal,
    remove
  }
})()

const LSController = (function () {
  function getList() {
    return JSON.parse(localStorage.getItem('list')) || []
  }

  function add(item) {
    const list = getList()
    list.push(item)
    localStorage.setItem('list', JSON.stringify(list))
  }

  function find(id) {
    return getList().find((item) => item.id === id)
  }

  function edit(id, name, amount) {
    const list = getList()
    const index = list.findIndex((item) => item.id === id)
    list[index].name = name
    list[index].amount = amount
    localStorage.setItem('list', JSON.stringify(list))
  }

  function getTotal() {
    const total = getList().reduce((result, currentItem, currentIndex) => {
      return result + Number(currentItem.amount)
    }, 0)
    return total
  }

  function remove(id) {
    const list = getList()
    const index = list.findIndex((item) => item.id === id)
    list.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(list))
  }

  function removeAll() {
    localStorage.removeItem('list')
  }

  return {
    getList,
    add,
    find,
    edit,
    getTotal,
    remove,
    removeAll
  }
})()

const App = (function () {
  function init() {
    // Render all
    UIController.render()

    // Add
    document.querySelector('.btn__add').addEventListener('click', (event) => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const amount = document.getElementById('amount').value
      if (UIController.validate(name, amount)) {
        const item = ItemController.create(name, amount)
        UIController.add(item)
        LSController.add(item)
        UIController.renderTotal()
        UIController.alert('success', 'Thêm thành công')
      } else {
        UIController.alert('warning', 'Bạn phải nhập đầy đủ các trường')
      }
    })

    // Start Edit
    document.querySelector('.list').addEventListener('click', (event) => {
      if (event.target.classList.contains('btn__edit')) {
        const id = event.target.dataset.id
        const item = LSController.find(id)
        UIController.startEdit(item.name, item.amount)
        ItemController.current = item
      }
    })

    // Edit
    document.querySelector('.btn__save').addEventListener('click', (event) => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const amount = document.getElementById('amount').value
      UIController.edit()
      console.log(ItemController.current)
      LSController.edit(ItemController.current.id, name, amount)
      UIController.render()
      ItemController.current= null
    })

    // back
    document.querySelector('.btn__back').addEventListener('click', (event) => {
      event.preventDefault()
      UIController.back()
      ItemController.current= null
    })

    // remove
    document
      .querySelector('.btn__remove')
      .addEventListener('click', (event) => {
        event.preventDefault()
        LSController.remove(ItemController.current)
        UIController.remove()
        UIController.render()
        ItemController.current = null
      })

    // Remove all
    document
      .querySelector('.btn__remove-all')
      .addEventListener('click', (event) => {
        const isCheck = confirm('Bạn có muốn xóa tất cả không?')
        if (isCheck) {
          LSController.removeAll()
          UIController.render()
        }
      })
  }
  return {
    init
  }
})()

window.addEventListener('DOMContentLoaded', App.init)
