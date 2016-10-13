/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/


var monkey = function (name, species, foodsEaten) {
	this.name = name;
	this.species = species;
	this.foodsEaten = foodsEaten;
}

var monkeyOne = new monkey ("Sam", "Mandrill", "Apples");
var monkeyTwo = new monkey ("Sam", "Gelada", "Pears");
var monkeyThree = new monkey ("Sam", "Lesula", "Grapes");

monkeyTwo.sayName();


