const valores = [7.8, 8.9, 91, 9.2]

valores[5] = 1345
console.log(valores)
console.log(valores.length)

valores.push({id:3},false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
