
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
            return this.name;
        }

        getId(){
            return this.id;
        }

        getEmail(){
            return this.email;
        }

        getRole(){
            return "Employee";
        }
}

module.exports = Employee;