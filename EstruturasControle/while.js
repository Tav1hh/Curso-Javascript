function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
 
opção = 0;

while(opção != -1) {
    opção = getInteiroAleatorioEntre(-1,10);
    console.log(opção)
}

console.log('Até a proxima!')