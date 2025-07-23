var code1 = 10
console.log(code1 + 3)

var code2 = 100 / 2 - 10

var code3 = 40 - (1 % 2)
console.log(code3)

var message = "The vault has been secured. The combination is:"

var codeA = code1 + code2 + code3

var codeB = (`${code1} + ${code2} + ${code3}`)
console.log(message + codeB)