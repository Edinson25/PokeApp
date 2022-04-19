const pokemonContainer = document.querySelector('.content');

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=>res.json())
    .then((data)=>{
        createcard(data);
    });

}

function fetchPokemons(number) {
    for (let i=1; i<=number; i++){
        fetchPokemon(i);
    }
}

function createcard(pokemon){
    const card = document.createElement('div');
    card.classList.add('box');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('imgBx');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const name = document.createElement('h3');
    name.classList.add('text');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}
    fetchPokemons(300);