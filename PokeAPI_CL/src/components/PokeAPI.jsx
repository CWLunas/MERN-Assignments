import { useState, useEffect } from 'react';

function Poke() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
      const data = await response.json();
      setPokemonList(data.results);
    };
    fetchPokemonList();
  }, []);

  return (
    <div>
      <h3>Complete Pokemon List</h3>
      {pokemonList.length > 0 ? (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              {pokemon.name}
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Poke;