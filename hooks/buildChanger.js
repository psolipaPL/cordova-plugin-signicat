const utils = require("./utils");

module.exports = function (context) {

  const confs = utils.getConfigs();

  //Indexes Changer
  let indexFileContent = utils.readFile(context.opts.projectRoot + confs.iosPath + confs.indexFile);
  utils.indexReplacer(context.opts.projectRoot + confs.iosPath + confs.indexFile, indexFileContent);

}