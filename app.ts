const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'num1',
            message: 'Enter a Number: '
        },
        {
            name: 'operator',
            message: 'Enter operator for Math operations',
        },
        {
            name: 'num2',
            message: 'Enter a Number: '
        }
    ])
    .then((answers: any) => {
        eval('${answers.num1} ${answers.operator} ${answers.num2}')
    });