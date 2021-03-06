// var num = 5.67;
// var floor = Math.floor(num);
// console.log(floor);
// var ceil = Math.ceil(num);
// console.log(ceil);
// var trunc = Math.trunc(num);
// console.log(trunc);

// Math.random() produces a random number between 0 and 1
// It never actually gets to 1
// Math.ceil( Math.random() ) will round UP whatever number random produces
// Math.ceil( Math.random() * 6 ) will make numbers from 1 to 6
// Basically, multiply random by the number you want

// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne() {
var rand = Math.ceil(Math.random() * 6);
return rand;
}

function playStatistics3(num) {
// creating arr
var roll_arr = [];

    for (var i = 1; i <= num; i++) {
    roll_arr.push(rollOne());
}

return roll_arr;
}

function playStatistics2(num) {
// getting sum

var arr = playStatistics3(num);
    var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(arr);
return sum;
}

function playStatistics4(num) {
var total = playStatistics2();
var avg = total / playStatistics3().length;
console.log();
return avg;
}

console.log(playStatistics3(3));


// Create a new function named playStatistics(), which should call rollOne() eight
// times (but not print anything after each call). After the last of these eight calls, it should print out
// the lowest and highest values that it received from rollOne, among those eight calls.

// Roll 8 dice
// Write down the result of each roll
// Compare all the numbers together and find the smallest and largest



    // Make a copy of playStatistics and add code to make playStatistics2(), so
    // that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.




    // Copy playStatistics2 and add code to it to make playStatistics3(num), so that
    // it will roll as many times as you want, instead of always doing this eight times.





    // Make a copy of playStatistics3 and change it to create playStatistics4(num),
    // so that at the end instead of the total sum, it prints the average roll.






    //  Statistics Until Doubles
    // Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
    // integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
    // Display number of rolls, min, max, and average