const fs = require('fs'),
    path = require('path');

//Initial configs
const configs = {
    pluginId: 'cordova-plugin-signicat'
};

function getConfigs() {
    return configs;
}

function replaceFileRegex(filePath, regex, replacer, callback) {

    if (!fs.existsSync(filePath)) {
        console.log(filePath + " not found!")
        return;
    }
    let content = fs.readFileSync(filePath, "utf-8")
    content = content.replace(regex, replacer);
    fs.writeFile(filePath, content, callback);
}

module.exports = {
    getConfigs,
    replaceFileRegex
}
