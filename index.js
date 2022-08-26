async function getAPI(pokemon) {
    try {
        let url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;

        console.log("URL a llamar", url);
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        document.getElementById("nombre").innerHTML ='No existe pokemon';
        document.getElementById("imagenP").src = './pokemon-sad.gif'
        console.log('error',error);
    }
}

async function getPokemon(pokemon){
    try {
        const dataPokemon = await getAPI(pokemon);
        console.log(dataPokemon);
        html(dataPokemon, 'divPokemon');
    } catch (error) {
        console.log('error2',error);
    }
};

function html(dataPokemon = '', html) {
    const recipesGoInDiv = document.getElementById(html);
    recipesGoInDiv.innerHTML = ""; //Clean element Before Filling
    const adding_recipe = document.createElement("div");
    const changingImage = document.getElementById("imagenP");
    changingImage.src =  dataPokemon.sprites.front_default;

    const changingName = document.getElementById("nombre");
    changingName.innerHTML = "#" + dataPokemon.id + " " + String(dataPokemon.name).toUpperCase();
    recipesGoInDiv.appendChild(adding_recipe);
    //console.log(dataPokemon);
}


document.getElementById("btnSearch").onclick = async function () {
    const search = document.getElementById("search").value;
    const dataPokemon = await getAPI(String(search).toLowerCase());
    console.log(dataPokemon);
    html(dataPokemon, "divPokemon");

    ///Guardar en sesión
    let historico = localStorage.getItem("historial");
    localStorage.setItem("historial", historico+'||'+search);
    console.log(localStorage.getItem("historial"));
};
document.getElementById("btnClear").onclick = async function () {
   document.getElementById("search").value = '';
   document.getElementById("imagenP").src = './who.jfif'

};

console.log('historial:',localStorage.getItem("historial"));
