// FIZZBUZZ
// Using loops, boolean logic, and if/else statements, incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.
//
// EX:
// 1
// 2
// 'fizz'
// 4
// 'buzz'
// 'fizz'
// 7
// 8
// 'fizz'
// 'buzz'

for (var number = 0; number <= 100; number = number + 1)

	if (number % 3 == 0 && number % 5 != 0) console.log("Fizz");
	else if (number % 5 == 0 && number % 3 != 0) console.log("Buzz");
	else if (number % 3 == 0 && number % 5 == 0) console.log("FizzBuzz");
	else if (number % 2 == 0 && number % 4 == 0 && number % 8 == 0) console.log("ExtraCredit");
	else console.log(number);