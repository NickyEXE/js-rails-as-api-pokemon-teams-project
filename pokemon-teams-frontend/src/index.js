// Render methods

// Converts fetch data to cards
function handleTrainerFetchAsCards(data){
    document.querySelector("main").innerHTML = data.map(trainer => trainerToCard(trainer)).join('')
}
// iterative method called above to convert an individual trainer to a card
function trainerToCard(trainer){
    return `<div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
    <button class="add" data-trainer-id=${trainer.id}>Add Pokemon</button>
    <ul>` + trainer.pokemons.map(pokemon => pokemonToLi(pokemon)).join('') + `</ul>
</div>`
}

// Called in each card for each pokemon to return the pokemon as a list
function pokemonToLi(pokemon){
    return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>`
}

function handleCLick(e){
    switch (e.target.classList[0]){
        case "add":
            adapter.addPokemon(e.target.dataset.trainerId)
            break;
        case "release":
            adapter.destroyPokemon(e.target.dataset.pokemonId)
            break;
        default:
            break;
    }
}

// Initial execution functions: Populate the page and add an event listener.
adapter.fetchTrainerData()
document.querySelector("main").addEventListener('click', handleCLick)
