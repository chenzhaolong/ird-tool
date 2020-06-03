/**
 * @file md5指令
 */

const program = require('commander');
const MD5 = require('../src/md5/index');

program
  .action(function(cmd) {
    MD5.main(cmd.args)
  })
  .parse(process.argv);
