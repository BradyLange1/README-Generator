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
        {
            type: 'list',
            message: 'What license would you like?',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Pulblic License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            name: 'License'
        },
        {
            type: 'input',
            message: 'Enter your GitHub link: ',
            name: 'Github'
        },
        {
            type: 'input',
            message: 'Enter your Email: ',
            name: 'Email'
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
## License: 
${response.License}
`
,
    (err) => err ? console.error(err) : console.log('Success!')
))
