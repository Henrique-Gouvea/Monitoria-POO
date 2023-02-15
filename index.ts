import Pokemon from './Pokemon';
import Fire from './Types/Fire';
import Water from './Types/Water';

const charmander = new Pokemon(new Fire(), 'Charmander');
const sea = new Pokemon(new Water(), 'Sea');

console.log(charmander.name + ' defesa ' + charmander.defense);
console.log(sea.name + ' attack ' + sea.strength);

sea.attack(charmander);

console.log(charmander.name, charmander.lifePoints);
console.log(sea.name, sea.lifePoints);
