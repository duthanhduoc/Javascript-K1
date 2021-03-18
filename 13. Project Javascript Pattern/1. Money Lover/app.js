const LSController = (function () {
  function getItems() {
    return JSON.parse(localStorage.getItem('items')) || []
  }
  function addItem(item) {
    const items = getItems()
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
  }
  function editItem(id, name, amount) {
    const items = getItems()
    const indexFound = items.findIndex((element) => element.id === id)
    items[indexFound].name = name
    items[indexFound].amount = Number(amount)
    localStorage.setItem('items', JSON.stringify(items))
  }
  function removeItem(id) {
    const items = getItems()
    const indexFound = items.findIndex((element) => element.id === id)
    items.splice(indexFound, 1)
    localStorage.setItem('items', JSON.stringify(items))
  }
  function removeAll() {
    localStorage.removeItem('items')
  }
  function getTotalAmount() {
    const items = getItems()
    let total = 0
    items.forEach((item) => {
      total += item.amount
    })
    return total
  }
  return {
    getItems,
    addItem,
    editItem,
    removeItem,
    removeAll,
    getTotalAmount
  }
})()

const ItemController = (function () {
  function Item(name, amount) {
    this.name = name
    this.amount = Number(amount)
    this.id = new Date().toISOString()
  }
  const data = {
    items: LSController.getItems(),
    totalAmount: LSController.getTotalAmount(),
    currentItem: null
  }
  function add(name, amount) {
    const item = new Item(name, amount)
    data.items.push(item)
    data.totalAmount = 0
    data.items.forEach((element) => {
      data.totalAmount += element.amount
    })
    return item
  }
  function edit(id, name, amount) {
    const index = data.items.findIndex((item) => item.id === id)
    data.items[index].amount = Number(amount)
    data.items[index].name = name
    data.totalAmount = 0
    data.items.forEach((element) => {
      data.totalAmount += element.amount
    })
    return data.items[index]
  }
  function removeAll() {
    data.items = []
    data.totalAmount = 0
  }
  function removeItem(id) {
    const index = data.items.findIndex((item) => item.id === id)
    data.totalAmount = data.totalAmount - data.items[index].amount
    data.items.splice(index, 1)
  }
  function getItems() {
    return data.items
  }
  function getItemById(id) {
    return data.items.find((item) => item.id === id)
  }
  function getTotalAmount() {
    return data.totalAmount
  }
  function setCurrentItem(id) {
    data.currentItem = data.items.find((item) => item.id === id)
  }
  function getCurrentItem() {
    return data.currentItem
  }
  return {
    add,
    getItems,
    getTotalAmount,
    removeAll,
    getItemById,
    removeItem,
    setCurrentItem,
    getCurrentItem,
    edit
  }
})()

const UIController = (function () {
  function clearFields() {
    document.getElementById('name').value = ''
    document.getElementById('amount').value = ''
  }
  function add(item) {
    const listNode = document.querySelector('.list')
    const itemNode = document.createElement('div')
    itemNode.setAttribute('data-id', item.id)
    itemNode.classList.add(
      'border',
      'd-flex',
      'item',
      'justify-content-between',
      'p-3',
      'shadow-sm'
    )
    itemNode.innerHTML = `
    <div class="item__info">
      <strong>${item.name}: </strong>
      <span>${Number(item.amount).toLocaleString()}</span>
    </div>
    <button class="btn-sm btn btn-info btn__edit">Sửa</button>
    `
    listNode.appendChild(itemNode)
    clearFields()
  }
  function showTotal(total) {
    document.querySelector(
      '.total__amount strong'
    ).textContent = total.toLocaleString()
  }
  function edit(id) {
    const item = ItemController.getItemById(id)
    document.getElementById('name').value = item.name
    document.getElementById('amount').value = item.amount
    !document.querySelector('.btn__add').classList.contains('d-none') &&
      document.querySelector('.btn__add').classList.add('d-none')
    document.querySelector('.edit-buttons').classList.contains('d-none') &&
      document.querySelector('.edit-buttons').classList.remove('d-none')
  }
  function submitEdit(id, name, amount) {
    const nameNode = document.querySelector(
      `.item[data-id="${id}"] .item__info strong`
    )
    const amountNode = document.querySelector(
      `.item[data-id="${id}"] .item__info span`
    )
    nameNode.textContent = name
    amountNode.textContent = Number(amount).toLocaleString()
  }
  function removeItem(id) {
    document.querySelector(`.item[data-id="${id}"]`).remove()
  }
  function backToAdd() {
    document.querySelector('.btn__add').classList.contains('d-none') &&
      document.querySelector('.btn__add').classList.remove('d-none')
    !document.querySelector('.edit-buttons').classList.contains('d-none') &&
      document.querySelector('.edit-buttons').classList.add('d-none')
    clearFields()
  }
  function alert(message, className) {
    const alertNode = document.createElement('div')
    alertNode.classList = 'alert ' + className
    alertNode.textContent = message
    document
      .querySelector('body')
      .insertBefore(alertNode, document.querySelector('.form-add'))
    setTimeout(() => {
      alertNode.remove()
    }, 2000)
  }
  function validate(name, amount) {
    if (name.trim() === '' || amount.trim() === '') {
      alert('Hãy nhập đầy đủ các trường', 'alert-warning')
      return false
    }
    return true
  }
  return {
    add,
    showTotal,
    edit,
    backToAdd,
    removeItem,
    submitEdit,
    alert,
    validate
  }
})()

const App = (function () {
  function init() {
    const items = ItemController.getItems()
    const total = ItemController.getTotalAmount()
    items.forEach((item) => {
      UIController.add(item)
    })
    UIController.showTotal(total)

    //remove all
    document
      .querySelector('.btn__remove-all')
      .addEventListener('click', (event) => {
        ItemController.removeAll()
        LSController.removeAll()
        document.querySelector('.list').innerHTML = ''
        UIController.showTotal(0)
        UIController.backToAdd()
        UIController.alert('Xóa tất cả thành công', 'alert-success')
      })
    // add
    document.querySelector('.btn__add').addEventListener('click', (event) => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const amount = document.getElementById('amount').value
      if (UIController.validate(name, amount)) {
        const item = ItemController.add(name, amount)
        LSController.addItem(item)
        UIController.add(item)
        UIController.showTotal(ItemController.getTotalAmount())
        UIController.alert('Thêm thành công', 'alert-success')
      }
    })

    // Edit
    document.querySelector('.list').addEventListener('click', (event) => {
      if (event.target.classList.contains('btn__edit')) {
        ItemController.setCurrentItem(event.target.parentElement.dataset.id)
        UIController.edit(event.target.parentElement.dataset.id)
      }
    })

    // submit edit
    document.querySelector('.btn__save').addEventListener('click', (event) => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const amount = document.getElementById('amount').value
      if (UIController.validate(name, amount)) {
        ItemController.edit(ItemController.getCurrentItem().id, name, amount)
        LSController.editItem(ItemController.getCurrentItem().id, name, amount)
        UIController.submitEdit(
          ItemController.getCurrentItem().id,
          name,
          amount
        )
        UIController.showTotal(ItemController.getTotalAmount())
        UIController.backToAdd()
        UIController.alert('Sửa thành công', 'alert-success')
      }
    })

    // Back to Add
    document.querySelector('.btn__back').addEventListener('click', (event) => {
      event.preventDefault()
      UIController.backToAdd()
    })

    // Remove Item
    document
      .querySelector('.btn__remove')
      .addEventListener('click', (event) => {
        event.preventDefault()
        ItemController.removeItem(ItemController.getCurrentItem().id)
        LSController.removeItem(ItemController.getCurrentItem().id)
        UIController.removeItem(ItemController.getCurrentItem().id)
        UIController.showTotal(ItemController.getTotalAmount())
        UIController.backToAdd()
        UIController.alert('Xóa thành công', 'alert-success')
      })
  }
  return {
    init
  }
})()
document.addEventListener('DOMContentLoaded', App.init)
