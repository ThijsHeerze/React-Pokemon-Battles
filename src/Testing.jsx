import Pokemon from "./Pokemon.ts";

const Testing = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";

  Pokemon.create(url)
    .then((pokemon) => {
      console.log(pokemon.hp);
      pokemon.attackPokemon(pokemon.moves[0], pokemon);
      console.log(pokemon.hp);
    });
};

export default Testing;