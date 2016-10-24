$(document).ready(function() {
    $("#beer").before("<h3>Lots of Drinkin'</h3>");
    for (var bottles = 99; bottles >= 2; bottles = bottles - 1)
    $("#beer").append("<li>" + bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. </br>Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.</li> </br>");
    $("#beer").append("<li>" + bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. </br>Take one down and pass it around, " + (bottles - 1) + " bottle of beer on the wall.</li> </br>");
    $("#beer").append("<li> No more bottles of beer on the wall, no more bottles of beer. </br>Go to the store and buy some more, 99 bottles of beer on the wall. </li> </br>");
    $("#beer").after("<h3>Prost!</h3>");
});
