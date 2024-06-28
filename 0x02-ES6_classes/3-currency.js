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

  set code() {

  }

  get name() {
    return this._name
  }
}
