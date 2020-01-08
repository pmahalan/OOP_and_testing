// create a class called Intern that extends Employee

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'

const Employee = require("./Employee");

// create a class called intern that extends Employee

class Intern extends Employee{

    constructor(school) {
        super("Foo", 1, "test@test.com");
        this.school = school;
    }

    getSchool() {
        return i.school;
    }
    getRole(){
        return "Intern";
    }
}

const i = new Intern("UCLA");

i.getSchool();

// export intern
module.exports = Intern