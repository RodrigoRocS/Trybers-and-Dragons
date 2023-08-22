import Race from './Race';

class Orc extends Race {
  private static _countInstance = 0;
  private _maxLife = 74;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}

export default Orc;
