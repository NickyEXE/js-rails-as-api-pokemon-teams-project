const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


const adapter = {
    fetchTrainerData: () => fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(json => handleTrainerFetchAsCards(json)),

    destroyPokemon: (pokemon_id) => fetch(POKEMONS_URL + `/${pokemon_id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => handleTrainerFetchAsCards(data)),

    addPokemon: (trainer_id) => fetch(POKEMONS_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({id: trainer_id}),
    })
    .then(res => res.json())
    .then(data => handleTrainerFetchAsCards(data))
}
