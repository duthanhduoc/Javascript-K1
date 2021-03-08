const REGEX_EMAIL = /^([a-zA-Z0-9\.\_]+)(\+([0-9]+))?@([a-zA-Z0-9\.\-]+){1,63}\.[a-zA-Z]{1,5}$/
const REGEX_NAME = /[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+(\s?[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+)+$/
const isEmail = (value) =>
  REGEX_EMAIL.test(value) ? '' : 'Email không đúng định dạng'
const isName = (value) =>
  REGEX_NAME.test(value) ? '' : 'Tên không đúng định dạng'
const isRequired = (name) => (value) =>
  value.trim() !== '' ? '' : `${name ? name : 'Trường này'} không được để trống`
const isCheck = (value) => (value ? '' : 'Bạn phải chọn trước khi đăng ký')
const isMax = (name, max) => (value) =>
  value.length <= max ? '' : `${name} không được vượt quá ${max} ký tự`
const isMin = (name, min) => (value) =>
  value.length >= min ? '' : `${name} không được dưới ${min} ký tự`
const createMessageNode = (message = '') => {
  const messageNode = document.createElement('div')
  messageNode.classList.add('message-error', 'text-danger', 'small')
  messageNode.innerText = message
  return messageNode
}
const isSamePassword = (value1, value2) =>
  value1 === value2 ? '' : `Mật khẩu nhập lại không đúng`
const validate = (node, funcs) => {
  let message = ''
  for (const func of funcs) {
    let value = ''
    if (node === null) {
      value = ''
    } else if (node.type === 'checkbox') {
      value = node.checked
    } else {
      value = node.value
    }
    message = func(value)
    if (message) {
      break
    }
  }
  if (message) {
    node.parentElement.appendChild(createMessageNode(message))
    node?.classList.add('is-invalid')
    return false
  }
  return true
}
const validateCompare = (node1, node2, funcs) => {
  let message = ''
  for (const func of funcs) {
    message = func(node1.value, node2.value)
    if (message) {
      break
    }
  }
  if (message) {
    node2.parentElement.appendChild(createMessageNode(message))
    node1.classList.add('is-invalid')
    node2.classList.add('is-invalid')
    return false
  }
  return true
}
const clearValidate = () => {
  const nodeMessages = document.querySelectorAll('form .message-error')
  const nodeFormControls = document.querySelectorAll('form .form-control')
  const nodeFormCheckInputs = document.querySelectorAll(
    'form .form-check-input'
  )
  nodeMessages.forEach((node) => {
    node.remove()
  })
  nodeFormCheckInputs.forEach(
    (node) =>
      node.classList.contains('is-invalid') &&
      node.classList.remove('is-invalid')
  )
  nodeFormControls.forEach(
    (node) =>
      node.classList.contains('is-invalid') &&
      node.classList.remove('is-invalid')
  )
}

const handleSubmit = (event) => {
  event.preventDefault()
  clearValidate()
  const email = document.getElementById('email')
  const name = document.getElementById('name')
  const sex = document.getElementById('sex')
  const nation = document.querySelector('input[name="nation"]:checked')
  const password = document.getElementById('password')
  const confirmedPassword = document.getElementById('confirmedPassword')
  const agree = document.getElementById('agree')
  const validArray = [
    validate(email, [isRequired('Email'), isEmail]),
    validate(name, [isRequired('Tên'), isName, isMax('Tên', 50)]),
    validate(sex, [isRequired('Giới tính')]),
    validate(nation, [isRequired('Quốc gia')]),
    validate(password, [
      isRequired('Mật khẩu'),
      isMin('Mật khẩu', 8),
      isMax('Mật khẩu', 20)
    ]),
    validate(confirmedPassword, [
      isRequired('Nhập lại mật khẩu'),
      isMin('Nhập lại mật khẩu', 8),
      isMax('Nhập lại mật khẩu', 20)
    ]),
    validate(agree, [isCheck]),
    validateCompare(password, confirmedPassword, [isSamePassword])
  ]
  const isValidForm = validArray.every((item) => item)
  if (isValidForm) {
    const body = {
      email: email.value,
      name: name.value,
      sex: sex.value,
      nation: nation.value,
      password: password.value
    }
    console.log(body)
  }
}
