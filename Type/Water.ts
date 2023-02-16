import Type from './Type';

export default class Water extends Type {
  private _typeName: string;
  static _inst = 0;
  constructor() {
    super();
    this._typeName = 'agua';
    Water.inst();
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

  public static inst(): number {
    Water._inst += 1;
    return Water._inst;
  }
}
