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
        
        ])
        .then(answers =>{
            
        })

}
// this function create a list to add teammembers
function createTeam(){

    inquirer
        .prompt([
            
        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
           
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer    
        .prompt([
            

        ])
        .then(answers =>{
           
        })

}
// a function that create an intern
function getIntern() {

    inquirer    
        .prompt([
          

        ])
        .then(answers =>{
          
        })

}

function buildTeam() {
fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()
