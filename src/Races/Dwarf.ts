import Race from './Race';

class Dwarf extends Race {
  private static _countInstance = 0;
  private _maxLife = 80;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}

export default Dwarf;
