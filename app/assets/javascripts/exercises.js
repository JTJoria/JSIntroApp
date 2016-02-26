// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// Hint: Use a for loop!

// for(var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// for(var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var sum = 0

// for(var i = 0; i < numbers.length; i ++) {
//   sum += numbers[i]
// }

// var avg = sum/numbers.length

//   console.log(avg)

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

// for(var i = 1; i < 101; i++) {
//   if (i % 15 === 0){
//     console.log("FIZZBUZZ")
//   }
//   else if (i % 3 === 0){
//     console.log("FIZZ")
//   }
//   else if (i % 5 === 0){
//     console.log("BUZZ")
//   }
//   else
//     console.log(i);
// }

// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");

var i = Math.floor((Math.random() * 100) + 1);

var guess = prompt("Guess a number")
do {
if (guess > i) {
  console.log("Guess a higher number");
} else if (guess < i) {
  console.log("Guess a lower number");
} else (guess === i) 
  console.log("You got it!");
}
while 




// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 

// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


