import Pokemon from "./Pokemon.ts";

const Testing = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // const pokemon = new Pokemon(url);
  });
};

export default Testing;