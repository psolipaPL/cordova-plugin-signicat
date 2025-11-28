const fs = require('fs'),
    path = require('path');

//Initial configs
const configs = {
    textToReplace: 'There was an error processing your request.',
    androidPath: "/platforms/android/app/src/main/assets/www/",
    androidMainPath: "/platforms/android/app/src/main/",
    androidAppPath: "/platforms/android/app/",
    configPathAndroid: "/platforms/android/app/src/main/res/xml/config.xml",
    configPathIos: "/platforms/ios/PLUS/config.xml",
    androidManifest: "AndroidManifest.xml",
    iosPath: "/platforms/ios/www/",
    iosMainPath: "/platforms/ios/",
    errorFile: '_error.html',
    indexFile: 'index.html',
    urlPath: 'ECOP_Mobile',
    notificareSuffix: '.notificare',
    firebaseSuffix: '.firebase',
    pluginId: 'cordova-os-build-changer'
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
