# lets-get-functional

An exercise in problem solving in the functional idiom.

## Step 0 - Release lodown
 - If you haven't release your lodown library to `npm` (node package manager), follow the steps in this video to do so:

    [publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

## Step 1 - Setup
 - Run `os install` to install `Lets Get Functional`
 - Run `os npm` to install your `lodown` library
  - Select Bootcamp
  - Select Lets Get Functional
  - Input your lodown package name, something like `lodown-<your-username>`
 - Run `os start` for Lets Get Functional
 - Open `index.html`
 - Open `index.js`
 - Update line 6 of `index.js` to reference your `lodown` library

## Step 2 - Solve
 - Write the functions outlined below, using your `lodown` library
 - Code and test your solutions in `index.js`
 - Data is available to you in the Array, `customers`
 - You MUST run `os start` in order for your `index.html` to update

### 1: `maleCount`
 - Objective: Find the number of male customers
 - Input: `Array`
 - Output: `Number`
 - Constraints: use `filter`

### 2: `femaleCount`
 - Objective: Find the number of female customers
 - Input: `Array`
 - Output: `Number`
 - Constraints: use `reduce`

### 3: `oldestCustomer`
 - Objective: Find the oldest customer's name
 - Input: `Array`
 - Output: `String`
 - Constraints:

### 4: `youngestCustomer`
 - Objective: Find the youngest customer's name
 - Input: `Array`
 - Output: `String`
 - Constraints:

### 5: `averageBalance`
 - Objective: Find the average balance of all customers
 - Input: `Array`
 - Output: `Number`
 - Constraints:

### 6: `firstLetterCount`
 - Objective: Find how many customer's names begin with a given letter
 - Input: `Array`, `Letter`
 - Output: `Number`
 - Constraints:

### 7: `friendFirstLetterCount`
 - Objective: Find how many friends of a given customer have names that start with a given letter
 - Input: `Array`, `Customer`, `Letter`
 - Output: `Number`
 - Constraints:

### 8: `friendsCount`
 - Objective: Find the customers' names that have a given customer's name in their friends list
 - Input: `Array`, `Name`
 - Output: `Array`
 - Constraints:

### 9: `topThreeTags`
 - Objective: Find the three most common tags among all customers' associated tags
 - Input: `Array`
 - Output: `Array`
 - Constraints:

### 10: `genderCount`
 - Objective: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    transgender: 1
}
```
 - Input: `Array`
 - Output: `Object`
 - Constraints: Use `reduce`
