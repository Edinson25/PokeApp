
//Se guarda en una constante pokemonContainer la clase que identifica el contenedor de la tabla en el HTML
const pokemonContainer = document.querySelector('.content');


//Se crea una funcion fetchPokemon la cual recibe un id como parametro
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)//Se consume la API por medio de la URL se pone el ${id} ya que es el parametro 
    .then((res)=>res.json())//Se recibe una respuesta JSON
    .then((data)=>{
        createcard(data);//se reciben los datos de la funcion createcard
    });

}
//funcion para traer una cantidad de Pokemons 
//Se crea la funcion fetchPokemons la cual recibe un numero
function fetchPokemons(number) {
    //Se hace un ciclo para recorrer los numeros, depende del numero del parametro
    for (let i=1; i<=number; i++){
        fetchPokemon(i);// se le pasa el valor de i a la funcion fetchPokemon, es decir que el id tomara el valor de i
    }
}

//Esta funcion tiene dos razones:1.Para crear etiquetas HTML y 2.Para obtener los datos que necesitamos, esta funcion recibe una berry que sera nuestro objeto


function createcard(pokemon){
    //Aqui voy a explicar como funciona basicamente la funcion, se crean constantes las cuales nos ayudan a crear elementos HTML mediante el document.createElement luego se pone dentro de parentesis la etiqueta que deseamos, luego de esto tenemos las constantes spriteContainer las cuales nos filtran el tipo de dato como lo es un textContent y luego el objeto que en este caso es un Pokemon y luego el atributo del objeto
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

    const hola = document.createElement('div');
    card.classList.add('boxback')
  //Esto nos sive para saber la semantica de como quedaran alojadas nuestras etiquetas HTML mediante unn appendChild
    card.appendChild(spriteContainer);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

    fetchPokemons(300);