
// It is recommended that you follow this workflow:

// 1. Run tests
// 2. Create or update classes to pass a single test case
// 3. Repeat

// 🎗 Remember, you can run the tests at any time with `npm run test`

// export the employee

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // handy-dandy constructor which defines the properties of the object "employee"

    getName(){
        console.log(`This employee's name is ${this.name}.`);
    }

    getId(){
        console.log(`Their ID is: ${this.id}`);
    }

    getEmail(){
        console.log(`Their email address is: ${this.email}`);
    }

    getRole(){
        console.log(`${Employee}`);
    }
}

const alice = new Employee("Alice", 1, "alice@gmail.com");

alice.getName();
alice.getId();
alice.getEmail();
alice.getRole();


module.exports = Employee;