"use strict";
const inquirer = require('inquirer');
console.log("CLI Calculator")
inquirer
    .prompt([
        {
            name: 'num1',
            message: 'Enter a Number: '
        },
        {
            name: 'operator',
            message: 'Enter operator for Basic Math operations',
        },
        {
            name: 'num2',
            message: 'Enter a Number: '
        }
    ])
    .then((answers) => {
        console.log("Result: ", eval(answers.num1 + answers.operator + answers.num2));
    });