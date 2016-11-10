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


// $(document).ready(function () {
// 	function FarmAnimal(name, sound, image, talk){
// 		this.name = name;
// 		this.sound = sound;
// 		this.image = image;
// 		this.talk = function(name, sound) {
// 			return alert("Hello, I'm " + this.name + " and this is the sound I make: " + this.sound);
// 		};
// 	}
//
// // var bee = new FarmAnimal('brad', 'buzzzzz', "background-image: url('http://weknowyourdreams.com/images/bee/bee-01.jpg')");
// // var bear = new FarmAnimal('stacey', 'roarrrr', "background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png')");
// // var bird = new FarmAnimal('hawk', 'whistle', "background: url('https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg')");
//
// function Bee (name, sound, image){
// 	FarmAnimal.call(this, name, sound, image);
// }
//
// function Bear (name, sound, image){
// 	FarmAnimal.call(this, name, sound, image);
// }
//
// function Bird (name, sound, image){
// 	FarmAnimal.call(this, name, sound, image);
// }
//
// // push all animal instances here
// var farmAnimals = [];
//
// var brad = new Bee ('brad', 'buzzzzz', 'http://weknowyourdreams.com/images/bee/bee-01.jpg');
// var stacey = new Bear ('stacey', 'roarrrr', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png');
// var hawk = new Bird ('hawk', 'whistle', 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg');
//
// farmAnimals.push(brad);
// farmAnimals.push(stacey);
// farmAnimals.push(hawk);
//
// // var bumble = $('.animal').attr('src', 'background-image: url("http://weknowyourdreams.com/images/bee/bee-01.jpg")')
//
// // $('body').append('<div>' + brad + '</div>');
// // $('body').append('<div class="animal">' + stacey.image + '</div>');
//
// var div = $('<div>');
// div.addClass('animal');
//
// div.css('background-image', "url ('https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg')");
//
// console.log(div.css('background-image'));
// $('div.farm').prepend(div);
//
//
// $( brad ).click(function() {
//   alert( FarmAnimal.talk() );
// });
//
// // .on( "click", function() {
// //   $( this ).css( "background-color", "yellow" );
// // });;
//
// // click(function(){
// // 	alert(FarmAnimal.bee.talk);
//
// // $('body').append('.animal' + farmAnimals['bear.image']);
// // $('body').append('.animal' + farmAnimals['bird.image']);
//
// });


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

  // push all animal instances here
  var farmAnimals = [];

  // FarmAnimal Constructor - all animals inherit from this
  function FarmAnimal (name, image, sound) {
    this.name = name;
    this.image = image;
    this.sound = sound;
    this.talk = function () {
        alert(this.name + ' makes this sound: ' + this.sound + '!')
      }
  }

  // Animal Object Constructors
  function Bee (name) {
    FarmAnimal.call(this, name, 'http://weknowyourdreams.com/images/bee/bee-01.jpg', 'Buzzzzzzz...');
    // this.name = name;
    // this.image = 'https://upload.wikimedia.org/wikipedia/commons/5/52/Brown_Leghorn_rooster_in_Australia.jpg';
    // this.sound = 'Cockadoodledoo';
  }

  function Bear (name) {
    this.name = name;
    this.image = 'https://upload.wikimedia.org/wikipedia/commons/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png';
    this.sound = 'Roarrrrr...';
  }

  function Bird (name) {
    this.name = name;
    this.image = 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg';
    this.sound = 'Chirp!';
  }

  // Extend the animal objects with FarmAnimal
  Bee.prototype = FarmAnimal();
  Bear.prototype = FarmAnimal();
  Bird.prototype = FarmAnimal();

  // Create the animal instances
  var bee = new Bee('Bud');
  var bear = new Bear('Stacey');
  var bird = new Bird('Tom');

  // Push each new animal instance into farmAnimals
  farmAnimals.push(bee, bear, bird);

  // Iterate over the farmAnimals array and create a new <div> for each animal; append that animal the DOM
  farmAnimals.forEach(function (animal) {

    // create a new element with jQuery
    var $el = $('<div>');

    // generate random bottom and left values for CSS positioning
    var bottom = Math.floor(Math.random() * 50) + '%';
    var left = Math.floor(Math.random() * 90) + '%';

    $el
      .addClass('animal')
      .css('background-image', 'url(' + animal.image + ')')
      .css({
        bottom: bottom,
        left: left,
      })
      .click(function (el) {
        alert(animal.sound + ', my name is ' + animal.name);
      })

    $('body').append($el);
  });
})
