const ItemController = (function () {
  let current = {
    item: null
  }
  function Item(name, amount) {
    this.name = name
    this.amount = amount
    this.id = new Date().toISOString()
  }
  function create(name, amount) {
    return new Item(name, amount)
  }
  function startEdit(item) {
    current.item = item
  }
  return {
    create,
    startEdit,
    current
  }
})()

const UIController = (function () {
  function add(item) {
    const itemNode = document.createElement('div')
    itemNode.className =
      'card flex-row justify-content-between align-items-center p-2 mb-3'
    itemNode.innerHTML = `
    <div class="info">
    <strong class="info-name">${item.name}: </strong>
    <span>${item.amount}</span>
  </div>
  <button class="btn btn-info btn-start-edit" data-id='${item.id}'>Sửa</button>
    `
    document.querySelector('.list').appendChild(itemNode)
    document.querySelector('#name').value = ''
    document.querySelector('#amount').value = ''
  }
  function validate(name, amount) {
    if (name.trim() === '' || amount.trim() === '') {
      const alert = document.createElement('div')
      alert.className = 'alert alert-warning'
      alert.textContent = 'Không được để trống!'
      document.querySelector('.notification').appendChild(alert)
      setTimeout(() => {
        alert.remove()
      }, 2000)
      return false
    }
    return true
  }
  function startEdit(name, amount) {
    document.querySelector('#name').value = name
    document.querySelector('#amount').value = amount
    document.querySelector('.btn-add').classList.add('d-none')
    document.querySelector('.btn-group-edit').classList.remove('d-none')
    document.querySelector('.btn-group-edit').classList.add('d-flex')

  }
  function edit() {
    document.querySelector('#name').value = ''
    document.querySelector('#amount').value = ''
    document.querySelector('.btn-add').classList.remove('d-none')
    document.querySelector('.btn-group-edit').classList.add('d-none')
    document.querySelector('.btn-group-edit').classList.remove('d-flex')
  }
  function render() {
    document.querySelector('.list').innerHTML = ''
    LSController.getList().forEach((item) => {
      add(item)
    })
    document.querySelector('.total strong').textContent = LSController.getList().length
  }
  function back() {
    edit()
  }
  return {
    add,
    validate,
    startEdit,
    edit,
    render,
    back
  }
})()

const LSController = (function () {
  function add(item) {
    const list = getList()
    list.push(item)
    localStorage.setItem('list', JSON.stringify(list))
  }
  function getList() {
    return JSON.parse(localStorage.getItem('list')) || []
  }
  function find(id) {
    return getList().find(item => item.id === id)
  }
  function edit(id, name, amount) {
    const list = getList()
    const index = list.findIndex(item => item.id ===id)
    list[index].name = name
    list[index].amount = amount
    localStorage.setItem('list', JSON.stringify(list))
  }

  return {
    add,
    getList,
    find,
    edit
  }
})()

const App = (function () {
  function init() {
    
    UIController.render()
    document.querySelector('.btn-add').addEventListener('click', (event) => {
      event.preventDefault()
      const name = document.querySelector('#name').value
      const amount = document.querySelector('#amount').value
      if (UIController.validate(name, amount)) {
        const item = ItemController.create(name, amount)
        UIController.add(item)
        LSController.add(item)
        document.querySelector('.total strong').textContent = LSController.getList().length
      }
    })

    document.querySelector('.list').addEventListener('click', (event) => {
      if (event.target.classList.contains('btn-start-edit')) {
        const id = event.target.dataset.id
        const item = LSController.find(id)
        UIController.startEdit(item.name, item.amount)
        ItemController.startEdit(item)
      }
    })

    document.querySelector('.btn-edit').addEventListener('click', event => {
      event.preventDefault()
      const name = document.querySelector('#name').value
      const amount = document.querySelector('#amount').value
      if (UIController.validate(name, amount)) {
        LSController.edit(ItemController.current.item.id, name, amount)
        UIController.edit()
        UIController.render()
        ItemController.startEdit(null)
      }
    })

    document.querySelector('.btn-back').addEventListener('click', event => {
      event.preventDefault()
      ItemController.startEdit(null)
      UIController.back()
    })


  }
  return {
    init
  }
})()

window.addEventListener('DOMContentLoaded', App.init)
