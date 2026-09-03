const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, '../i18n-assets/en');
var files = fs.readdirSync(pathToFile);

const pathToNewDestination = path.join(__dirname, 'merged-files');

let resultJson = {};
const finalPathName = pathToNewDestination;

for (let jFile of files) {
  const jsonPath = path.join(__dirname, '../i18n-assets/en', jFile);

  let fileContent = JSON.parse(fs.readFileSync(jsonPath));
  let tempResult = resultJson;
  let objName = String(jFile);
  // console.log(objName);
  resultJson = {
    ...tempResult,
  };
  resultJson[objName] = fileContent;
  // console.log(resultJson);
}

console.log(resultJson);
// Create directory if not exists
if (!fs.existsSync(finalPathName)) {
  fs.mkdirSync(finalPathName);
}
fs.writeFileSync(
  finalPathName + '/base_en.json',
  JSON.stringify(resultJson, null, 2)
);
