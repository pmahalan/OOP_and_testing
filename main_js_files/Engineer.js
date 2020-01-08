// create a class called Engineer that extends Employee

// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, ghname) {
        super(name, id, email);
        this.ghname = ghname;
    }

    getGithub() {
        return this.ghname;
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer

// export employee