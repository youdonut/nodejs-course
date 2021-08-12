//npm
//npm --version
//local dependency — npm i <packageName>
//global dependency — npm install -g <packageName>
//sudo instal -g <packageName> (Mac)

//package.json
//manual approach
//npm init
//npm init -y

const _ = require('lodash')

const items  = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);