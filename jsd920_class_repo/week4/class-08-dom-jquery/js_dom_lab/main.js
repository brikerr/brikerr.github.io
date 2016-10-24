/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, newThing) {



}

window.onload = function() {
  // YOUR CODE HERE!
  var button = document.getElementById("new-thing")
  var input = document.getElementById("new-thing-button").value
  // console.log(text)

  var li = document.createElement("li")
  //create a new text node
  var text = document.createTextNode(input)
  //add the text node to the li
  li.appendChild(text)
  //grab the ul
  ul.appendChild(li)
  //append the li to the ul

};




/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/
