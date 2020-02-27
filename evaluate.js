const assert = require('assert');
const fs = require('fs');

const evaluate = (func, testCases) => {

  // -- evaluate test cases
  const results = [];
  let passing = 0;
  let failing = 0;
  let error = 0;
  for (let test of testCases) {
    let testResult = '\n' + test.name + '';
    try {
      const actual = func(...test.args);
      const expected = test.expected;
      try {
        assert.deepStrictEqual(actual, expected);
        testResult += ': PASS';
        passing++;
      } catch (assertionError) {
        testResult += ' (FAIL): ' + assertionError.message.toString();
        failing++;
      }
    } catch (runTimeError) {
      testResult += ' (ERR): ' + runTimeError.stack;
      error++;
    };
    results.push(testResult + '\n');
  }

  // -- report results --
  const fileName = module.parent.filename
    .split(module.parent.path + '/')
    .join('');

  const report = fileName + ' -- '
    + (new Date()).toDateString() + '\n'
    + '\n- PASS: ' + passing
    + '\n- FAIL: ' + failing
    + '\n- ERROR: ' + error
    + '\n' + results.join('\n');

  // console.log(report);

  const reportFileName = fileName
    .slice(0, fileName.lastIndexOf('.'))
    + '-report.txt';

  const sanitizedReport = report
    .split('[31m').join('')
    .split('[32m').join('')
    .split('[39m').join('')
    .split(__dirname).join(' [...] ');

  fs.writeFileSync(reportFileName, sanitizedReport);
}

module.exports = evaluate;
