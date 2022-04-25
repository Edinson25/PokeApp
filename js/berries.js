const TableContainer = document.querySelector('.contenedor-tabla');

function fetchBerry(id){
    fetch(`https://pokeapi.co/api/v2/berry/${id}/`)
    .then((res)=>res.json())
    .then((data)=>{
        createcard(data);
    });

}

function fetchBerries(number) {
    for (let i=1; i<=number; i++){
        fetchBerry(i);
    }
}

function createcard(berry){
    const card = document.createElement('tr');
    

    const spriteContainer = document.createElement('td');
    spriteContainer.textContent = berry.name;

    const spriteContainer2 = document.createElement('td');
    spriteContainer2.textContent = berry.growth_time;

    const spriteContainer3 = document.createElement('td');
    spriteContainer3.textContent = berry.max_harvest;

    const spriteContainer4 = document.createElement('td');
    spriteContainer4.textContent = berry.size;

    const spriteContainer5 = document.createElement('td');
    spriteContainer5.textContent = berry.smoothness;

    const spriteContainer6 = document.createElement('td');
    spriteContainer6.textContent = berry.flavors[0].potency;

    const spriteContainer7 = document.createElement('td');
    spriteContainer7.textContent = berry.flavors[0].flavor.name;


    card.appendChild(spriteContainer);
    card.appendChild(spriteContainer7);
    card.appendChild(spriteContainer2);
    card.appendChild(spriteContainer3);
    card.appendChild(spriteContainer4);
    card.appendChild(spriteContainer5);
    card.appendChild(spriteContainer6);
    
    
    TableContainer.appendChild(card);
}

    fetchBerries(10);