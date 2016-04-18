const spawn = require('child_process').spawn;
const ls = spawn('sh', ['tests/delayed.sh']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
ls.stdout.on('close', () => {
  console.log('close');
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});