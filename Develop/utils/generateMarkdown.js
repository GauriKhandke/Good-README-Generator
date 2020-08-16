// function to generate markdown for README
function generateMarkdown(data) {

    let license = data.license;
    let licenseName = "";
    let badge = "";
    if(license === "None")
      licenseName = "This project has no license";
    else{
      licenseName = "This project is licensed under the "+license;
      switch(license){
        case "MIT License" : 
    
          badge = "https://img.shields.io/badge/license-MIT-green";
          break;

        case "Apache License 2.0" : 
          
          badge = "https://img.shields.io/badge/license-Apache--2.0-blue";
          break;

        case "GNU General Public License 3.0" : 
          
          badge = "https://img.shields.io/badge/license-GPL%203.0-blue";
          break;

        case "BSD 3 License" : 

          badge = "https://img.shields.io/badge/license-BSD%203-green";
          break;

        default :
          badge = "https://img.shields.io/badge/license-MIT-green";
      }
    }
    

    return `# ${data.title}
![Github License](${badge})

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
* If you have any questions about the repo, 
[open an issue](https://github.com/${data.github}/${data.title}/issues/new) 
or contact me directly at ${data.email}. 
* You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
  }
  
  module.exports = generateMarkdown; 