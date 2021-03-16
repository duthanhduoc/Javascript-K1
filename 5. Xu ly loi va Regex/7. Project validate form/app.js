const REGEX_EMAIL = /^([a-zA-Z0-9\.\_]+)(\+([0-9]+))?@([a-zA-Z0-9\.\-]+){1,63}\.[a-zA-Z]{1,5}$/
const REGEX_NAME = /^[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[\sA-Za-z\u00C0-\u024F\u1E00-\u1EFF]+$/

const isRequired = (value) => {
  if(typeof value === 'boolean') {
    return value ? false : 'Trường này là bắt buộc'
  } else {
    return value.trim() ? false : 'Trường này là bắt buộc'
  }
}
const isEmail = (value) =>
  REGEX_EMAIL.test(value) ? false : 'Email không đúng định dạng'
const isName = (value) =>
  REGEX_NAME.test(value) ? false : 'Tên không đúng định dạng'
const max = (maxValue) => (value) =>
  value.length <= maxValue ? false : `Giá trị lớn nhất là ${maxValue}`
const min = (minValue) => (value) =>
  value.length >= minValue ? false : `Giá trị bé nhật là ${minValue}`
const isSame = (name1, name2) => (value1, value2) => value1 === value2 ? false : `${name1} phải giống ${name2}`

const createMessage = (node, message, backupNode = null) => {
  const messageNode = document.createElement('div')
  messageNode.className = 'invalid-feedback'
  messageNode.textContent = message
  const _node = node || backupNode
  _node.parentElement.appendChild(messageNode)
  _node.classList.add('is-invalid')
  return messageNode
}

const isInvalid = (node, funcs, backupNode = null) => {
  for (func of funcs) {
    let value
    if (node === null) {
      value = ''
    } else if (node.type === 'checkbox') {
      value = node.checked
    } else {
      value = node.value
    }
    const message = func(value)
    if (message) {
      createMessage(node, message, backupNode)
      return message
    }
  }
  return false
}

const isInvalidCompare = (node1, node2, funcs) => {
  const value1 = node1.value
  const value2 = node2.value
  for(func of funcs) {
    const message = func(value1, value2)
    if(message) {
      createMessage(node2, message)
      return message
    }
  }
  return false
}

const clearMessage = () => {
  document.querySelectorAll('.invalid-feedback').forEach(item => item.remove())
  document.querySelectorAll('.is-invalid').forEach(item => item.classList.remove('is-invalid'))
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  clearMessage()
  const emailNode = document.getElementById('email')
  const nameNode = document.getElementById('name')
  const sexNode = document.getElementById('sex')
  const nationNode = document.querySelector('input[name=nation]:checked')
  const formCheck = document.querySelector('.form-check')
  const passwordNode = document.getElementById('password')
  const confirmedPasswordNode = document.getElementById('confirmedPassword')
  const agree = document.getElementById('agree')
  const arrayValidate = [
    isInvalid(emailNode, [isRequired, isEmail]),
    isInvalid(nameNode, [isRequired, isName, max(50)]),
    isInvalid(sexNode, [isRequired]),
    isInvalid(nationNode, [isRequired], formCheck),
    isInvalid(passwordNode, [isRequired, min(8), max(20)]),
    isInvalid(confirmedPasswordNode, [isRequired, min(8), max(20)]),
    isInvalid(agree, [isRequired]),
    isInvalidCompare(passwordNode, confirmedPasswordNode, [isSame('Nhập lại mật khẩu', 'mật khẩu')])
  ]
  const isValidForm = arrayValidate.every((item) => !item)
  if (isValidForm) {
    console.log('form valid')
  }
})
