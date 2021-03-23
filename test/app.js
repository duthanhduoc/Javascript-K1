var points = [1, 2, [3, 4], 5, 6]
// flat array
const result = points.reduce((total, current) => {
  return total.concat(current)
}, [])
console.log(result) // [1, 2, 3, 4, 5, 6]
