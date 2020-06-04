/**
 * @file 执行脚本
 */
const { exec } = require('child_process');
const execShell = require('shelljs').exec;

module.exports = {
  execForCb: function(cmd, cb) {
    exec(cmd, cb);
  },

  execForNative: function(file) {
    execShell(file);
  }
};