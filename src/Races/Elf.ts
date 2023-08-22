import Race from './Race';

class Elf extends Race {
  private static _countInstance = 0;
  private _maxLife = 99;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}

export default Elf;
