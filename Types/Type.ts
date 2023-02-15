export default abstract class Type {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract get strengths(): Array<string>;

  abstract get weaknesses(): Array<string>;
}
