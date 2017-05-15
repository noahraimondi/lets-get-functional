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
 
// const maleCount = function(array) {
//     // Array is an array of objects
//     // var count = 0;
//     // what am I working with? An array of objects
//     // Loop through the arrays
//     // Loop through object
//     // Check value of gender property
//     // IF Male add +1 to 
//     const memo = _.reduce(array, function(count, array) {
//         // memo = function()
//         // console.log(memo);
//         return count += 1;
//         console.log(array)
//         // if(array.gender === "male") {memo.count += 1;} 
//         // console.log(memo.count)
//     }, 0);
//     // return memo.count;
// }

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

const old = function(array) {
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

const young = function(array) {
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

const youngAndOld = function() {
    return old(customers) + " is oldest and " + young(customers) + " is youngest.";
};

const avgBal = function(array) {
    return _.reduce(array, function(sum, array) {
        sum = sum + parseFloat(array.balance.replace(/[$,]/g,"")); return sum;}, 0) / array.length;
};

const firstLetter = function(array, letter) {
    return _.reduce(array, function(count, array) {
        if(array.name.charAt(0).toLowerCase() == letter.toLowerCase()) {
            count += 1;
            return count;
        }
        return count;
    }, 0);
};

const friendFirstLetter = function(array, name, letter) {
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

const isFriend = function(array, name) {
    // pluck and unique
    // find the properties of all the friends objects
    // put them in an array
    // get rid of non-unique names
    // return
    
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

const tags = function(array) {
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
    
    // var tags = _.reduce(array, function(list, array) {
    //     for(var i = 0; i < array.tags.length; i++) {
    //         // console.log(array.tags)
    //         list.push(array.tags[i])
    //         // console.log(list) 
    //         // return list;
    //     }
    //     return list;
    //     }, [])
    //     return tags.sort()
}

const gender = function(array) {
    return _.reduce(array, function(object, array) {
        if(array.gender in object) { ++object[array.gender] } 
        else { object[array.gender] = 1; }
        return object;
    }, {})
}
    
console.log("Hey! There are",customers.length,"customers!\n");
console.log("\nMale count is",maleCount(customers));
console.log("\nFemale count is",femaleCount(customers));
console.log("\nOldest person is",old(customers));
console.log("\nYoungest person is",young(customers));
console.log("\n" + youngAndOld());
console.log("\nAverage balance is $"+avgBal(customers));
console.log("\n"+firstLetter(customers,"b"),"customer(s) with a name starting with B.");
console.log("\n"+firstLetter(customers,"B"),"customer(s) with a name starting with B.");
console.log("\n"+friendFirstLetter(customers,"Doris Smith","F"),"friend(s) with a name starting with F.");
console.log("\n",isFriend(customers));
console.log("\nThe 3 most common tags are",tags(customers));
console.log("\n",gender(customers));