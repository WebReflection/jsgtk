require('http').get('http://www.google.com/index.html', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  res.on('readable', function () {
    console.log('readable');
  });
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});