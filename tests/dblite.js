const
  dblite = require('dblite'),
  db = dblite('tests/db.sqlite')
;

db
  .query('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, value TEXT)')
  .query('INSERT INTO test VALUES(null, ?)', ['some text'])
  .query('SELECT * FROM test', function (err, rows) {
    print(JSON.stringify(rows));
    db.close();
  })
  .on('close', process.exit)
;