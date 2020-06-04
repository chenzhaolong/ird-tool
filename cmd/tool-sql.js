/**
 * @file sql指令
 */
const program = require('commander');
const sql = require('../src/sql');

program
  .usage('sql command')
  .option('-g, --generate', 'generate the sql what you want.')
  .option('-c, --cache', 'create the cache into your local when you input the sql.')
  .option('-a, --alias', 'choose the sql when you cache since you input.')
  .action(function(cmd, options) {
    if (cmd.generate) {
      sql.generateSql()
    } else if (cmd.cache) {
      sql.cacheSql()
    } else if (cmd.alias) {
      sql.aliasSql()
    }
  })
  .parse(process.argv);
