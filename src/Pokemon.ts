const capitalizeName = (name: string) => name[0].toUpperCase() + name.slice(1, name.length);

class Pokemon {
  public url: string;
  public name: string;
  public types: Type[];
  public baseExperience: number;
  public moves: Move[];
  public height: number;
  public weight: number;
  public sprites: { front_default: string; back_default: string };
  public hp: number;
  public maxHp: number;
  public attack: number;
  public defense: number;
  public specialAttack: number;
  public specialDefense: number;
  public speed: number;

  static async create(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    const name = capitalizeName(data.name);
    const types = data.types.map(async (type) => await Type.create(type.type.url));
    const baseExperience = data.base_experience;
    const moves = await Promise.all(data.moves.slice(0, 4).map(async (move) => await Move.create(move.move.url)));
    const height = data.height;
    const weight = data.weight;
    const sprites = data.sprites;
    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const specialAttack = data.stats[3].base_stat;
    const specialDefense = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;

    return new Pokemon(url, name, types, baseExperience, moves, height, weight, sprites, hp, attack, defense, specialAttack, specialDefense, speed);
  }
  
  constructor(url: string, name: string, types: Type[], baseExperience: number, moves: Move[],
              height: number, weight: number, sprites: { front_default: string; back_default: string }, 
              hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, 
              speed: number) {
    this.url = url;
    this.name = name;
    this.baseExperience = baseExperience;
    this.moves = moves;
    this.types = types;
    this.height = height;
    this.weight = weight;
    this.sprites = sprites;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.specialDefense = specialDefense;
    this.speed = speed;
  }

  public attackPokemon(move: Move, pokemon: Pokemon) {
    pokemon.loseHp(move.power);
  }

  public loseHp(hp: number) {
    this.hp = Math.max(0, this.hp - hp);
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
  public category: string;
  public type: Type;
  public accuracy: number;
  public power: number;
  public pp: number;
  public priority: number;
  public critRate: number;

  static async create(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    // const url = url;
    const name = data.name;
    const descriptionLong = data.effect_entries[0].effect;
    const descriptionShort = data.effect_entries[0].shortEffect;
    const category = data.meta.category.name;  // Moet nog een class van gemaakt worden
    const type = await Type.create(data.type.url);
    const accuracy = data.accuracy;
    const power = data.power;
    const pp = data.pp;
    const priority = data.priority
    const critRate = data.meta.crit_rate;

    return new Move(url, name, descriptionLong, descriptionShort, category, type, accuracy, power, pp, priority, critRate);
  }
  
  constructor(
    url: string,
    name: string,
    descriptionLong: string,
    descriptionShort: string,
    category: string,
    type: Type,
    accuracy: number,
    power: number,
    pp: number,
    priority: number,
    critRate: number
  ) {
    this.url = url;
    this.name = name;
    this.descriptionLong = descriptionLong;
    this.descriptionShort = descriptionShort;
    this.category = category;
    this.type = type;
    this.accuracy = accuracy;
    this.power = power;
    this.pp = pp;
    this.priority = priority;
    this.critRate = critRate;
  }
}

class Type {
  public name: string;
  public damageRelations: {
    doubleDamageFrom: { name: string; url: string }[];
    doubleDamageTo: { name: string; url: string }[];
    halfDamageFrom: { name: string; url: string }[];
    halfDamageTo: { name: string; url: string }[];
    noDamageFrom: { name: string; url: string }[];
    noDamageTo: { name: string; url: string }[];
  };

  static async create(url: string) {
    const response = await fetch(url);
    const data = await response.json();
      const name = data.name;
      const damageRelations = {
        doubleDamageFrom: data.damage_relations.doubleDamageFrom,
        doubleDamageTo: data.damage_relations.doubleDamageTo,
        halfDamageFrom: data.damage_relations.halfDamageFrom,
        halfDamageTo: data.damage_relations.halfDamageToom,
        noDamageFrom: data.damage_relations.noDamageFrom,
        noDamageTo: data.damage_relations.noDamageTo,
      };

      return new Type(name, damageRelations);
  }

  constructor(
    name: string,
    damageRelations: {
      doubleDamageFrom: { name: string; url: string }[];
      doubleDamageTo: { name: string; url: string }[];
      halfDamageFrom: { name: string; url: string }[];
      halfDamageTo: { name: string; url: string }[];
      noDamageFrom: { name: string; url: string }[];
      noDamageTo: { name: string; url: string }[];
    }
  ) {
    this.name = name;
    this.damageRelations = damageRelations;
  }
}

export default Pokemon;
