// Se llama al identificador de la etiqueta respectiva y se guarda en una constante.
const berryNombre = document.querySelector('[data-berry-nombre]')
const berryExperiencia = document.querySelector('[data-berry-growth_time]');
const berryImagen =document.querySelector('[poke-sprite]');
const berryPeso = document.querySelector('[data-berry-max_harvest]');
const berryAltura = document.querySelector('[data-berry-size]');


//Se crea una constante BuscarPokemon la cual nos ayuda a "filtrar" la Berry que el Usuario nos estan requiriendo
const BuscarPokemon = event =>{
    event.preventDefault();
    const {value} =event.target.pokemon;//Se toma el valor que ingreso el usuario
    fetch(`https://pokeapi.co/api/v2/berry/${value.toLowerCase()}`)//Se hace un fetch para consumir la api mediante la Url, el value.toLowe case nos brinda una ayuda, ya que si el usuario ingresa el nombre del pokemon en mayusculas o minusculas lo va  a encontrar.
    .then(data=>data.json()) //La informacion se filtra por medio de un JSON
    .then(response =>createcard2(response))//Despues se espera la respuesta de la funcion createcard2

}

//Se crea una funcion createcard2 la cual nos va a llamar los datos que necesitamos de cada Berry y esta funcion recibe una berry

function createcard2(berry){
     //Basicamente aqui se llama a las constantes que nombramos al principio del codigo, luego se pone el "tipo" de objeto si es un textContent o por ejemplo si es una imagen (src), luego de esto se llama a una berry que es el parametro que recibe la funcion, es por decirlo el nombre del "objeto" o como su nombre lo indica la berry, luego de esto se pone un punto el cual nos ayuda a buscar los atributos del objeto, en caso de que ese atributo sea un arreglo, se indica la posicion del arreglo y luego el atributo que buscamos dentro de ese arreglo.
    berryNombre.textContent=berry.name;
    berryExperiencia.textContent=berry.growth_time;
    berryPeso.textContent=berry.max_harvest;
    berryAltura.textContent=berry.size;
    
}



