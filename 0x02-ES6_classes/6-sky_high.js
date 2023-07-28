import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors){
        super(sqft);
        if (!Number.isInteger(sqft)) throw new TypeError('sqft must be an Integer');
        if (!Number.isInteger(floors)) throw new TypeError('floors must be an Integer');
        this._floors = floors;
    }
    //getters
    get sqft() {
        return this._sqft;
    }
    get floors() {
        return this._floors;
    }
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`
    }
}