import Race from './Race';

class Halfling extends Race {
  private static _countInstance = 0;
  private _maxLife = 60;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}

export default Halfling;
