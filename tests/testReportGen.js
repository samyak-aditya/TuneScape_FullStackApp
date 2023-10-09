const Mocha = require('mocha');
const fs = require('fs');
const mochawesome = require('mochawesome');

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './test-report3', // Specify the directory for HTML report files
  },
});

// Add your test files
mocha.addFile('./api-tests.js');

// Run the tests and generate the HTML report
mocha.run((failures) => {
  const reportFilePath = '/mochawesome.html'; // Specify the HTML report file path
  fs.renameSync('/mochawesome.json', reportFilePath);
  process.exit(failures);
});