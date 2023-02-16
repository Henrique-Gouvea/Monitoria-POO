import Type from './Type';

export default class Fire extends Type {
  private _typeName: string;
  constructor() {
    super();
    this._typeName = 'fogo';
  }

  get typeName(): string {
    return this._typeName;
  }

  get strengths(): Array<string> {
    return ['inseto', 'aco', 'planta', 'gelo'];
  }

  get weaknesses(): Array<string> {
    return ['agua', 'terrestre', 'pedra'];
  }

  public talk(): void {
    return console.log('Eu sou um pokemon do tipo ' + this._typeName);
  }
}
