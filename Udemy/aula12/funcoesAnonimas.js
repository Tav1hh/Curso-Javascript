const soma = (a,b) => a + b;
const sub = (a,b) => a - b;
const div = (a,b) => a / b;
const mult = (a,b) => a * b;

const imprimirResultado = function (a,b, operacao = soma) {
    console.log(operacao(a,b));
}

imprimirResultado(3,4)
imprimirResultado(3,4,sub)
imprimirResultado(3,4,div)
imprimirResultado(3,4,mult)

imprimirResultado(3,4, (x,y)=>{
    return x * y + x -y
})

const pessoa = {
    falar: function() {
        console.log("Opa")
    }
}

pessoa.falar()