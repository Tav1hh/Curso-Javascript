function andar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passos = Number(document.getElementById('passos').value)
    var p = document.getElementById('paragrafo')
    var pd = ""

    if(inicio==''){
        alert('Por favor digite um Inicio válido')
        return
    }
    if(fim=='' || fim<1){
        alert('Por favor digite um Fim válido')
        return
    }else{
        if(passos=='' || passos<1){
            alert('Passos invalidos, considerando 1')
            passos = 1
        }
        for(inicio;inicio <=fim; inicio = inicio + passos){
            pd = pd+ `${inicio}, `
            console.log(inicio)
        }
        alert('Eae')
        p.innerHTML = `${pd}`
        alert('Eae')
    }
}