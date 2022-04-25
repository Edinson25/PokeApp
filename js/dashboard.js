

//Cambia la clase del navegador para que este activa
let list = document.querySelectorAll('.navegador li');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item)=>
item.addEventListener('mouseover', activeLink))

//Menu Toggle para "contraer" el navegador

let toggle = document.querySelector('.toggle');
let navegador = document.querySelector('.navegador');
let main = document.querySelector('.main');


toggle.onclick=function(){
    navegador.classList.toggle('active');
    main.classList.toggle('active');

}