function verificar(){
    var ano_hoje = Number(new Date().getFullYear())
    var ano_nasc = Number(document.getElementById('idade').value)
    var idade = ano_hoje - ano_nasc

    if (ano_nasc == 0 || ano_nasc > ano_hoje){
        alert('Escolha uma data de nascimento válida')
    }else{
        var fsex = document.getElementsByName('radio')
        var res = document.getElementById('res')
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero =  'Homem'

            if(idade<=12){//Criança

            }else if(idade<=18){//Jovem

            }else if(idade<=50){//Adulto

            }else{//Idoso

            }

        }else{
            genero = 'Mulher'

            if(idade<=12){//Criança

            }else if(idade<=18){//Jovem

            }else if(idade<=50){//Adulto

            }else{//Idoso

            }

        }
        res.style.textAlign = 'center'
    } res.innerText = `Detectamos ${genero} com ${idade} anos`
}