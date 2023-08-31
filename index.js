// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underpants-noahraimondi");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let select = _.filter(array, function(customers){ return customers.gender === "male"}).length
    return select;
};

var femaleCount = function(array) {
    let select = _.filter(array, function(customers){ return customers.gender === "female"}).length
    return select;
};

var oldestCustomer = function(array){
    let eldest = _.reduce(array, function(cur, customer){
        //compare age of cur and customer and if customer is older than cur reasign cur to customer
        if (cur.age < customer.age){
            cur = customer
        }
        return cur
    })
    return eldest.name
};

var youngestCustomer = function(array){
    let result = _.reduce(array, function (cur, customer) {
        // compare the age of cur and customer , if customer age is > cur
        // than reassign cur to customer
        if (cur.age > customer.age) {
          cur = customer
        }
    
        return cur
      })
    
      return result.name

};

var averageBalance = function (array){
    // make var for the sum
    // get each value from the customer balance
    //remove the $ from the balance value and convert from a string
    //add bal to the sum var
    //divide the balance by the amount customer, customer.length and return the result
    let nums = _.map(array, function(customer){
        let bal = customer.balance.replace('$','').replace(',','')
        //console.log(bal)
        return Number(bal)//only work if the $ is removed
    })
    //console.log(nums)
    let sum = _.reduce(nums, function(total, number){
        return total+number
    }, 0)
    //console.log(sum)
    return sum/customers.length
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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
