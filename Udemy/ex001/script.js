hora = new Date().getHours()

var im = window.document.getElementById('imagem')
var p1 = window.document.querySelector('section > div > p')
var b = window.document.querySelector('body')
p1.innerText += ` ${hora} Horas.`


if (hora <=12){
im.style.backgroundImage = 'url(imagens/manha.jpg)' 
b.style.backgroundColor = "rgb(35, 132, 211)" //Azul Claro
}else if(hora <=18){
im.style.backgroundImage = 'url(imagens/tarde.jpg)'
b.style.backgroundColor = 'orange' //Laranja
}else if (hora <=24){
im.style.backgroundImage = 'url(imagens/noite.jpg)'
b.style.backgroundColor = "rgb(71, 64, 71)" //Marrom 
}
p1.innerText = `Agora são ${hora} Horas`

