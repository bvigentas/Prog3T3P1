class Employee {

    constructor(id, name, salary, age) {
        this._id = id;
        this._name = name;
        this._salary  = salary;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }

    get age() {
        return this._age;
    }

    get id() {
        return this._id;
    }

    set name(value) {
        this._name = value;
    }

    set salary(value) {
        this._salary = value;
    }

    set age(value) {
        this._age = value;
    }

    set id(value) {
        this._id = value;
    }
}