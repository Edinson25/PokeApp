const pokeNombre = document.querySelector('[data-berry-nombre]')
const pokeExperiencia = document.querySelector('[data-berry-growth_time]');
const pokeImagen =document.querySelector('[poke-sprite]');
const pokePeso = document.querySelector('[data-berry-max_harvest]');
const pokeAltura = document.querySelector('[data-berry-size]');



const BuscarPokemon = event =>{
    event.preventDefault();
    const {value} =event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/berry/${value.toLowerCase()}`)
    .then(data=>data.json())
    .then(response =>createcard2(response))

}



function createcard2(berry){
    pokeNombre.textContent=berry.name;
    pokeExperiencia.textContent=berry.growth_time;
    pokePeso.textContent=berry.max_harvest;
    pokeAltura.textContent=berry.size;
    
}



