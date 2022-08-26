// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const fetchPokemon = () => {

    const pokeNameInput = document.getElementById("pokeName"); // es por id de input


    let pokeName = pokeNameInput.value;

    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemonFail.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default; // esto obtiene la url de la imagen
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}


const pokeImage = (url) => { // una funcion que usamos para mandar la nueva url de la imagen, para cambiarla por el pokemon buscado
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}



var historial = JSON.parse(localStorage.getItem("historial"))||[];
//aca se realizo la busqueda 
let recienteBusqueda = {}
//guardado de la busqueda 
historial.push(recienteBusqueda)
//guardo de la busqueda global 
localStorage.setItem("historial", JSON.stringify(busqueda));
