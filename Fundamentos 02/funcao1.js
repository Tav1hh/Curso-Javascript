function imprimirSoma(a1,a2){
    console.log(a1+a2)
}

imprimirSoma(2,5)
imprimirSoma(2)
imprimirSoma(2, 10, 123, 213, 1)
imprimirSoma()

function soma(a = 0, b = 0){
    return a + b
}

console.log(soma(2,6))
console.log(soma(3))
console.log(soma())