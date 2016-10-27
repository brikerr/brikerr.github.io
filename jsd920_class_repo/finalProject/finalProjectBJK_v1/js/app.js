/*
Todo list:
1. still need to add drag and drop functionality (helper function)
2. conditional effects when certain patterns are played and or when the user has used
interface for x amount of time (helper function)
3. design out visual affordances for the above


*/



// tempo and time signature
const BPM = 120;
const TICKS = 16;
const INTERVAL = 1 / (4 * BPM / (60 * 1000));

// sound samples
const sounds = [
    'sounds/bass_drum.wav',
    'sounds/snare_drum.wav',
    'sounds/low_tom.wav',
    'sounds/mid_tom.wav',
];

const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
const buffers = [];
const grid = document.getElementById('grid');
const sLen = sounds.length;

for (let soundIndex = 0; soundIndex < sLen; ++soundIndex) {
    (function(index) {
        // create buffer for sound
        const req = new XMLHttpRequest();
        req.open('GET', sounds[index], true);
        req.responseType = 'arraybuffer';
        req.onload = function() {
            audioCtx.decodeAudioData(
                req.response,
                function(buffer) {
                    buffers.push(buffer);
                }
            );
        };
        req.send();
    })(soundIndex);

    // create row for sound
    const fragment = document.createDocumentFragment();

    for (let t = 0; t < TICKS; ++t) {
        const btn = document.createElement('button');
        btn.className = 'beat';
        btn.addEventListener('click', function() {
            this.classList.toggle('on');
        }, false);

        fragment.appendChild(btn);
    }

    grid.appendChild(fragment);
    grid.appendChild(document.createElement('p'));
}

const beats = document.getElementsByClassName('beat');

let lastTick = TICKS - 1;
let curTick = 0;

let lastTime = new Date().getTime();

function drumLoop() {
    const curTime = new Date().getTime();

    if (curTime - lastTime >= INTERVAL) {
        for (let i = 0; i < sLen; ++i) {
            const lastBeat = beats[i * TICKS + lastTick];
            const curBeat = beats[i * TICKS + curTick];

            lastBeat.classList.remove('ticked');
            curBeat.classList.add('ticked');

            if (curBeat.classList.contains('on')) {
                try {
                    const source = audioCtx.createBufferSource();
                    source.buffer = buffers[i];
                    source.connect(audioCtx.destination);
                    source.start();
                } catch (e) {
                    console.error(e.message);

                    // Fallback method
                    new Audio(sounds[i]).play();
                }
            }
        }

        lastTick = curTick;
        curTick = (curTick + 1) % TICKS;
        lastTime = curTime;
    }
    requestAnimationFrame(drumLoop);
}
requestAnimationFrame(drumLoop);

// adapted from https://paulbakaus.com/tutorials/html5/web-audio-on-ios/
function enableIOSAudio() {
    const buffer = audioCtx.createBuffer(1, 1, 22050);
    const source = audioCtx.createBufferSource();

    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.noteOn(0);

    window.removeEventListener('touchend', enableIOSAudio, false);
}
window.addEventListener('touchend', enableIOSAudio, false);
