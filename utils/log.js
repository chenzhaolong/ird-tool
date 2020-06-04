/**
 * @file 输出格式
 */
const colors = require('colors');

module.exports = {
  success(txt) {
    console.log(colors.green(txt));
  },
  fail(txt) {
    console.log(colors.red(txt));
  }
};