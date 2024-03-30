#! /usr/bin/env node
import inquirer from "inquirer";
const question = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your username:',
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password:',
    },
];
inquirer.prompt(question)
    .then((answers) => {
    const username = answers.username;
    const password = answers.password;
    // Replace with your actual authentication logic
    if (username === 'aqsa' && password === '1234') {
        console.log('login successfull');
        // Perform actions for a successful login
    }
    else {
        console.log('Invalid username or password.');
    }
});
