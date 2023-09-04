const fs = require('fs');
const inquirer = require('inquirer');
const { SVGCreator } = require('./shapes');

const LogoQuestions = [
    {
        type: 'input',
        name: 'text',
        message: "Enter up to 3 characters for your logo:",
    },
    {
        type: 'input',
        name: 'color',
        message: "What color would you like for the logo?",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color would you like your shape to be?",
    },
];

async function generateLogo() {
    await inquirer.prompt(LogoQuestions).then(LogoAnswers => {
        const shapeObject = SVGCreator.createSVG(LogoAnswers.shape, LogoAnswers);
        fs.writeFileSync('./logo.svg', shapeObject.getSVG());
    });

    console.log('Generated logo.svg');
}

generateLogo();