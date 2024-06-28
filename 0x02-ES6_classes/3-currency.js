export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency(name, code) {
    return `${this._name} (${this._code})`
  }

  get code() {
    return this._code
  }

  set code(val) {
    if (val !== 'string'){
      throw new TypeError('Code must be string')
    }
    this._code = val
  }

  get name() {
    return this._name
  }

  set name(val) {
    if (val !== 'string'){
      throw new TypeError('Name must be string')
    }
    this._name = val
  }

}
