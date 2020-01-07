// require Employee class

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(ghname) {
        super()
        this.ghname = ghname;
    }

}

module.exports = Engineer

// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

// create a class called Engineer that extends Employee

// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'

// export employee

// const Shape = require("./shape");

// class Rectangle extends Shape {
//   constructor(sideA, sideB) {
//     const area = sideA * sideB;
//     const perimeter = sideA * 2 + sideB * 2;

//     super(area, perimeter);
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
// }

// const rectangle = new Rectangle(12, 9);
// rectangle.printInfo();
