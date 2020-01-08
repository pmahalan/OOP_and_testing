
// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getOfficeNumber

//   * getRole() // Overridden to return 'Manager'

const Employee = require("./Employee");

// create a class called manager that extends Employee

class Manager extends Employee{
    constructor(officeNumber) {
        super("Foo", 1, "test@test.com");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return m.officeNumber
    };

    getRole(){
        return "Manager";
    }
}

const m = new Manager(100);

m.getOfficeNumber();

// export manager
module.exports = Manager


// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getOfficeNumber

//   * getRole() // Overridden to return 'Manager'

//+++++++++++++++++++++++++

// const Employee = require(".Employee");

// class Manager extends Employee{
//     constructor (name, id, email, officeNumber){
//         //const title = "manager";
//         super(name, id, email);
//         this.officeNumber = officeNumber;
//     }
//     getOfficeNumber(){
//         return this.officeNumber;
//     }
//     getRole(){
//         return "Manager";
//     }
// }

// module.exports = Manager;