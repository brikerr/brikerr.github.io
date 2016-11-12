// creating a poly synth to be controlled via the keyboard UI
var synth = new Tone.PolySynth(6, Tone.Synth, {
  "oscillator" : {
				"partials" : [1, 0.2, 0.01],
			}
}).toMaster()
    .set("envelope.attack", 0.04);

// send audio to each of the effect channels below
var chorusSend = synth.send("chorus", -Infinity);
var chebySend = synth.send("cheby", -Infinity);
var reverbSend = synth.send("reverb", -Infinity);
var bitCrusherSend = synth.send("bitCrusher", -Infinity);

// creating effects that are applied to synth
var chorus = new Tone.Chorus()
    .receive("chorus")
    .toMaster();

var cheby = new Tone.Chebyshev(50)
    .receive("cheby")
    .toMaster();

var reverb = new Tone.Freeverb(0.9, 4000)
    .receive("reverb")
    .toMaster();

var bitCrusher = new Tone.BitCrusher(2)
    .receive("bitCrusher")
    .toMaster();

// slider for Cheby effect
$(function() {
    new Interface.Slider({
        name: "Chebyshev",
        parent: $("#Sliders"),
        min: -100,
        max: 0,
        drag: function(val) {
            chebySend.gain.value = val;
        }
    });

    // slider for Chorus effect
    new Interface.Slider({
        name: "Chorus",
        parent: $("#Sliders"),
        min: -100,
        max: 0,
        drag: function(val) {
            chorusSend.gain.value = val;
        }
    });

    // slider for Freeverb effect
    new Interface.Slider({
        name: "Freeverb",
        parent: $("#Sliders"),
        min: -100,
        max: 0,
        drag: function(val) {
            reverbSend.gain.value = val;
        }
    });

    // slider for Bit effect
    new Interface.Slider({
        name: "BitCrusher",
        parent: $("#Sliders"),
        min: -100,
        max: 0,
        drag: function(val) {
            bitCrusherSend.gain.value = val;
        }
    });

    // keyboard UI
    var keyboard = new QwertyHancock({
        id: "Keyboard",
        width: $("#Content").width(),
        height: 100,
        octaves: Interface.isMobile ? 1.26 : 2,
        startNote: "C3",
        whiteKeyColour: "#000",
        blackKeyColour: "#0E0E0E",
        activeColour: "#3833ED",

    });
    // triggering synth with computer key down
    keyboard.keyDown = function(note) {
        synth.triggerAttack(note);
    };
    // triggering release with computer key up
    keyboard.keyUp = function(note) {
        synth.triggerRelease(note);
    };


  // High-hats

  // filtering the hi-hats a bit to make them sound nicer
  var lowPass = new Tone.Filter({
      "frequency": 14000,
  }).toMaster();

  // open High-hat sound synth
  // the noise synth and a sharp filter envelope
  var openHiHat = new Tone.NoiseSynth({
      "volume": -10,
      "filter": {
          "Q": 1
      },
      "envelope": {
          "attack": 0.01,
          "decay": 0.3
      },
      "filterEnvelope": {
          "attack": 0.01,
          "decay": 0.03,
          "baseFrequency": 4000,
          "octaves": -2.5,
          "exponent": 4,
      }
  }).connect(lowPass);

  // open High-hat part
  var openHiHatPart = new Tone.Part(function(time) {
      openHiHat.triggerAttack(time);
  }, ["2*8n", "6*8n"]).start(0);

  // closed High-hat synth
  var closedHiHat = new Tone.NoiseSynth({
      "volume": -10,
      "filter": {
          "Q": 1
      },
      "envelope": {
          "attack": 0.01,
          "decay": 0.15
      },
      "filterEnvelope": {
          "attack": 0.01,
          "decay": 0.03,
          "baseFrequency": 4000,
          "octaves": -2.5,
          "exponent": 4,

      }
  }).connect(lowPass);

  // closed High-hat part
  var closedHatPart = new Tone.Part(function(time) {
      closedHiHat.triggerAttack(time);
  }, ["1*8n", "1*16n", "1*8n", "3*16n", "4*16n", "5*8n", "7*8n", "0*8n"]).start(0);

    // Bass envelope
    var bassEnvelope = new Tone.AmplitudeEnvelope({
        "attack": 0.01,
        "decay": 0.2,
        "sustain": 0,
        "release": 0,
    }).toMaster();

    // Bass filter
    var bassFilter = new Tone.Filter({
        "frequency": 600,
        "Q": 8
    });

    // Bass synth
    var bass = new Tone.PulseOscillator("A2", 0.4).chain(bassFilter, bassEnvelope);
    bass.start();

    // Bass part
    var bassPart = new Tone.Part(function(time, note) {
        bass.frequency.setValueAtTime(note, time);
        bassEnvelope.triggerAttack(time);
    }, [
        ["0:1:2", "A1"],
        ["0:2", "G1"],
        ["0:2:2", "C2"],
        ["0:5:2", "A1"]
    ]).start(0);

    // tock envelope
    var tockEnvelope = new Tone.AmplitudeEnvelope({
        "attack": 0.002,
        "decay": 0.4,
        "sustain": 0,
        "release": 0,
    }).toMaster();

    // tock synth
    var tock = new Tone.Oscillator("A4").connect(tockEnvelope);
    tock.start();

    // tock loop
    var tockLoop = new Tone.Loop(function(time) {
        tockEnvelope.triggerAttack(time);
    }, "2n").start(0);

    // kick drum envelope
    var kickEnvelope = new Tone.AmplitudeEnvelope({
        "attack": 0.02,
        "decay": 0.2,
        "sustain": 0,
        "release": 0
    }).toMaster();

    // kick drum Oscillator
    var kick = new Tone.Oscillator("A2").connect(kickEnvelope).start();

    // kick drum envelope
    kickSnapEnv = new Tone.FrequencyEnvelope({
        "attack": 0.005,
        "decay": 0.01,
        "sustain": 0,
        "release": 0,
        "baseFrequency": "A2",
        "octaves": 2.7
    }).connect(kick.frequency);

    // kick drum part
    var kickPart = new Tone.Part(function(time) {
        kickEnvelope.triggerAttack(time);
        kickSnapEnv.triggerAttack(time);
    }, ["0", "0:0:3", "0:2:0", "0:3:1"]).start(0);

    // sound transport hook-up
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = "1:0";
    Tone.Transport.loop = true;

    // button to triger beat loop
    $(function() {
        new Interface.Button({
            key: 32,
            type: "toggle",
            text: "Try A Beat",
            activeText: "Stop",
            start: function() {
                Tone.Transport.start("+0.1");
            },
            end: function() {
                Tone.Transport.stop();
            }
        });
    });

  // piano synth
  var chordPlay = new Tone.PolySynth(4, Tone.Synth, {
      "volume": -8,
      "oscillator": {
          "partials": [1, 2, 1],
      },
      "portamento": 0.05
  }).toMaster()

  // chords that are trigger within the piano part
  var cChord = ["A3", "A3", "A3", "G2"];
  var dChord = ["A2", "A2", "G4", "G1"];
  var gChord = ["C3", "A3", "A3", "A3"];

  // the arrangment of when the chords are triggered
  var chordPlayPart = new Tone.Part(function(time, chord) {
      chordPlay.triggerAttackRelease(chord, "8n", time);
  }, [
      ["0:0:2", cChord],
      ["0:1", cChord],
      ["0:1:3", dChord],
      ["0:2:2", cChord],
      ["0:3", cChord],
      ["0:3:2", gChord]
  ]).start("2m");

  // looping the chord parts
  chordPlayPart.loop = true;
  chordPlayPart.loopEnd = "1m";
  chordPlayPart.humanize = true;

  // button to trigger the chord sequence
  $(function() {
      new Interface.Button({
          key: 32,
          type: "toggle",
          text: "Try A Melody",
          activeText: "Stop",
          start: function() {
              chordPlayPart.start(0);
          },
          end: function() {
              chordPlayPart.stop(0);
          }
      });
  });

});
