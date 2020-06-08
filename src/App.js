import React, { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(0)
  const [pokemons, setPokemons] = useState([
    { pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG108.png', point: 0 },
    { pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG118.png', point: 0 },
    { pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG128.png', point: 0 },
    { pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG138.png', point: 0 },
    { pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG158.png', point: 0 }
  ])

  const toRandomPokemon = () => {
    const numberOfPokemons = pokemons.length
    const randomIndex = Math.floor(Math.random() * numberOfPokemons)
    setSelected(randomIndex)
  }

  const vote = () => {
    const newPokemons = pokemons.map((pokemon, index) =>
      index === selected
        ? {
          ...pokemon,
          point: pokemon.point + 1
        } : pokemon
    )

    setPokemons(newPokemons)
  }

  const sortedPokemons = [...pokemons]
  sortedPokemons.sort((a, b) => b.point - a.point)

  return (
    <>
      <h1>Pokemon of the day</h1>
      <div>
        <img src={pokemons[selected].pokeImg} alt="pokemon" height={200} />
        <div>has {pokemons[selected].point} votes</div>
      </div>
      <button onClick={vote}>Vote</button>
      <button onClick={toRandomPokemon}>Next pokemon</button>
      <h1>Pokemon with most votes</h1>
      <div>
        <img src={sortedPokemons[0].pokeImg} alt="pokemon" height={200} />
        <div>has {sortedPokemons[0].point} votes</div>
      </div>
    </>
  )
}

export default App;