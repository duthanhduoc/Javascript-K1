let globalSymbol = Symbol.for('name')
let localSymbol = Symbol('name')

alert(Symbol.keyFor(globalSymbol)) // name, global symbol
alert(Symbol.keyFor(localSymbol)) // undefined, not global

alert(localSymbol.description) // name
