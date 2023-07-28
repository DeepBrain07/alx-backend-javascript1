import Currency from "./3-currency.js";

export default class Pricing{
    constructor(amount, currency) {
        if (!Number.isInteger(amount)) throw new TypeError('amount must be a number');
        if (!(currency instanceof Currency)) throw new TypeError('currency must be a Currency');
        this._amount = amount;
        this._currency = currency;
    }
    //getters
    get amount() {
        return this._amount;
    }
    get currency() {
        return this._currency;
    }
    //setters
    set amount(amount) {
        if (!Number.isInteger(amount)) throw new TypeError('amount must be a number');
        this._amount = amount;
    }
    set currency(currency) {
        if (!(currency instanceof Currency)) throw new TypeError('currency must be a Currency');
        this._currency = currency;
    }
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`
    }
}