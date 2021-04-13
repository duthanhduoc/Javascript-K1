// const profile = {
//   name: 'Alex',
//   address: {
//     street: 'ST Peter',
//     number: 102
//   }
// }

// const profile2 = {...profile}
// profile2.address = {...profile2.address}
// profile.address.number = 200

// console.log(profile2)

const arr = [{ name: 'Alan' }, { name: 'Walker' }]
const arr2 = arr.map(item => {
  return {...item}
})

arr[0].name = 'Winner'

console.log(arr2)