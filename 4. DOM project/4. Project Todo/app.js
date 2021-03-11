const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || []

// Add item
const addTask = (obj) => {
  const taskItem = document.createElement('div')
  taskItem.className =
    'align-items-center d-flex justify-content-between p-2 shadow task-item mb-2'
  // Cach 1
  // taskItem.innerHTML = `
  // <span>${obj.value}</span>
  // <button class="btn btn-danger btn-remove">
  //   X
  // </button>
  // `
  // taskItem.addEventListener('click', event => {
  //   if (event.target.classList.contains('btn-remove')) {
  //     const check = confirm(`Bạn có muốn xóa ${obj.value}`)
  //     if(check) {
  //       taskItem.remove()
  //       const index = tasks.findIndex(taskItem => taskItem === obj.value)
  //       tasks.splice(index, 1)
  //     }
  //   }
  // })

  // Cach 2
  const span = document.createElement('span')
  span.textContent = obj.value
  const button = document.createElement('button')
  button.textContent = 'X'
  button.className = 'btn btn-danger btn-remove'
  button.addEventListener('click', (event) => {
    const check = confirm(`Bạn có muốn xóa ${obj.value}`)
    if (check) {
      taskItem.remove()
      const tasks = getTasks()
      const index = tasks.findIndex((taskItem) => taskItem === obj.value)
      tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  })
  taskItem.appendChild(span)
  taskItem.appendChild(button)

  document.querySelector('.task').appendChild(taskItem)

}

// Submit
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const value = document.querySelector('form input').value.trim()
  if(value) {
    const item = {
      id: new Date().toISOString(),
      value
    }
    const tasks = getTasks()
    tasks.push(item)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    addTask(item)
    document.querySelector('form input').value = ''
  }
})

// Filter
document.querySelector('.filter input').addEventListener('keyup', (event) => {
  const value = event.target.value
  const task = document.querySelector('.task')
  task.innerHTML = ''
  const tasks = getTasks()
  tasks.forEach((taskItem) => {
    if (taskItem.value.toLowerCase().includes(value.toLowerCase().trim())) {
      addTask(taskItem)
    }
  })
})

// Remove all
document.querySelector('.btn-remove-all').addEventListener('click', event => {
  document.querySelector('.task').innerHTML = ''
  localStorage.removeItem('tasks')
})

// Init
getTasks().forEach((taskItem) => {
  addTask(taskItem)
})
