function imprimirNome(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        console.log('Erro')
    }
}

var obj = {nome:'Ronaldo'}

imprimirNome(obj)