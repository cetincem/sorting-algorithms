module.exports = function generate({max, quantity}) {
  const numbers = []
  let n = 0

  while (n < quantity) {
    numbers.push(Math.floor(Math.random() * max) + 1)
    n++
  }

  return numbers
}
