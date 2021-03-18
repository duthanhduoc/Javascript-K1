function map() {
  const toaDo = [15.9030623, 105.8066925]
  function layToaDo() {
    return toaDo
  }
  return {
    inToaDo: function () {
      console.log(layToaDo())
    }
  }
}

export function log() {
  console.log(111111)
}
