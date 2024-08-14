const core = require('@actions/core');
const convert = require('xml-js');
const fs = require('fs');

const main = async () => {
    try {
        const filePath = core.getInput('file_path', {required: true});
        console.log(`File Path Input from User: ${filePath}`);

        if (filePath === undefined || filePath === '') {
            core.setFailed('File path for pom.xml file is not valid!');

            return;
        }

        // read file
        const xmlFile = fs.readFileSync(`${filePath}`, 'utf8');
        const jsonData = JSON.parse(convert.xml2json(xmlFile, {compact: true, spaces: 2}));
        console.log('Found artifact version: ' + jsonData.project.version._text);
        core.setOutput("version", jsonData.project.version._text);


    } catch (error) {
        core.setFailed(error.message);
    }
}

// Call the main function to run the action
main();
