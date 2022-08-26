async function getAPI(pokemon) {
    try {
        let url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;

        console.log("URL a llamar", url);
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        document.getElementById('divPokemon').innerHTML = 'No existe pokemon';
        console.log(document.getElementById('divPokemon').innerHTML);
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
        adding_recipe.innerHTML = `
            <div class="card">
                <div class="cardContainer" id="${dataPokemon.id}">
                    <div class="cardImgContainer">
                        <p>
                            nombre=${dataPokemon.name} 
                        </p>
                        <button class="linkCard" onclick="console.log('Recipe ID: ',${dataPokemon.id})">
                            <img class="imgCard" src="${dataPokemon.sprites.front_default}">
                        </button>
                    </div>
                </div>
            </div>`;
    recipesGoInDiv.appendChild(adding_recipe);
    //console.log(dataPokemon);
}


document.getElementById("btnSearch").onclick = async function () {
    const search = document.getElementById("search").value;
    const dataPokemon = await getAPI(search.toLowerCase());
    console.log(dataPokemon);
    html(dataPokemon, "divPokemon");

    ///Guardar en sesión
    let historico = localStorage.getItem("historial");
    localStorage.setItem("historial", historico+'||'+search);
    console.log(localStorage.getItem("historial"));
};

console.log('historial:',localStorage.getItem("historial"));