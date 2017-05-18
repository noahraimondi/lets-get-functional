#!/usr/bin/env node

'use strict';

const customers = require("./data/customers.json");
const _ = require("phrush-lodown");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 */

const maleCount = function(array) {

};

const femaleCount = function(array) {

};

const oldest = function(array) {

};

const youngest = function(array) {

};

const averageBalance = function(array) {

};

const firstLetterCount = function(array, letter) {

};

const friendFirstLetterCount = function(array, name, letter) {

};

const friendsCount = function(array) {

};

const topThreeTags = function(array) {

};

const genderCount = function(array) {

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.maleCount = maleCount;
    module.exports.femaleCount = femaleCount;
    module.exports.oldest = oldest;
    module.exports.youngest = youngest;
    module.exports.averageBalance = averageBalance;
    module.exports.firstLetterCount = firstLetterCount;
    module.exports.friendFirstLetterCount = friendFirstLetterCount;
    module.exports.friendsCount = friendsCount;
    module.exports.topThreeTags = topThreeTags;
    module.exports.genderCount = genderCount;
}
