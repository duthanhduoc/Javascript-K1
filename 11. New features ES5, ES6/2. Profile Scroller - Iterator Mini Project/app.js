const data = [
  {
    name: 'Benitez',
    age: 36,
    gender: 'male',
    location: 'Calle de Toledo',
    avatar: 'https://randomuser.me/api/portraits/men/0.jpg'
  },
  {
    name: 'Oliveira',
    age: 38,
    gender: 'female',
    location: 'Rua José Bonifácio',
    avatar: 'https://randomuser.me/api/portraits/women/70.jpg'
  },
  {
    name: 'Griffin',
    age: 33,
    gender: 'female',
    location: 'Herbert Road',
    avatar: 'https://randomuser.me/api/portraits/women/16.jpg'
  },
  {
    name: 'Brunet',
    age: 54,
    gender: 'male',
    location: 'Rue Louis-Blanqui',
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg'
  }
]

// Iterator Function
// const profileInterator = (profiles) => {
//   let index = 0
//   return {
//     next() {
//       return index < profiles.length
//         ? { value: profiles[index++], done: false }
//         : { done: true }
//     }
//   }
// }

// Generator Function
function* profileGenerator(profiles) {
  let index = 0
  while (index < profiles.length) {
    yield profiles[index++]
  }
}

const profiles = profileGenerator(data)
const handleNext = () => {
  const currentProfile = profiles.next().value
  if (currentProfile) {
    document.getElementById(
      'profile-avatar'
    ).innerHTML = `<img src="${currentProfile.avatar}" alt="" />`
    document.getElementById('profile-info').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Tên: ${currentProfile.name}</li>
    <li class="list-group-item">Tuổi: ${currentProfile.age}</li>
    <li class="list-group-item">Giới tính: ${currentProfile.gender}</li>
    <li class="list-group-item">Địa chỉ ${currentProfile.location}</li>
  </ul>
    `
  } else {
    location.reload()
  }
}
handleNext()
document.getElementById('next').addEventListener('click', handleNext)
