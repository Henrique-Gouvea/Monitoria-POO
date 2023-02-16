export default abstract class Type {
  constructor() {}

  abstract get typeName(): string;

  abstract get strengths(): Array<string>;

  abstract get weaknesses(): Array<string>;

  public get talk(): void {
    return console.log('Eu sou um pokemon');
  }
}
