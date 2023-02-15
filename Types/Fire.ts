import Type from './Type';

export default class Fire extends Type {
  constructor(name: string) {
    super(name);
  }

  get strengths(): Array<string> {
    return ['inseto', 'aco', 'planta', 'gelo'];
  }

  get weaknesses(): Array<string> {
    return ['agua', 'terrestre', 'pedra'];
  }
}
