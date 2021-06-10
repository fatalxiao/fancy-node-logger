/**
 * @file demo.js
 */

'use strict';

// Vendors
const fs = require('fs');

const name = process.argv[2];

if (!name) {

    console.error(`\nUsage: ${process.argv[1]} [name]\n`);

    console.error(
        'The name parameter can be:\n'
        + fs.readdirSync('./examples').map(file => '> ' + file.split('.')[0]).join('\n')
    );

    process.exit(1);

}

require('esm')(module)(`./examples/${name}`);
