// create a class called Engineer that extends Employee

// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(ghname) {
        super("Foo", 1, "test@test.com");
        this.ghname = ghname;
    }

    getGithub() {
        return en.ghname;
    }

    getRole(){
        return "Engineer";
    }

}

const en = new Engineer("GitHubUser");

en.getGithub();

module.exports = Engineer

// export employee