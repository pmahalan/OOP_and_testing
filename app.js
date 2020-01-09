// const Employee = require("./lib/Employee");
const Engineer = require("./main_js_files/Engineer");
const Intern = require("./main_js_files/Intern");
const Manager = require("./main_js_files/Manager");

const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");

const engineerCard = require("./render_cards/engineerCard");
const internCard = require("./render_cards/internCard");
const managerCard = require("./render_cards/managerCard");

const mainRender = require("./render_cards/mainRender");


const outputPath = path.resolve(__dirname, "output", "team.html");

const teamMember = [];

function mainApp() {
    // create a manager
    inquirer    
        .prompt([
            {
            type: "input",
            message: "What is your manager's name?",
            name: "managerName"
            },
            {type: "input",
            message: "What is your manager's id?",
            name: "managerId"

            },
            {type: "input",
            message: "What is your manager's email?",
            name: "managerEmail"

            },
            {type: "input",
            message: "What is your manager's office number?",
            name: "managerNumber"

            },
        
        ])
        .then(answers =>{
            const {managerName, managerId, managerEmail, managerNumber} = answers;
            const managerObj = new Manager(managerName, managerId, managerEmail, managerNumber);
            const managerCardhtml = managerCard(managerObj);
            teamMember.push(managerCardhtml);

            createTeam();
            
        })

        }

        // this function create a list to add teammembers
function createTeam(){

    inquirer
        .prompt([
            {
                type: "list",
                message: "What type of team member would you like to add?",
                choices: [
                    "engineer",
                    "intern",
                    "build team"
                ],
                name: "teamMembers",
            }
        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
            switch(answers.teamMembers)

            {
                case "engineer": getEngineer()
                break;
                case "intern": getIntern()
                break;
                case "build team": buildTeam();
            }
                
           
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is the engineers's name?",
                name: "enName"
            },
            {
                type: "input",
                message: "What is the engineer's ID?",
                name: "enId"
            },
            {
                type: "input",
                message: "What is the engineer's email address?",
                name: "enEmail"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "enGh"
            }

        ])
        .then(answers =>{
            const {enName, enId, enEmail, enGh} = answers;
            const EngineerObj = new Engineer(enName, enId, enEmail, enGh);
            const engineerCardhtml = engineerCard(EngineerObj);
            teamMember.push(engineerCardhtml)

            createTeam();
           
        })
    }

// a function that create an intern
function getIntern() {

    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "iName"
            },
            {
                type: "input",
                message: "What is the intern's ID?",
                name: "iId"
            },
            {
                type: "input",
                message: "What is the intern's email address?",
                name: "iEmail"
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "iSchool"
            }
          

        ])
        .then(answers =>{
            const {iName, iId, iEmail, iSchool} = answers;
            const InternObj = new Intern(iName, iId, iEmail, iSchool);
            const internCardhtml = internCard(InternObj);
            teamMember.push(internCardhtml)

            createTeam();
          
        })

}

function buildTeam() {
fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()
