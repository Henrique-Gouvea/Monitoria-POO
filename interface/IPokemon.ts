import Type from '../Types/Type';

export default interface IPokemon {
  lifePoints: number;
  strength: number;
  defense: number;
  type: Type;

  attack(enemy: IPokemon): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}
