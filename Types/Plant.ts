import Type from './Type';

export default class Plant extends Type {
  private _typeName: string;
  constructor() {
    super();
    this._typeName = 'planta';
  }

  get typeName(): string {
    return this._typeName;
  }

  get strengths(): Array<string> {
    return ['terrestre', 'pedra', 'agua'];
  }

  get weaknesses(): Array<string> {
    return ['fogo', 'voador', 'gelo', 'venenoso', 'inseto'];
  }
}
