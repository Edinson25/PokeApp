
const pokeNombre = document.querySelector('[data-poke-nombre]')
const pokeExperiencia = document.querySelector('[data-poke-experiencia]');
const pokeImagen =document.querySelector('[poke-sprite]');
const pokePeso = document.querySelector('[data-poke-peso]');
const pokeAltura = document.querySelector('[data-poke-altura]');
const pokeMovimiento = document.querySelector('[data-poke-movimiento');
const pokeHP = document.querySelector('[data-poke-hp');
const pokeHabilidad = document.querySelector('[data-poke-habilidad');
const pokeSlots = document.querySelector('[data-poke-slots');


const BuscarPokemon = event =>{
    event.preventDefault();
    const {value} =event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data=>data.json())
    .then(response =>createcard3(response))

}

const renderPokemonData = data =>{
    const sprite = data.sprites.front_default;
    const {stats, types} = data;
    

    pokeNombre.textContent=data.name;
    pokeExperiencia.textContent=data.base_experience;
    pokeImagen.src=data.sprites.front_default;
    pokePeso.textContent=data.weight +"Kg";
    pokeAltura.textContent = data.height+"m";
    
}

function createcard3(pokemon){
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



