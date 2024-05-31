import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Assign sqft to the parent class Building
    this._sqft = sqft;
    this._floors = floors;
  }

  // Getter for floors
  get sqft() {
    return this._sqft;
  }

  // Setter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
