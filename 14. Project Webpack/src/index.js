import http from './http'
import avatar from './assets/images/wet-floor.png'
import 'bootstrap/scss/bootstrap.scss'
import './assets/styles/index.scss'

const getPosts = async () => {
  const posts = await http.getPosts()
  let html = ''
  posts.forEach((post, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${post.title}</td>
        <td>${post.description}</td>
        <td>
        <button class="btn btn-sm btn-info btn-edit" data-id="${
          post.id
        }">Edit</button>
        <button class="btn btn-sm btn-danger btn-remove" data-id="${
          post.id
        }">Remove</button>
        </td>
      </tr>
    `
  })
  document.querySelector('table tbody').innerHTML = html
}

const clearData = () => {
  document.getElementById('title').value = ''
  document.getElementById('description').value = ''
}

const createPost = async () => {
  const title = document.getElementById('title').value
  const description = document.getElementById('description').value
  await http.createPost({ title, description })
  clearData()
}

const startEditPost = async (id) => {
  const post = await http.getPost(id)
  document.getElementById('title').value = post.title
  document.getElementById('description').value = post.description
  const btnGroupEdit = document.getElementById('btn-group-edit')
  btnGroupEdit.className = 'd-flex'
  btnGroupEdit.dataset.id = id
  document.getElementById('btn-add').classList.add('d-none')
}

const editPost = async () => {
  const title = document.getElementById('title').value
  const description = document.getElementById('description').value
  const btnGroupEdit = document.getElementById('btn-group-edit')
  const id = btnGroupEdit.dataset.id
  await http.updatePost(id, { title, description })
  clearData()
  btnGroupEdit.removeAttribute('data-id')
  document.getElementById('btn-add').classList.remove('d-none')
  btnGroupEdit.className = 'd-none'
}

const back = () => {
  clearData()
  const btnGroupEdit = document.getElementById('btn-group-edit')
  document.getElementById('btn-add').classList.remove('d-none')
  btnGroupEdit.className = 'd-none'
  btnGroupEdit.removeAttribute('data-id')
}

const removePost = async (id) => {
  await http.deletePost(id)
}

const init = () => {
  getPosts()

  // Add
  document
    .getElementById('btn-add')
    .addEventListener('click', async (event) => {
      event.preventDefault()
      await createPost()
      getPosts()
    })

  // Start Edit
  document.querySelector('table tbody').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-edit')) {
      const id = event.target.dataset.id
      startEditPost(id)
    }
  })

  // Edit
  document
    .getElementById('btn-save')
    .addEventListener('click', async (event) => {
      event.preventDefault()
      await editPost()
      getPosts()
    })

  // Back
  document.getElementById('btn-back').addEventListener('click', (event) => {
    event.preventDefault()
    back()
  })

  // Remove
  document
    .querySelector('table tbody')
    .addEventListener('click', async (event) => {
      if (event.target.classList.contains('btn-remove')) {
        const target = event.target
        const id = target.dataset.id
        const title = target.parentElement.parentElement.children[1].textContent
        const isConfirmed = confirm(`Bạn có muốn xóa item ${title} này không?`)
        if (isConfirmed) {
          await removePost(id)
          getPosts()
        }
      }
    })

    // DOM image
    document.getElementById('avatar').innerHTML = `<img src="${avatar}">`
}

window.addEventListener('DOMContentLoaded', init)
