
const pokeNombre = document.querySelector('[data-poke-nombre]')
const pokeExperiencia = document.querySelector('[data-poke-experiencia]');
const pokeImagen =document.querySelector('[poke-sprite]');
const pokePeso = document.querySelector('[data-poke-peso]');
const pokeAltura = document.querySelector('[data-poke-altura]');

// function fetchPokemon(id){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then((res)=>res.json())
//     .then((data)=>{
//         createcard(data);
//     });

// }

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
    pokePeso.textContent=data.weight;
    pokeAltura.textContent = data.height;
    
}



// function fetchPokemons(number) {
//     for (let i=1; i<=number; i++){
//         fetchPokemon(i);
//     }
// }

// function createcard(pokemon){
//     const card = document.createElement('div');
//     card.classList.add('card');

//     const Container = document.createElement('div');

//     const numeros = document.createElement('div');
//     numeros.classList.add('numeros');
//     numeros.textContent = pokemon.base_experience;
    

//     const name = document.createElement('div');
//     name.classList.add('cardName');
//     name.textContent = 'Experiencia Base';


//     const icon = document.createElement('div');
//     icon.classList.add('iconBx');

//     const imagen = document.createElement('img')
//     imagen.src= "img/flecha-hacia-arriba.png"
//     // // sprite.src = pokemon.sprites.front_default


   

//     card.appendChild(Container);
//     Container.appendChild(numeros);
//     Container.appendChild(name)
//     card.appendChild(icon);
//     icon.appendChild(imagen);
//     // card.appendChild(name);

//     pokemonContainer.appendChild(card);
// }
//     fetchPokemons(3);