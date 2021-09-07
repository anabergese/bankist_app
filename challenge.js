// Create a function 'calcAverageHumanAge', which accepts an arrays
 // of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog ageinhumanyearsusingthefollowingformula:
// if the dog is <= 2 years old, humanAge = 2 * dogAge.
// If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old
// (whichisthesameas keeping dogs that are at least 18 years old)
// 3. Calculatetheaverage human age of all adult dogs (youshouldalreadyknow
// from other challenges how we calculate averages 😉)
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]


function calcAverageHumanAge(dogAges) {

const humanAges = dogAges.map(dogAge =>
(dogAges <= 2 ?  2 * dogAge : 16 + dogAge * 4));

const adultDogs = humanAges.filter(humanAge
  humanAge >= 18);

const average = adultDogs.reduce(function(acc, curr, i, arr){
    const sum = acc + curr;
    return sum / arr.length;
  }, 0);

}
