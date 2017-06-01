#!/usr/bin/env node

'use strict';

const customers = require("./data/customers.json");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We made the first one for you as an example! Make the rest in this style:
 */

const maleCount = function(array) {

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.maleCount = maleCount;
    module.exports.femaleCount = femaleCount;
    module.exports.oldestCustomer = oldestCustomer;
    module.exports.youngestCustomer = youngestCustomer;
    module.exports.averageBalance = averageBalance;
    module.exports.firstLetterCount = firstLetterCount;
    module.exports.friendFirstLetterCount = friendFirstLetterCount;
    module.exports.friendsCount = friendsCount;
    module.exports.topThreeTags = topThreeTags;
    module.exports.genderCount = genderCount;
}
