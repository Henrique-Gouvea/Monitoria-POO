import Type from './Type';

export default class Water extends Type {
  private _typeName: string;
  constructor() {
    super();
    this._typeName = 'agua';
  }

  get typeName(): string {
    return this._typeName;
  }

  get strengths(): Array<string> {
    return ['terrestre', 'pedra', 'fogo'];
  }

  get weaknesses(): Array<string> {
    return ['planta', 'eletrico'];
  }
}
