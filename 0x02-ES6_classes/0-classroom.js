export default class ClassRoom {
    constructor(maxStudentsSize) {
        if (Number.isInteger(maxStudentsSize)) {
            this.__maxStudentsSize = maxStudentsSize;
        }
    }
    //getter
    get _maxStudentsSize() {
        return this.__maxStudentsSize
    }
}