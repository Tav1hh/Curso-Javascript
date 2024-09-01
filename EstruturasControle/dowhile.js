function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
 
opção = -1;

do {
    opção = getInteiroAleatorioEntre(-1,10);
    console.log(opção)
} while(opção != -1) 

console.log('Até a proxima!')