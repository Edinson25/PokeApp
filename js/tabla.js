const TableContainer = document.querySelector('.contenedor-tabla');

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
    const card = document.createElement('tr');
    

    const spriteContainer = document.createElement('td');
    spriteContainer.textContent = pokemon.name;

    const spriteContainer2 = document.createElement('td');
    spriteContainer2.textContent = pokemon.base_experience;

    const spriteContainer3 = document.createElement('td');
    spriteContainer3.textContent = pokemon.weight;

    const spriteContainer4 = document.createElement('td');
    spriteContainer4.textContent = pokemon.height;

    

    

    card.appendChild(spriteContainer);
    card.appendChild(spriteContainer2);
    card.appendChild(spriteContainer3);
    card.appendChild(spriteContainer4);
    
    TableContainer.appendChild(card);
}
    fetchPokemons(20);