import Pokemon from './Pokemon';
import Fire from './Type/Fire';
import Water from './Type/Water';

const fogo = new Fire();
const charmander = new Pokemon(fogo, 'charmander');

const water = new Water();
const sea = new Pokemon(water, 'sea');

// console.log(charmander.lifePoints);
// console.log(charmander.defense);
// console.log(sea.strength);

// sea.attack(charmander);

// console.log(charmander.lifePoints);

// console.log(charmander);
// charmander.levelUp();
// charmander.levelUp();
// charmander.levelUp();
// charmander.levelUp();
// charmander.levelUp();
// console.log(charmander);

// while (sea.lifePoints > 0 && charmander.lifePoints > 0) {
//   sea.attack(charmander);
//   charmander.attack(sea);
// }

// sea.lifePoints == -1
//   ? console.log(charmander.name + ' venceu')
//   : console.log(sea.name + ' venceu');

const teste = new Water();
const teste1 = new Pokemon(teste, 'teste');

const teste2 = new Water();
const teste3 = new Pokemon(teste2, 'teste');

console.log(Water._inst);
