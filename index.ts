import Pokemon from './Pokemon';
import Fire from './Types/Fire';
import Water from './Types/Water';

const charmander = new Pokemon(new Fire(), 'Charmander');
const sea = new Pokemon(new Water(), 'Sea');

console.log(
  charmander.name +
    ' defesa ' +
    charmander.defense +
    ' attack ' +
    charmander.strength
);
console.log(sea.name + ' defesa ' + sea.defense + ' attack ' + sea.strength);

while (sea.lifePoints > 0 && charmander.lifePoints > 0) {
  sea.attack(charmander);
  charmander.attack(sea);
}

sea.lifePoints == -1
  ? console.log(charmander.name + ' venceu')
  : console.log(sea.name + ' venceu');

console.log(charmander.name, charmander.lifePoints);
console.log(sea.name, sea.lifePoints);
