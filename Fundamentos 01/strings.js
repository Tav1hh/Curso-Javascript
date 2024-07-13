const escola = 'cod3r'

console.log(escola.charAt(4)) //pega o caractere na posicao informada, comecando do 0
console.log(escola.charAt(5)) //quando nao encontra, retorna null '' 
console.log(escola.charCodeAt(3)) //retorna o codigo do unicode
console.log(escola.indexOf('3')) //o indice desse caractere

console.log(escola.substring(1)) // do indice 1 até o final
console.log(escola.substring(0,3)) // do indice 0 ate o indice 3 sem inclui-lo

console.log('Escola '.concat(escola).concat('!')) //concatena '+'
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // troca um caractere pelo outro
console.log(escola.replace(/\d/, 'e')) //substitui todos os digitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) //sustitui todos os caracteres pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) //fatia todo o conteudo de acordo com um caractere especifico