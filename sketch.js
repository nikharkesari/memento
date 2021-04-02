let mic, recorder, soundFile;
let state = 0;
let c = 0;
function setup() {
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();
}

function draw() {
    c++;
    userStartAudio();
    if (state === 0 && mic.enabled) {
        recorder.record(soundFile);
        background(255, 0, 0);
        text('Recording!', width / 2, height / 2);
    }
    else if (state === 1) {
        background(0, 255, 0);
        recorder.stop();
        state++;
    }
    if (c == 200) {
        state = 1;
    }
}
function mousePressed() {
    soundFile.play();
}