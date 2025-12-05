var exec = require("cordova/exec");
/*
module.exports = {
  login: function (success, error) {
    exec(success, error, "Signicat", "loginAppToApp", []);
  },
};
*/

module.exports = {
  login: function (
    issuer,
    clientID,
    redirectURI,
    appToAppScopes,
    brokerDigidAppAcs
  ) {
    exec(
      null,
      null,
      "Signicat",
      "loginAppToApp",
      [
        issuer,
        clientID,
        redirectURI,
        appToAppScopes,
        brokerDigidAppAcs
      ]
    );
  },
};