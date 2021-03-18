let set = new Set(['oranges', 'apples', 'bananas'])

for (let value of set) alert(value)

// tương tự với forEach:
set.forEach((value, valueAgain, set) => {
  alert(value)
})
