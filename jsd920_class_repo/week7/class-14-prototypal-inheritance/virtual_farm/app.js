/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {
	function FarmAnimal(name, sound, image, talk){
		this.name = name;
		this.sound = sound;
		this.image = image;
		this.talk = function(name, sound) {
			return alert("Hello, I'm " + this.name + " and this is the sound I make " + this.sound);
		};
	}

// var bee = new FarmAnimal('brad', 'buzzzzz', "background-image: url('http://weknowyourdreams.com/images/bee/bee-01.jpg')");
// var bear = new FarmAnimal('stacey', 'roarrrr', "background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png')");
// var bird = new FarmAnimal('hawk', 'whistle', "background: url('https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg')");

function Bee (name, sound, image){
	FarmAnimal.call(this, name, sound, image);
}

function Bear (name, sound, image){
	FarmAnimal.call(this, name, sound, image);
}

function Bird (name, sound, image){
	FarmAnimal.call(this, name, sound, image);
}

// push all animal instances here
var farmAnimals = [];

var brad = new Bee ('brad', 'buzzzzz', 'background-image: url("http://weknowyourdreams.com/images/bee/bee-01.jpg")');
var stacey = new Bear ('stacey', 'roarrrr', 'background-image: url("https://upload.wikimedia.org/wikipedia/commons/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png")');
var hawk = new Bird ('hawk', 'whistle', 'background-image: url("https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg")');

farmAnimals.push(brad);
farmAnimals.push(stacey);
farmAnimals.push(hawk);

$('body').append('<div .animal>' + brad.image + '</div>');
$('body').append('<div .animal>' + stacey.image + '</div>');
$('body').append('<div .animal>' + hawk.image + '</div>');



// .on( "click", function() {
//   $( this ).css( "background-color", "yellow" );
// });;

// click(function(){
// 	alert(FarmAnimal.bee.talk);

// $('body').append('.animal' + farmAnimals['bear.image']);
// $('body').append('.animal' + farmAnimals['bird.image']);

});
