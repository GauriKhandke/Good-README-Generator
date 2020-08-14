// function to generate markdown for README
function generateMarkdown(data) {

    let license = data.license;
    let licenseName = "";
    if(license === "None")
      licenseName = "This project has no license";
    else
      licenseName = "This project is licensed under the "+license;
    

    return `# ${data.title}

    ![Github License](https://shields.io/badge/license-MIT-blue.svg)

    # Description
    ${data.description}

    # Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    # Installation

    To install necessary dependencies, run the following command : 
    ``
    ${data.installation}
    ``
    # Usage
    ${data.usage}

    # License
    ${licenseName}.

    # Contributing
    ${data.contributing}

    # Tests
    To run tests, run the following command : 
    ``
    ${data.test}
    ``
    # Questions
    If you have any queations about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github-username}](https://github.com/${data.github-username}).

  `;
  }
  
  module.exports = generateMarkdown;
  