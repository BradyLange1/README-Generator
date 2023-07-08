const inquirer = require('inquirer')
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter project title: ',
            name: 'Title'
        },
        {
            type: 'input',
            message: 'Enter project description: ',
            name: 'Description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions: ',
            name: 'Installation'
        },
        {
            type: 'input',
            message: 'Enter usage info: ',
            name: 'Usage'
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines: ',
            name: 'Contributing'
        },
        {
            type: 'input',
            message: 'Enter test instructions: ',
            name: 'Tests'
        },
    ])
    .then((response) =>
    fs.writeFile('README.md',
`
# ${response.Title}
## Description: 
${response.Description}
## Installation: 
${response.Installation}
## Usage: 
${response.Usage}
## Contributing: 
${response.Contributing}
## Tests: 
${response.Tests}
`
,
    (err) => err ? console.error(err) : console.log('Success!')
))
