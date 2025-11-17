var exec = require("cordova/exec");

module.exports = {
  login: function (config, success, error) {
    exec(success, error, "SignicatPlugin", "login", [config]);
  },

  getAccessToken: function (success, error) {
    exec(success, error, "SignicatPlugin", "getAccessToken", []);
  },

  enableDeviceAuth: function (success, error) {
    exec(success, error, "SignicatPlugin", "enableDeviceAuth", []);
  },

  disableDeviceAuth: function (success, error) {
    exec(success, error, "SignicatPlugin", "disableDeviceAuth", []);
  }
};
