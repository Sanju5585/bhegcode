const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, '/translated-files/base_en.json');
var files = fs.readdirSync(pathToFile);

const pathToDestination = path.join(__dirname, '../i18n-assets-v2');
if (!fs.existsSync(pathToDestination)) {
  fs.mkdirSync(pathToDestination);
}

for (let file of files) {
  const pathToLangFile = path.join(pathToFile, file);
  var langFiles = fs.readdirSync(pathToLangFile);
  for (let jFile of langFiles) {
    const jsonPath = path.join(pathToLangFile, jFile);
    // console.log(jsonPath);
    console.log(`Reading file - ${jsonPath}....`);
    let fileContent = JSON.parse(fs.readFileSync(jsonPath));
    for (var attributename in fileContent) {
      if (attributename.indexOf('.json') > -1) {
        // console.log(attributename);
        const langName = file.split('-')[0];
        const finalPathName = pathToDestination + '/' + langName;
        console.log(
          `Writing to file - ${finalPathName + '/' + attributename}....`
        );
        let resultJson = fileContent[attributename];
        if (!fs.existsSync(finalPathName)) {
          fs.mkdirSync(finalPathName);
        }
        fs.writeFileSync(
          finalPathName + '/' + attributename,
          JSON.stringify(resultJson, null, 2)
        );
      }
    }
  }
}
