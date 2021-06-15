const fs = require('fs')
const moment = require('moment')

let comparison = 0
let swap = 0

function sort(numbers) {
  const start = moment()
  console.log('# selection sort begins')

  for (let i = 0; i < numbers.length; i++) {
    const index = findIndexMin(numbers, i)
    const tmp = numbers[index]
    numbers[index] = numbers[i]
    numbers[i] = tmp
    swap++
  }

  const end = moment()

  console.log('took', end.diff(start, 'milliseconds'), 'milliseconds')
  console.log('number of comparison:', comparison)
  console.log('number of swap:', swap)

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)

  fs.writeFileSync('./outputs/selection-sort', numbers)
}

function findIndexMin(numbers, from) {
  let index = from

  for (let i = from; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) index = i
    comparison++
  }

  return index
}

module.exports = sort
