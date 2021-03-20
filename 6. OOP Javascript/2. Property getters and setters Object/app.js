// // // let user = {
// // //   name: 'John',
// // //   surname: 'Smith',

// // //   get fullName() {
// // //     return `${this.name} ${this.surname}`
// // //   },

// // //   set fullName(value) {
// // //     ;[this.name, this.surname] = value.split(' ')
// // //   }
// // // }
// // // // user.fullName = 'Alice Cooper'
// // // // console.log(user)

// // // console.log(Object.getOwnPropertyDescriptor(user, 'name'))
// // // console.log(Object.getOwnPropertyDescriptor(user, 'fullName'))

// // // let user = {}

// // // user.name = 'HUHUHU'

// // // let user = {
// // //   get name() {
// // //     return this._name
// // //   },
// // //   set name(value) {
// // //     if (value.length < 4) {
// // //       alert('Name is too short, need at least 4 characters')
// // //       return
// // //     }
// // //     this._name = value
// // //   }
// // // }
// // // user._name = 'Pet'
// // // user.name = 'Pet'
// // // console.log(user._name)

// // let user = {
// //   name: 'Alan',
// //   // get fullName() {
// //   //   return 'Du Thanh ' + this.name
// //   // },
// //   // set fullName(value) {
// //   //   const arr = value.split(' ')
// //   //   this.name = arr[arr.length - 1]
// //   // }
// //   setFullName(value1, value2) {},
// //   getFullName() {
// //     return
// //   }
// // }
// // // user.fullName = 'Du Thanh Duoc'
// // user.setFullName('', '')
// // for (const key in user) console.log(key)

// let user = {
//   name: 'John',
//   surname: 'Smith',

//   set fullName(value) {
//     ;[this.name, this.surname] = value.split(' ')
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`
//   }
// }

// let admin = {
//   __proto__: user,
//   isAdmin: true
// }

// admin.fullName = 'Alice Cooper'
// console.log('user', user)
// console.log('admin', admin)
