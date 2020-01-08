// create a class called Intern that extends Employee

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'

const Employee = require("./Employee");

// create a class called intern that extends Employee

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

// export intern
module.exports = Intern