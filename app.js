#! /usr/bin/env node
const { execSync } = require('child_process')
execSync(`${__dirname}/node_modules/.bin/electron ${__dirname}`)
