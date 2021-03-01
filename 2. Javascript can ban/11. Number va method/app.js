// // const soDu = 0.3
// // const rutTien = (sotien1, sotien2) => {
// //   if ((sotien1*10 + sotien2*10)/10 > soDu) {
// //     return false
// //   }
// //   return true
// // }

// // console.log(rutTien(0.2, 0.1))

// // const a = 1 + '1'
// // console.log(a)

// document.getElementById('test').addEventListener('change', function(event) {
//   const value = event.target.value
//   if(value !== '' && !isNaN(value)) {
//     console.log('la so')
//   } else {
//     console.log('khong la so')
//   }
// })
// // const a = ''
// // console.log(!isNaN(a))

// let sodu = 0.3

// function rutTien(a, b) {
//   if ((a*10 + b*10)/10 > sodu) {
//     console.log('Vuot qua so du')
//   } else {
//     console.log('Ban co the rut tien')
//   }
// }

// rutTien(0.1, 0.2)

// let a = 0.2 + 0.1
// console.log(Number(a.toFixed(1)))

// Number('')

// console.log(!isNaN(true))

document.getElementById('test').addEventListener('change', function(event) {
  const value = event.target.value
  if(value !== '' && !isNaN(value)) {
    console.log('input la so')
  } else {
    console.log('input khong la so')
  }
})