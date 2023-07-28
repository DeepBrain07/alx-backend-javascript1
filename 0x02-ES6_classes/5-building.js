export default class Building {
    constructor(sqft) {
        if (new.target !== Building && this.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
        if (!Number.isInteger(sqft)) throw new TypeError('sqft must be an Integer');
        this._sqft = sqft;
    }
    //getter
    get sqft() {
        return this._sqft;
    }
}