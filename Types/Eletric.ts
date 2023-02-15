import Type from './Type';

export default class Eletric extends Type {
  constructor(name: string) {
    super(name);
  }

  get strengths(): Array<string> {
    return ['voador', 'agua'];
  }

  get weaknesses(): Array<string> {
    return ['terrestre'];
  }
}
