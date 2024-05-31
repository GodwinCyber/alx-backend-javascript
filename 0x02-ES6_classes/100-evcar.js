import Car from './10-car';

export default class Evcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color, range);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
