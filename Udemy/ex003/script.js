var btn = document.getElementById('btn')
btn.addEventListener('click', andar)
function andar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passos = Number(document.getElementById('passos').value)
    var p = document.getElementById('paragrafo')

    if(inicio==''){
        alert('Por favor digite um Inicio válido')
        return
    }
    if(fim=='' || fim<1){
        alert('Por favor digite um Fim válido')
        return
    }
   if(passos=='' || passos<1){
        alert('Passos invalidos, considerando 1')
        passos = 1
    }
    p.innerHTML = 'Contando: '
    for(var i = inicio; i<=fim; i += passos){
        p.innerHTML += `Passo ${i}, `
    }
}