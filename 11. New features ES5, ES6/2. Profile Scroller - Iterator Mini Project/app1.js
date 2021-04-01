const data = [
  {
    name: 'Hoffman',
    age: 34,
    gender: 'male',
    location: 'Galway Road',
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg'
  },
  {
    name: 'Özkök',
    age: 32,
    gender: 'male',
    location: 'Necatibey Cd',
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    name: 'Alvarez',
    age: 33,
    gender: 'female',
    location: 'Avenida de Andalucía',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg'
  },
  {
    name: 'Hansen',
    age: 44,
    gender: 'female',
    location: 'Poppelvænget',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg'
  }
]

const profileIterator = (profiles) => {
  let index = 0
  return {
    next() {
      return index < profiles.length
        ? { value: profiles[index++], done: false }
        : { done: true }
    }
  }
}

const profiles = profileIterator(data)
const handleNext = () => {
  const currentProfile = profiles.next().value
  if (currentProfile !== undefined) {
    document.getElementById('profile-avatar').innerHTML = `
    <img src="${currentProfile.avatar}" alt="" />
    `
    document.getElementById('profile-info').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Tên: ${currentProfile.name}</li>
    <li class="list-group-item">Tuổi: ${currentProfile.age}</li>
    <li class="list-group-item">Giới tính: ${currentProfile.gender}</li>
    <li class="list-group-item">Địa chỉ: ${currentProfile.location}</li>
  </ul>
    `
  } else {
    location.reload()
  }
}
handleNext()
document.getElementById('next').addEventListener('click', handleNext)
