import Pokemon from "./Pokemon.ts";

const Testing = () => {
  const pokemonURL1 = "https://pokeapi.co/api/v2/pokemon/1";
  const pokemonURL2 = "https://pokeapi.co/api/v2/pokemon/2";

  const test = async () => {
    const pokemon1 = await Pokemon.create(pokemonURL1);
    const pokemon2 = await Pokemon.create(pokemonURL2);
    
    console.log(pokemon1)
    console.log(pokemon2)
  }
  
  test()
};

export default Testing;