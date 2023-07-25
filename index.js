const fs = require('fs');
const inquirer = require('inquirer');
//https://nodejs.dev/en/learn/accept-input-from-the-command-line-in-nodejs/

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

        let shapeText = "";
        let logoShape = LogoAnswers.shape;
        
        if(logoShape === "circle"){
            shapeText = `<circle cx="150" cy="100" r="50" stroke="${LogoAnswers.shapeColor}" stroke-width="2" fill="none" />`;
        } else if (logoShape ==="square"){
            shapeText = `<rect x="100" y="50" width="100" height="100" style="fill:none;stroke-width:2;stroke:${LogoAnswers.shapeColor}" />`;
        } else{
            shapeText = `<polygon points="150,50 200,150 100,150" style="fill:none;stroke:${LogoAnswers.shapeColor};stroke-width:2" />`;
        }

        let svgLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeText}
        <text x="150" y="100" text-anchor="middle" style="fill:${LogoAnswers.color};font-size:22">${LogoAnswers.text}</text>
        </svg>`
        fs.writeFileSync("./logo.svg",svgLogo);
    });

    console.log("Generated logo.svg");
}

generateLogo();