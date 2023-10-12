const Mocha = require('mocha');
const fs = require('fs');
const mochawesome = require('mochawesome');

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './test-report', // Specify the directory
  },
});

// Add your test files
mocha.addFile('./api-tests.js');


mocha.run((failures) => {
  const reportFilePath = '/mochawesome.html'; // Specify the HTML report file path
  fs.renameSync('/mochawesome.json', reportFilePath);
  process.exit(failures);
});