Number.prototype.entre = function(inicio,fim) {
    return this >= inicio && this <= fim;
}

function imprimirResultado(nota = 0) {
    try {
        if (nota.entre(9,10)) {
            console.log('Quadro de Honra')
        } else if (nota.entre(7,9)) {
            console.log('Aprovado')
        } else if (nota.entre(0,7)) {
            console.log('Reprovado')
        } else {
            console.log('Nota Invalida..')
        }
    } catch {
        console.log('Erro: ' + nota)
    }
}


imprimirResultado(11) 
imprimirResultado(10) 
imprimirResultado(9) 
imprimirResultado(8)
imprimirResultado(7) 
imprimirResultado(6) 
imprimirResultado(5)
imprimirResultado(4) 
imprimirResultado(3) 
imprimirResultado(2) 
imprimirResultado(1)
imprimirResultado(0)
imprimirResultado('Olá, Mundo!')

