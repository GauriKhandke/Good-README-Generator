// function to generate markdown for README
function generateMarkdown(data) {

    let license = data.license;
    let licenseName = "";
    if(license === "None")
      licenseName = "This project has no license";
    else
      licenseName = "This project is licensed under the "+license;
    

    return `# ${data.title}
![Github License](https://img.shields.io/badge/license-MIT-green)

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
<pre><code>${data.installation}</code></pre>

# Usage
${data.usage}

# License
${licenseName}.

# Contributing
${data.contributing}

# Tests
To run tests, run the following command :
<pre><code>${data.test}</code></pre>

# Questions
* If you have any questions about the repo, [open an issue](https://github.com/${data.github}/${data.title}/issues/new) or contact me directly at ${data.email}. 
* You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
  }
  
  module.exports = generateMarkdown; 