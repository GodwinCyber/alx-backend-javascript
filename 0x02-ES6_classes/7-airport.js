export default class Airport {
  constructor(name, code) {
    this._name = name; // Store the name in an underscore attribute
    this._code = code; // Store the code in an underscore attribute
  }

  // Getter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Override the default toString method to return the airport code
  toString() {
    return `[object ${this.code}]`;
  }
}
