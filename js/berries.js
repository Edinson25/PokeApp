//Se guarda en una constante TableContainer la clase que identifica el contenedor de la tabla en el HTML
const TableContainer = document.querySelector('.contenedor-tabla');

//Se crea una funcion fetchBerry la cual recibe un id como parametro
function fetchBerry(id){
    fetch(`https://pokeapi.co/api/v2/berry/${id}/`) //Se consume la API por medio de la URL se pone el ${id} ya que es el parametro que recibe la funcion
    .then((res)=>res.json()) //Se recibe una respuesta JSON
    .then((data)=>{ 
        createcard(data); //se reciben los datos de la funcion createcard
    });

}

//funcion para traer una cantidad de Berries
//Se crea la funcion fetchBerries la cual recibe un numero
function fetchBerries(number) {

    //Se hace un ciclo para recorrer los numeros, depende del numero del parametro
    for (let i=1; i<=number; i++){
        fetchBerry(i); // se le pasa el valor de i a la funcion fetchBerry, es decir que el id tomara el valor de i
    }
}

//Esta funcion tiene dos razones:1.Para crear etiquetas HTML y 2.Para obtener los datos que necesitamos, esta funcion recibe una berry que sera nuestro objeto

function createcard(berry){

    //Aqui voy a explicar como funciona basicamente la funcion, se crean constantes las cuales nos ayudan a crear elementos HTML mediante el document.createElement luego se pone dentro de parentesis la etiqueta que deseamos, luego de esto tenemos las constantes spriteContainer las cuales nos filtran el tipo de dato como lo es un textContent y luego el objeto que en este caso es una berry y luego el atributo del objeto
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



    //Esto nos sive para saber la semantica de como quedaran alojadas nuestras etiquetas HTML mediante unn appendChild
    card.appendChild(spriteContainer);
    card.appendChild(spriteContainer7);
    card.appendChild(spriteContainer2);
    card.appendChild(spriteContainer3);
    card.appendChild(spriteContainer4);
    card.appendChild(spriteContainer5);
    card.appendChild(spriteContainer6);
    
    
    TableContainer.appendChild(card);
}

    fetchBerries(12);