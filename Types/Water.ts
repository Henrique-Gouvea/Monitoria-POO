import Type from './Type';

export default class Water extends Type {
  constructor(name: string) {
    super(name);
  }

  get strengths(): Array<string> {
    return ['terrestre', 'pedra', 'fogo'];
  }

  get weaknesses(): Array<string> {
    return ['planta', 'eletrico'];
  }
}
