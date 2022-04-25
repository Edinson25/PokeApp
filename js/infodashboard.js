// Se llama al identificador de la etiqueta respectiva y se guarda en una constante.
const pokeNombre = document.querySelector('[data-poke-nombre]') 
const pokeExperiencia = document.querySelector('[data-poke-experiencia]');
const pokeImagen =document.querySelector('[poke-sprite]');
const pokePeso = document.querySelector('[data-poke-peso]');
const pokeAltura = document.querySelector('[data-poke-altura]');
const pokeMovimiento = document.querySelector('[data-poke-movimiento');
const pokeHP = document.querySelector('[data-poke-hp');
const pokeHabilidad = document.querySelector('[data-poke-habilidad');
const pokeSlots = document.querySelector('[data-poke-slots');

//Se crea una constante BuscarPokemon la cual nos ayuda a "filtrar" el pokemon que el Usuario nos estan requiriendo
const BuscarPokemon = event =>{
    event.preventDefault();
    const {value} =event.target.pokemon; //Se toma el valor que ingreso el usuario
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`) //Se hace un fetch para consumir la api mediante la Url, el value.toLowe case nos brinda una ayuda, ya que si el usuario ingresa el nombre del pokemon en mayusculas o minusculas lo va  a encontrar.
    .then(data=>data.json()) //La informacion se filtra por medio de un JSON
    .then(response =>createcard3(response))//Despues se espera la respuesta de la funcion createcard3

}


//Se crea una funcion createcard la cual nos va a llamar los datos que necesitamos de cada pokemon y esta funcion recibe un pokemon
function createcard3(pokemon){  

    //Basicamente aqui se llama a las constantes que nombramos al principio del codigo, luego se pone el "tipo" de objeto si es un textContent o por ejemplo si es una imagen (src), luego de esto se llama a pokemon que es el parametro que recibe la funcion, es por decirlo el nombre del "objeto" o como su nombre lo indica el pokemon, luego de esto se pone un punto el cual nos ayuda a buscar los atributos del objeto, en caso de que ese atributo sea un arreglo, se indica la posicion del arreglo y luego el atributo que buscamos dentro de ese arreglo.
    
    pokeNombre.textContent=pokemon.name;   
    pokeExperiencia.textContent=pokemon.base_experience;
    pokeImagen.src=pokemon.sprites.front_default;
    pokePeso.textContent=pokemon.weight +"Kg";
    pokeAltura.textContent = pokemon.height+"m";
    pokeMovimiento.textContent = pokemon.moves[0].move.name;
    pokeHP.textContent = pokemon.stats[0].base_stat;
    pokeHabilidad.textContent=pokemon.abilities[0].ability.name;
    pokeSlots.textContent=pokemon.abilities[0].slot;
    
}



