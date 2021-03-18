import HttpClient from './http'
const MODE = {
  ADD: 'add',
  EDIT: 'edit'
}

let mode = MODE.ADD
let currentId = ''
const addPost = () => {
  const title = document.getElementById('title').value
  const desc = document.getElementById('desc').value
  return HttpClient.addPost({
    title,
    desc
  })
}

const getPosts = () => {
  HttpClient.getPosts().then((res) => {
    let html = ''
    res.forEach((post, index) => {
      html += `
        <tr data-id="${post.id}">
          <td>${index + 1}</td>
          <td>${post.title}</td>
          <td>${post.desc}</td>
          <td>
            <button type="button" class="btn btn-info btn-start-edit">Sửa</button>
            <button type="button" class="btn btn-danger btn-start-remove">Xóa</button>
          </td>
        </tr>
      `
    })
    document.querySelector('table tbody').innerHTML = html
  })
}

const startEditPost = (id) => {
  currentId = id
  HttpClient.getPost(id).then((post) => {
    document.getElementById('title').value = post.title
    document.getElementById('desc').value = post.desc
    document.querySelector('.btn-add').classList.add('d-none')
    document.querySelector('.btn-edit-group').classList.remove('d-none')
  })
}

const cancelEditPost = () => {
  document.getElementById('title').value = ''
  document.getElementById('desc').value = ''
  mode = MODE.ADD
  document.querySelector('.btn-add').classList.remove('d-none')
  document.querySelector('.btn-edit-group').classList.add('d-none')
}

const editPost = (id) => {
  const title = document.getElementById('title').value
  const desc = document.getElementById('desc').value
  return HttpClient.updatePost(id, {
    title,
    desc
  }).finally(() => {
    cancelEditPost()
  })
}

const removePost = (id) => {
  return HttpClient.removePost(id)
}

const startRemovePost = (id, namePost) => {
  const isConfirmed = confirm(`Bạn có muốn xóa ${namePost}`)
  if (isConfirmed) {
    removePost(id).finally(() => {
      getPosts()
    })
  }
}

const init = () => {
  getPosts()

  // add
  document.querySelector('form .btn-add').addEventListener('click', (e) => {
    e.preventDefault()
    addPost().then((res) => {
      getPosts()
    })
  })

  // start edit
  document.querySelector('table tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-start-edit')) {
      startEditPost(e.target.parentElement.parentElement.dataset.id)
    }
  })

  // edit
  document.querySelector('form .btn-edit').addEventListener('click', (e) => {
    e.preventDefault()
    editPost(currentId).then((res) => {
      getPosts()
    })
  })

  // cancel
  document.querySelector('form .btn-cancel').addEventListener('click', (e) => {
    e.preventDefault()
    cancelEditPost()
  })

  // start remove
  document.querySelector('table tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-start-remove')) {
      startRemovePost(
        e.target.parentElement.parentElement.dataset.id,
        e.target.parentElement.parentElement.children[1].textContent
      )
    }
  })
}

init()
