var
  dblite = require('dblite'),
  db = dblite('./test.sqlite')
;

db.query('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, value TEXT)');
db.query('INSERT INTO test VALUES(null, ?)', ['some ' + Math.random() + ' text']);
db.query('SELECT * FROM test', function (err, rows) {
  console.log(rows);
  db.close();
});
db.on('close', process.exit);