# Sounds & Beats

## Project Description

Sounds & Beats is a single-page web app that allows users to create and manipulate synthesized sounds in a few different ways. Sounds can be produced by typing on their computer keyboard as well as tapping the UI buttons to start loops. The sounds triggered by the computer keyboard can be alter with various effects by using the slider components.

## Functional Components

Breakdown of the top level functionality for final project:

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Sound synthesis | H | 7hrs | 4hrs | 8hrs |
| Polyphonic synthesis | H | 6hrs | 4hrs | 3hrs |
| Manipulation of synthesized sounds with effects | H | 6hrs | 6hrs | 8hrs |
| Creation of sound loops and phrases | H | 7hrs | 4hrs | 8hrs |
| Independent triggering of loops and phrases | H | 12hrs | 4hrs | --- |

## Helper Functions

Keyboard UI constructor and key mapping
```Javascript
(function () {
    var root = this;
    // In <script> context, `this` is the window.
    // In node context (browserify), `this` is the node global.

    var globalWindow = typeof global === 'undefined' ? root : root.window;
    var version = '0.5.1',
        settings = {},
        mouse_is_down = false,
        keysDown = {},
        key_map = {
            65: 'Cl',
            87: 'C#l',
            83: 'Dl',
            69: 'D#l',
            68: 'El',
            70: 'Fl',
            84: 'F#l',
            71: 'Gl',
            89: 'G#l',
            90: 'G#l',
            72: 'Al',
            85: 'A#l',
            74: 'Bl',
            75: 'Cu',
            79: 'C#u',
            76: 'Du',
            80: 'D#u',
            59: 'Eu',
            186: 'Eu',
            222: 'Fu',
            221: 'F#u',
            220: 'Gu'
        },
        keyDownCallback,
        keyUpCallback;
```
```
Creating sounds with certain keys are pressed

/**
 * Get frequency of a given note.
 * @param  {string} note Musical note to convert into hertz.
 * @return {number} Frequency of note in hertz.
 */
var getFrequencyOfNote = function (note) {
    var notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
        key_number,
        octave;

    if (note.length === 3) {
        octave = note.charAt(2);
    } else {
        octave = note.charAt(1);
    }

    key_number = notes.indexOf(note.slice(0, -1));

    if (key_number < 3) {
        key_number = key_number + 12 + ((octave - 1) * 12) + 1;
    } else {
        key_number = key_number + ((octave - 1) * 12) + 1;
    }

    return 440 * Math.pow(2, (key_number - 49) / 12);
};
```



Slider knob setup with Tone.js

``` Javascript
var xParams = params.x;
xParams.axis = "x";
xParams.element = this.element;
xParams.tone = this.tone;
xParams.container = this.container;
this.xAxis = new Interface.Slider(xParams);

Interface.Slider = function(params){

	this.tone = params.tone;


  // the name

	var name = params.name ? params.name : this.tone ? this.tone.toString() : "";


  // callback functions

	this.start = params.start;

	this.end = params.end;

	this.drag = params.drag;

  ```

Button setup

  ``` Javascript
  Interface.Button = function(params){

  	this.activeText = params.activeText || false;

  	this.text = params.text || "Button";

  	this.type = params.type || "moment";

  	this.element = $("<div>", {
  		"class" : "Button",
  		"text" : this.text
  	}).appendTo(params.parent || "#Play")
  		.on("mousedown touchstart", this._start.bind(this));

  	if (this.type === "moment"){
  		this.element.on("mouseup touchend", this._end.bind(this));
  	} else {
  		this.element.addClass("Toggle");
  	}
  ```

## Supporting Libraries
* jQuery: appending UI elements to the DOM (link)
* Draggabilly JS: enabling dragging of certain elements within the UI (link)
* Qwerty Hancock keyboard library v0.5.1: enabling the certain keys on the keyboard to trigger sound events (link)
* Tone JS: is a web audio framework used for all sound related synthesis and events (link)


## jQuery Functional Requirements
 Use this section to list some, but not all, of the jQuery methods discovered while working on this project.
 * .attr
 * .addEventListener


## Change Log
* 9/27 - Investigating web audio APIs
* 10/30 - Moving away from stored sound files and will rely on synthesized sounds.
* 11/3 - Changed the monophonic synthesizer to polyphonic
* 11/13 - Completed all baseline functionality but still have a conflict with multiple pattern triggering.


## Issues and Resolutions
 * 11/17 - Having trouble with Independent pattern triggering. No errors but functionality is not working yet. I currently believe it is an issue with Tone Transport.
