/**
 * @file md5处理逻辑
 */
const path = require('path');
const _ = require('lodash');
const { execForCb } = require('../../utils/exec');
const log = require('../../utils/log');

module.exports = {
  main(args) {
    if (_.isArray(args) && args.length === 1) {
      const md5Path = path.join(__dirname, '../../scripts/getMd5.sh');
      const command = `sh ${md5Path} ${args[0]}`;
      execForCb(command, (error, stdout) => {
        if (!error) {
          log.success(`reuslt: ${stdout}`);
        }
      })
    } else {
      log.fail('Error: do not input more than one params');
    }
  }
};