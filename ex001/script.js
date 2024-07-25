hora = new Date().getHours()

var im = window.document.getElementById('imagem')
var p1 = window.document.getElementById('horinha')
p1.innerText += ` ${hora} Horas.`


if (hora <=12){
im.style.backgroundImage = 'url(imagens/manha.jpg)'
}else if(hora <=18){
im.style.backgroundImage = 'url(imagens/tarde.jpg)'
}else if (hora <=24){
im.style.backgroundImage = 'url(imagens/noite.jpg)'
}

