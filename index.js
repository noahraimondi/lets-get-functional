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

var firstLetterCount = function(array, letter){
    //Use _.plack to get the "name" property from the customers array
    let names = _.pluck(array,'name')
    let filt = _.filter(names, function(name){
        //console.log({name,letter})
        //Compare the letter the first letter of name and changing the case to be the same
        return name.substring(0,1) === letter.toUpperCase()
    }).length
    return filt
};

var friendFirstLetterCount = function(array, customer, letter){
  var count = 0;//Amount of freinds when looked for letter
  for (var obj of array) {
    if (obj.name.toLowerCase() === customer.toLowerCase()) {
      for (var friend of obj.friends) {
        var name = friend.name.toLowerCase();
        if (name[0] === letter.toLowerCase()) {
          count++;// increase count when freind of cust has the looked for letter
        }
      }
    }
  }
  return count;
};


var friendsCount = function(array,name){
  var count = [];//the amount of x
  if (!name) {
    return count;
  }
  var result = _.map(array, function (customer) {
    for (var friend of customer.friends) {
      var namefrd = friend.name.toLowerCase(); //name o freind
      var looks = name.toLowerCase(); //looked for name
      if (namefrd === looks) {
        return customer.name;
      }
    }
  })
  for (var i = 0; i < result.length; i++) {
    if (result[i] != undefined) {
    count.push(result[i])
    }
  }
  return count;//
};


var topThreeTags = function(array){
  var arra = [];//Store the common tag
  var top = 0;//Most common tag 
  var name = '';
  var result = _.reduce(array, function (collect, current) {
    //loop through the tags array
    for (var tag of current.tags) {
      if (collect[tag]) {
        collect[tag] += 1;
      } else {
        collect[tag] = 1;
      }
    }
    return collect;}, {})
  //loop 3 times cause top three is wanted
  for (let i = 0; i < 3; i++) {
    for (let tag in result) {
        if (top < result[tag]) {
        top = result[tag]
        name = tag;
      }
    }
    arra.push(name)
    delete result[name];
    name = '';
    top = 0;
  }
  return arra;//returning the top three tags
};

var genderCount = function(array){
    var result = _.reduce(array, function (collect, current) {
        if (collect[current.gender]) {
        collect[current.gender] += 1;
        } else {
        collect[current.gender] = 1;
        }
        return collect;
    }, {})
  return result//returning the listed amount of genders in an object
};

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
