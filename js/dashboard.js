
//Cambia la clase del navegador para que este activa es decir que cuando pasa el mouse por encima de un item del navegador la clase cambia a hovered lo cual nos ayuda a que se activen los estilos
let list = document.querySelectorAll('.navegador li');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item)=>
item.addEventListener('mouseover', activeLink))

//Menu Toggle para "contraer" el navegador
//Esta funcion sirve que cuando el usuario haga clic en el toggle (icono) la clase navegador y main sea activa, lo cual nos ayuda a que los estilos se dividan y sean diferentes, basicamente para que se contraiga el menu

let toggle = document.querySelector('.toggle');
let navegador = document.querySelector('.navegador');
let main = document.querySelector('.main');


toggle.onclick=function(){
    navegador.classList.toggle('active');
    main.classList.toggle('active');

}