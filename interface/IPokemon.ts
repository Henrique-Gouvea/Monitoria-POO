import Type from '../Type/Type';

export default interface IPokemon {
  name: string;
  lifePoints: number;
  strength: number;
  defense: number;
  type: Type;

  attack(enemy: IPokemon): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}
