
const pokeNombre = document.querySelector('[data-poke-nombre]')
const pokeExperiencia = document.querySelector('[data-poke-experiencia]');
const pokeImagen =document.querySelector('[poke-sprite]');
const pokePeso = document.querySelector('[data-poke-peso]');
const pokeAltura = document.querySelector('[data-poke-altura]');



const BuscarPokemon = event =>{
    event.preventDefault();
    const {value} =event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data=>data.json())
    .then(response =>renderPokemonData(response))

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



