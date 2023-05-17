const capitalizeName = (name: string) => name[0].toUpperCase() + name.slice(1, name.length);

class Pokemon {
  public url: string;
  public name: string;
  public types: Type[];
  public baseExperience: number;
  public moves: { name: string; url: string }[];
  public height: number;
  public weight: number;
  public sprites: string[];
  public hp: number;
  public attack: number;
  public specialAttack: number;
  public defense: number;
  public specialDefense: number;
  public speed: number;

  // constructor(url: string, species: string, baseExperience: number, moves: { name: string, url: string }[],
  //             types: string[], height: number, weight: number, sprites: string[], hp: number, attack: number,
  //             specialAttack: number, defense: number, specialDefense: number, speed: number) {
  constructor(url: string) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        this.name = capitalizeName(data.name);
        this.types = data.types.map((pokemonTypes) => pokemonTypes.type.name);
      });

    // this.url = url;
    // this.species = species;
    // this.baseExperience = baseExperience;
    // this.moves = moves;
    // this.types = types;
    // this.height = height;
    // this.weight = weight;
    // this.sprites = sprites;
    // this.hp = hp;
    // this.attack = attack;
    // this.specialAttack = specialAttack;
    // this.defense = defense;
    // this.specialDefense = specialDefense;
    // this.speed = speed;
  }

  public attackPokemon(move: Move, pokemon: Pokemon) {
    pokemon.loseHp(move.power);
  }

  public loseHp(hp: number) {
    Math.max(0, this.hp -= hp);
  }

  public getHealth() {

  }

  public setHealth(hp: number) {
    this.hp = hp;
  }

  private setMoves(urls: string[]) {}

  public test() {
    console.log("asdAHDIUAHDUIASID");
  }
}

class Move {
  public url: string;
  public name: string;
  public descriptionLong: string;
  public descriptionShort: string;
  public accuracy: number;
  public power: number;
  public pp: number;
  public priority: number;
  public totalTurns: number;
  public turn: number;

  constructor(
    url: string,
    name: string,
    descriptionLong: string,
    descriptionShort: string,
    accuracy: number,
    power: number,
    pp: number,
    priority: number,
    totalTurns: number,
    turn: number
  ) {
    this.url = url;
    this.name = name;
    this.descriptionLong = descriptionLong;
    this.descriptionShort = descriptionShort;
    this.accuracy = accuracy;
    this.power = power;
    this.pp = pp;
    this.priority = priority;
    this.totalTurns = totalTurns;
    this.turn = turn;
  }
}

class Type {
  public name: string;
  public damageRelations: {
    double_damage_from: { name: string; url: string }[],
    double_damage_to: { name: string; url: string }[],
    half_damage_from: { name: string; url: string }[],
    half_damage_to: { name: string; url: string }[],
    no_damage_from: { name: string; url: string }[],
    no_damage_to: { name: string; url: string }[],
  };
}

export default Pokemon;
