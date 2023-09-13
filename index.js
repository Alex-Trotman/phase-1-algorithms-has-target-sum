function hasTargetSum(array, target) {
  let visitedNumbers = [];
  for(const number of array){
    let complement = target - number;
    if (visitedNumbers.includes(complement)){
      return true
    } else {
      visitedNumbers.push(number);
    }
  };

  return false;
};

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  Write a funciton called 'hasTargetSum' that will take in two arguements, 
  an array of numbers, and an integer.
  The function will compare each of the numbers to each other, 
  and if there's a matching pair that add up to our integer, 
  it will return true, if not it will return false.
  Add a line that reads "since ${} and ${} add up to ${}"

  Function hasTargetSum(arr, target):
      Create an empty Set called "visitedNumbers" to store visited numbers

      For each "num" in "arr":
          Calculate the "complement" as "target - num"

          If "complement" is in "visitedNumbers":
              Return true // A pair that adds up to the target exists
          Else:
              Add "num" to "visitedNumbers"

      Return false // No pair adds up to the target


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
