// const arr = [1,2,3,4]
// arr[5] = 'a'
// console.log(arr)
// console.log(arr[5])

// const arr = [1,2,3,4]
// console.log(Array.isArray(arr))
// console.log(arr instanceof Array)

// const fruits = ['Banana', 'Orange', 'Apple']
// const x = fruits.push('Mango') // giá trị của x là 4
// console.log(fruits)

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// delete fruits[0]
// console.log(fruits) // [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.length) // 4

// console.log([undefined, "Orange", "Apple", "Mango"])

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// // Xóa 1 phần tử tại vị trí số 0
// const x = fruits.splice(0, 1, 'Melon')

// console.log(fruits)

// const cars1 = [1, 2, 3]
// const cars2 = [1, 2, 3]
// console.log(cars1 === cars2)
// const numbers = [1, 2, 3, 4, 5, 6, 7]
// const newNumbers = []
// // for (let i = 0; i < numbers.length; i++) {
// //   if(i ===2) {
// //     break
// //   }
// //   newNumbers.push(numbers[i])
// // }

// numbers.forEach((item) => {
//   newNumbers.push(item)
// })

// console.log(newNumbers)

// const numbers = [1, 2, 3]
// const newNumbers = numbers.map((value, index, array) => {
//   return value + 2
// })
// console.log(newNumbers) // [2, 4, 6]

// const numbers = [1, 2, 3]
// const result = numbers.find((value, index, array) => {
//   console.log(value)
//   return value >= 2
// })
// console.log(result) // 2

const numbers = [1, 2, 3]
// let check = true

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] <= 2) {
//     check = false
//     break
//   }
// }

// numbers.forEach(item => {
//   if(item <=2) {
//     check = false
//   }
// })

// let check = numbers.every(item => {
//   console.log(item)
//   return item > 2
// })
// console.log(check)



// const arr = ['a', 'b', 'c', 'd']
// const need = 'd'
// // Cach 1: dung find
// // const check = arr.find(item => item === need)

// // Cach 2: dung findIndex
// // const check = arr.findIndex(item => item === need) !== -1 ? true : false

// // Cach 3: dung indexOf
// // const check = arr.indexOf(need) !== -1 ? true : false

// // Cach 4: dung includes
// const check = arr.includes(need)

// if(check) {
//   console.log('arr chua need')
// } else {
//   console.log('arr khong chua need')
// }

let value = 2
if(value === 1 || value === 2 || value === 3 || value === 4)  {
  console.log('Value bang 1 hoac 2 hoac 3')
}

if([1,2,3, 4].includes(value)) {
  console.log('Value bang 1 hoac 2 hoac 3')
}