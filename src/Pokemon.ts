const capitalizeName = (name: string) => name[0].toUpperCase() + name.slice(1, name.length);

class Pokemon {
  public url: string;
  public name: string;
  public types: Type[];
  public baseExperience: number;
  public moves: Move[];
  public height: number;
  public weight: number;
  public sprites: { front_default: string, back_default: string };
  public hp: number;
  public maxHp: number;
  public attack: number;
  public defense: number;
  public specialAttack: number;
  public specialDefense: number;
  public speed: number;

  // constructor(url: string, species: string, baseExperience: number, moves: { name: string, url: string }[],
  //             types: string[], height: number, weight: number, sprites: string[], hp: number, attack: number,
  //             specialAttack: number, defense: number, specialDefense: number, speed: number) {
  constructor(url: string) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        this.url = data.url;
        this.name = capitalizeName(data.name);
        this.types = data.types.map((type) => new Type(type.type.url));
        this.baseExperience = data.baseExperience;
        this.moves = data.moves.slice(0, 4).map((move) => new Move(move.move.url));
        this.height = data.height;
        this.weight = data.weight;
        this.sprites = data.sprites;
        this.hp = data.stats[0].base_stat;
        this.maxHp = data.stats[0].base_stat;
        this.attack = data.stats[1].base_stat;
        this.defense = data.stats[2].base_stat;
        this.specialAttack = data.stats[3].base_stat;
        this.specialDefense = data.stats[4].base_stat;
        this.speed = data.stats[5].base_stat;
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

  public getHp() {
    return this.hp;
  }

  public setHp(hp: number) {
    this.hp = hp;
  }

  public getMaxHp() {
    return this.maxHp;
  }

  public test() {
    console.log("asdAHDIUAHDUIASID");
  }
}

class Move {
  public url: string;
  public name: string;
  public descriptionLong: string;
  public descriptionShort: string;
  public catergory: string;
  public type: Type;
  public accuracy: number;
  public power: number;
  public pp: number;
  public priority: number;
  public critRate: number;

  constructor(
    url: string,
    // name: string,
    // descriptionLong: string,
    // descriptionShort: string,
    // accuracy: number,
    // power: number,
    // pp: number,
    // priority: number,
    // totalTurns: number,
    // turn: number
  ) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        this.url = url;
        this.name = data.name;
        this.descriptionLong = data.effect_entries[0].effect;
        this.descriptionShort = data.effect_entries[0].shortEffect;
        this.catergory = data.meta.catergory.name;  // Moet nog veranderd worden
        this.type = new Type(data.type.url)
        this.accuracy = data.accuracy;
        this.power = data.power;
        this.pp = data.pp;
        this.priority = data.priority
        this.critRate = data.meta.crit_rate;
      });
    
    // this.url = url;
    // this.name = name;
    // this.descriptionLong = descriptionLong;
    // this.descriptionShort = descriptionShort;
    // this.accuracy = accuracy;
    // this.power = power;
    // this.pp = pp;
    // this.priority = priority;
    // this.totalTurns = totalTurns;
    // this.turn = turn;
  }
}

class Type {
  public name: string;
  public damageRelations: {
    doubleDamageFrom: { name: string; url: string }[],
    doubleDamageTo: { name: string; url: string }[],
    halfDamageFrom: { name: string; url: string }[],
    halfDamageTo: { name: string; url: string }[],
    noDamageFrom: { name: string; url: string }[],
    noDamageTo: { name: string; url: string }[],
  };

  constructor(url: string) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        this.name = data.name;
        this.damageRelations = {
          doubleDamageFrom: data.damag_relations.doubleDamageFrom,
          doubleDamageTo: data.damag_relations.doubleDamageTo,
          halfDamageFrom: data.damag_relations.halfDamageFrom,
          halfDamageTo: data.damag_relations.halfDamageToom,
          noDamageFrom: data.damag_relations.noDamageFrom,
          noDamageTo: data.damag_relations.noDamageTo
        }
      });
  }
}

export default Pokemon;
