for (var number = 0; number <= 100; number = number + 1)

	if (number % 3 == 0 && number % 5 != 0) console.log("Fizz");
	else if (number % 5 == 0 && number % 3 != 0) console.log("Buzz");
	else if (number % 3 == 0 && number % 5 == 0) console.log("FizzBuzz");
	else if (number % 2 == 0 && number % 4 == 0 && number % 8 == 0) console.log("ExtraCredit");
	else console.log(number);