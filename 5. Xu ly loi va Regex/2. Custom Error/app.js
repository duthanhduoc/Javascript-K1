class CustomError extends Error {
  constructor(message, people) {
    super(message)
    this.people = people
    this.name = 'CustomError'
  }
}
try {
  throw new CustomError('Endgame', { name: 'Thanos' })
} catch (err) {
  console.log(err.message) // Endgame
  console.log(err.people) // Thanos
  console.log(err instanceof Error) // true
  console.log(err instanceof CustomError) // true
}

// const obj = new Error('loi')
// console.log(obj)
// console.log(obj instanceof Object)
// console.log(obj instanceof Error)