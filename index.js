const fs = require('fs');
const inquirer = require('inquirer');
const Shape = require('./lib/shapes');

async function run() {

  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (value) => /^[a-zA-Z0-9]{1,3}$/.test(value) || 'Please enter 1 to 3 characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex value):',
      default: 'black',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex value):',
      default: 'white',
    },
  ]);

  const { text, textColor, shape, shapeColor } = userInput;

  const svg = Shape.generateSVG(textColor, shape, text, shapeColor);

  fs.writeFile('./examples/logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

run();