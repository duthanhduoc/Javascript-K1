const data = [
  {
    name: 'Begüm Samancı',
    age: 56,
    gender: 'female',
    location: 'Vatan Cd',
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
  },
  {
    name: 'Mrs Remedios',
    age: 28,
    gender: 'female',
    location: 'Calle del Pez',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg'
  },
  {
    name: 'Castelino Carvalho',
    age: 74,
    gender: 'male',
    location: 'Rua Dois',
    avatar: 'https://randomuser.me/api/portraits/men/26.jpg'
  },
  {
    name: 'Ingeborg Lopez',
    age: 60,
    gender: 'female',
    location: 'Avenue Debourg',
    avatar: 'https://randomuser.me/api/portraits/women/70.jpg'
  }
]

const profileInterator = (profiles) => {
  let nextIndex = 0
  return {
    next() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true }
    }
  }
}
const profiles = profileInterator(data)
const handleNext = () => {
  const currentProfile = profiles.next().value
  if (currentProfile === undefined) {
    location.reload()
  } else {
    document.getElementById(
      'profile-avatar'
    ).innerHTML = `<img src="${currentProfile.avatar}" alt="" />`
    document.getElementById('profile-info').innerHTML = `
      <ul class="list-group">
      <li class="list-group-item">Tên: ${currentProfile.name}</li>
      <li class="list-group-item">Tuổi ${currentProfile.age}</li>
      <li class="list-group-item">Giới tính ${currentProfile.gender}</li>
      <li class="list-group-item">Địa chỉ ${currentProfile.location}</li>
    </ul>
      `
  }
}
handleNext()
document.getElementById('next').addEventListener('click', handleNext)
