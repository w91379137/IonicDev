
//範本 如何 新增 ionic 環境變數
//https://artyomsokolov.com/how-to-use-different-environment-variables-for-production-and-development-with-ionic-3/

var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

module.exports = function () {
  useDefaultConfig[process.env.IONIC_ENV].resolve.alias = {
      "@environment": path.resolve(__dirname + '/../../src/config/config.' + process.env.IONIC_ENV + '.ts'),
  };
  return useDefaultConfig;
};
