// CommonJS
// Modules //ES6 Modules
// Encapsulation
const {karen, juan} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-export')
require('./7-function')

console.log(data)
sayHi(karen)
sayHi(juan)