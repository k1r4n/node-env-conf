# node-conf-env
A npm package to convert plain text env configuration to json object

### Prerequisites

Node v9.2.1 and above

### Installing

How to install the product

```
npm i @k1r4n/node-conf-env -S
```

or

```
npm install @k1r4n/node-conf-env --save
```

### Usage


example.js
```
const fs = require('fs');

const envToConfig = require('@k1r4n/node-env-conf');

const config = fs.readFileSync('conf.env', 'utf8').split('\n');

const conf = envToConfig(config);

console.log(conf);
```

conf.env
```
first   name=Lionel=Messi
Last Name=Messi
PLAYING POSITION=Right Wing Forward
PlAyInG cLuB=FC Barcelona

number=10
```

### test

```
npm test
```
