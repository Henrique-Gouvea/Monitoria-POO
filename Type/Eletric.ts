import Type from './Type';

export default class Eletric extends Type {
  private _typeName: string;
  constructor() {
    super();
    this._typeName = 'eletrico';
  }

  get typeName(): string {
    return this._typeName;
  }

  get strengths(): Array<string> {
    return ['voador', 'agua'];
  }

  get weaknesses(): Array<string> {
    return ['terrestre'];
  }
}
