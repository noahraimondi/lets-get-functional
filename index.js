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
    return _.reduce(array, function(sum, array) {
        if(array.gender === "male") return ++sum;
        return sum;
    }, 0);
};

const femaleCount = function(array) {
    return _.reduce(array, function(sum, array) {
        if(array.gender === "female") return ++sum;
        return sum;
    }, 0);
};

const oldest = function(array) {
    var name = "";
    _.reduce(array, function(sum, array) {
        if(array.age > sum) {
            sum = array.age;
            name = array.name;
            return sum;
        }
        return sum;
    }, 0);
    return name;
};

const youngest = function(array) {
    var name = "";
    _.reduce(array, function(sum, array) {
        if(array.age < sum) {
            sum = array.age;
            name = array.name;
            return sum;
        }
        return sum;
    }, 200);
    return name;
};

// const youngAndOld = function() {
//     return old(customers) + " is oldest and " + young(customers) + " is youngest.";
// };

const averageBalance = function(array) {
    return _.reduce(array, function(sum, array) {
        sum = sum + parseFloat(array.balance.replace(/[$,]/g,"")); return sum;}, 0) / array.length;
};

const firstLetterCount = function(array, letter) {
    return _.reduce(array, function(count, array) {
        if(array.name.charAt(0).toLowerCase() == letter.toLowerCase()) {
            count += 1;
            return count;
        }
        return count;
    }, 0);
};

const friendFirstLetterCount = function(array, name, letter) {
    return _.reduce(array, function(count, array) {
        if(array.name === name) {
            for(var i = 0; i < array.friends.length; i++) {
                if(array.friends[i].name.charAt(0).toLowerCase() == letter.toLowerCase()) count += 1;
            }
            return count;
        }
        return count;
    }, 0);
};

const friendsCount = function(array, name) {
    let friendsArr = [];
    let customersArr = [];
    let finalArr = [];
    for(var k = 0; k < array.length; k++) {
        for(var j = 0; j < array[k].friends.length; j++) {
            customersArr.push(array[k].name)
            friendsArr.push(array[k].friends[j].name)
        }
    }
    for(var j = 0; j < customersArr.length; j++) {
        if(_.contains(friendsArr, customersArr[j])) { finalArr.push(customersArr[j]) }
    }
    return _.unique(finalArr);
}

const topThreeTags = function(array) {
    let tags = _.reduce(array, function(list, array) {
        for(var i = 0; i < array.tags.length; i++) {
            if(array.tags[i] in list) { ++list[array.tags[i]] }
            else { list[array.tags[i]] = 1 }
        }
        return list;
    }, {})
    let arr = [];
    let int = 0;
    for(var key in tags) {
        if(tags[key] >= int) {
            arr.unshift(key);
            int = tags[key]
        }
    }
    return _.first(arr, 3)
}

const genderCount = function(array) {
    return _.reduce(array, function(object, array) {
        if(array.gender in object) { ++object[array.gender] }
        else { object[array.gender] = 1; }
        return object;
    }, {})
}

console.log("Hey! There are",customers.length,"customers!\n");
console.log("\nMale count is",maleCount(customers));
console.log("\nFemale count is",femaleCount(customers));
console.log("\nOldest person is",oldest(customers));
console.log("\nYoungest person is",youngest(customers));
// console.log("\n" + youngAndOld());
console.log("\nAverage balance is $"+averageBalance(customers));
console.log("\n"+firstLetterCount(customers,"d"),"customer(s) with a name starting with B.");
console.log("\n"+firstLetterCount(customers,"a"),"customer(s) with a name starting with B.");
console.log("\n"+friendFirstLetterCount(customers,"Doris Smith","F"),"friend(s) with a name starting with F.");
console.log("\n",friendsCount(customers));
console.log("\nThe 3 most common tags are",topThreeTags(customers));
console.log("\n",genderCount(customers));

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
