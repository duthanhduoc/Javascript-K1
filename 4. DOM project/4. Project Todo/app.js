const createTaskNode = (title) => {
  const taskItemNode = document.createElement('div')
  taskItemNode.classList.add(
    'border',
    'rounded-lg',
    'align-items-center',
    'd-flex',
    'justify-content-between',
    'p-2',
    'task'
  )
  taskItemNode.innerHTML = `
  <span>${title}</span>
  <button class="btn btn-danger btn-sm task__btn-remove">Xóa</button>
  `
  return taskItemNode
}

const add = (event) => {
  event.preventDefault()
  const title = document.getElementById('title').value
  document.querySelector('.tasks').appendChild(createTaskNode(title))
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.push(title)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  document.getElementById('title').value = ''
}

const remove = (target) => {
  const title = target.firstElementChild.textContent
  const check = confirm(`Bạn có muốn xóa task: ${title}`)
  if (check) {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.splice(tasks.indexOf(title), 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    target.remove()
  }
}

const filter = (event) => {
  const value = event.target.value.trim().toLowerCase()
  document.querySelectorAll('.task').forEach((item) => {
    if (item.firstElementChild.textContent.toLowerCase().includes(value)) {
      item.style.cssText = 'display:flex !important'
    } else {
      item.style.cssText = 'display:none !important'
    }
  })
}

const init = () => {
  document.querySelector('form').addEventListener('submit', add)
  document.getElementById('filter').addEventListener('keyup', filter)
  document.querySelector('.tasks').addEventListener('click', (event) => {
    if (event.target.classList.contains('task__btn-remove')) {
      remove(event.target.parentElement)
    }
  })
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.forEach((task) =>
    document.querySelector('.tasks').appendChild(createTaskNode(task))
  )
}
window.addEventListener('DOMContentLoaded', init)
