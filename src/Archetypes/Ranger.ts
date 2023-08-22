import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _countInstance = 0;
  private _Type : EnergyType;
  constructor(name: string) {
    super(name);
    Ranger._countInstance += 1;
    this._Type = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._countInstance;
  }

  get energyType(): EnergyType {
    return this._Type;
  }
}

export default Ranger;
