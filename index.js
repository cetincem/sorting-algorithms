const fs = require('fs')

const generateNumbers = require('./generate-numbers')
const selectionSort = require('./algorithms/selection-sort')

const max = 1000000
const quantity = 5000

const numbers = generateNumbers({ max, quantity })
console.log('random numbers generated:', numbers.length)

fs.writeFileSync('./outputs/numbers', numbers)

selectionSort(numbers)
