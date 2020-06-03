/**
 * @file md5处理逻辑
 */
const shell = require('shelljs');
const path = require('path');

module.exports = {
  main(args) {
    const md5Path = path.join(__dirname, '../../scripts/getMd5.sh');
    const command = `sh ${md5Path} ${args[0]}`;
    shell.exec(command)
  }
};