// require Employee class
const Employee = require("./Employee");

// create a class called intern that extends Employee

class Intern extends Employee{

    constructor(school) {
        super()
        this.school = school;
    }
}

// export intern
module.exports = Intern


// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'