import Type from './Type';

export default class Plant extends Type {
  constructor(name: string) {
    super(name);
  }

  get strengths(): Array<string> {
    return ['terrestre', 'pedra', 'agua'];
  }

  get weaknesses(): Array<string> {
    return ['fogo', 'voador', 'gelo', 'venenoso', 'inseto'];
  }
}
