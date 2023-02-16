import IPokemon from './interface/IPokemon';
import Type from './Type/Type';
import utils from './utils';

export default class Pokemon implements IPokemon {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _type: Type;

  constructor(public type: Type, private _name: string) {
    this._lifePoints = 100;
    this._strength = utils.generateAleatoryNumber1to10() + 10;
    this._defense = utils.generateAleatoryNumber1to10();
    this._type = type;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get name(): string {
    return this._name;
  }

  attack(enemy: IPokemon): void {
    const effective = utils.verifyTypeDamage(
      this._type.typeName,
      enemy.type.weaknesses
    );
    effective === 3 ? console.log('Ataque super efetivo') : 0;
    enemy.receiveDamage(this._strength + effective);
  }

  levelUp(): void {
    this._lifePoints += 2;
    this._strength += 2;
    this._defense += 2;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    this._lifePoints = utils.damageLogic(damage, this._lifePoints);
    return this.lifePoints;
  }
}
