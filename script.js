//complete this code
class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        if (age > 0) {
            this._age = age;
        } else {
            console.error("Age must be a positive number");
        }
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

