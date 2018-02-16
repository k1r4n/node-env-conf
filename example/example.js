const fs = require('fs');

const envToConfig = require('../index');

const config = fs.readFileSync('conf.env', 'utf8').split('\n');

const conf = envToConfig(config);

console.log(conf);
