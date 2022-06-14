'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  const binary = String(num);
	let exponent = 0;
	let decimalNumber = 0;

	for (let i = binary.length; i > 0; i--) {
		if (binary[i - 1] === '1') {
			decimalNumber += 2 ** exponent;
		}
		exponent += 1;
	}
	return decimalNumber;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binary = [];
  while(num / 2 !== 0){
	binary.unshift(num % 2);
	num = Math.floor(num / 2);
  }
  return binary.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}