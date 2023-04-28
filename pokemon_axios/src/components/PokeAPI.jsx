import { useState, useEffect } from 'react';
import axios from 'axios';

function Poke() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error(error);
      }
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