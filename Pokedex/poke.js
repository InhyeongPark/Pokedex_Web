// url: https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
console.log('You have connected...')

var id = 0;

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#generate-pokemon');
    generateBtn.addEventListener('click', renderEverything)

    getDeleteBtn().addEventListener('click', deleteEverything);
    
    document.getElementById("return").addEventListener("click", goBack);
})

function goBack() {
    window.location = "mainPage.php"; 
}

function renderEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon();

    getDeleteBtn().style.display = 'block'
    document.getElementById("leftball").classList.remove("hide");
    document.getElementById("rightball").classList.remove("hide");
}

function getDeleteBtn(){
    return document.querySelector('#delete-btn')
}
 

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
//            console.log(pokemon)
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url 
    
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}


function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") 
    
    id ++;
    
    pokeContainer.setAttribute("id",id);
    
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = "#" + id
   
    let pokeTypes = document.createElement('ul') 
  

    createTypes(pokeData.types, pokeTypes) 

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);  
    allPokemonContainer.appendChild(pokeContainer);       
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function deleteEverything(event){
    id = 0;
    event.target.style = 'none';
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""

    let generateBtn = document.createElement('button')
    generateBtn.innerText = "Generate Pokemon"
    generateBtn.id = 'generate-pokemon'
    generateBtn.classList.add('ui', 'secondary', 'button')
    generateBtn.addEventListener('click', renderEverything);

    allPokemonContainer.append(generateBtn)
    
    document.getElementById("leftball").classList.add("hide");
    document.getElementById("rightball").classList.add("hide");
}