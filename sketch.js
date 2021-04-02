let mic, recorder, soundFile, a, b;
let state = 0;
let c = 0;
let logo;
function preload() {
    logo = loadImage('logo.png');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255)
    textAlign(CENTER)
    imageMode(CENTER)
    image(logo, width / 2, height / 2)
    text('Tap anywhere to save the PAST...', width / 2, 80 + height / 2)
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();
    a = new p5.SoundFile();
    b = new p5.SoundFile();
}

function draw() {
    c++;
    userStartAudio();
    if (state === 0 && mic.enabled) {
        recorder.record(soundFile);
        text('Recording!', width / 2, 50 + height / 2);
    }
    else if (state === 1) {
        recorder.stop();
        b = a;
        a = soundFile;
        state = 0;
        c = 0;
    }
    if (c == 200) {
        state = 1;
    }
}
function mousePressed() {
    background(255);
    image(logo, width / 2, height / 2)
    b.play();
    createButton('save').mousePressed(saveaudio).position(width / 2 - 10, 80 + height / 2)
    state = 2;
    c = 300;
}
function saveaudio() {
    save(b, 'mySound.wav');
}