import Car from "./10-car.js";

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        if (typeof range !== 'string') throw new TypeError('range must be a string');
        this._range = range;
    }
    cloneCar() {
        return new Car();
    }
}