const _     = require('lodash');

console.log(_.isString(true));//become false, because true is boolean, not string
console.log(_.isString('dhan'));//become true, because 'dhan' is string

var filteredArray = _.uniq(['dhan', 1, 'dhan', 1, 2, 3, 4]);

console.log('filtered array here: ' + filteredArray);