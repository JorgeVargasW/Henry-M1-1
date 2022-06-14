'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  sum = 0
  var numReverse = num.split('').reverse().join('')
  
  for (i = 0; i < numReverse.length; i++) {
   console.log(`${sum} = ${sum}+${numReverse[i]} * 2 ** ${i} `)
    sum = sum + numReverse[i] * 2 ** i;
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}