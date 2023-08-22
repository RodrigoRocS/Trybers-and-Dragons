import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _countInstance = 0;
  private _Type : EnergyType;
  constructor(name: string) {
    super(name);
    Necromancer._countInstance += 1;
    this._Type = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._countInstance;
  }

  get energyType(): EnergyType {
    return this._Type;
  }
}

export default Necromancer;
