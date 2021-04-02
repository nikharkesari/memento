let mic, recorder, soundFile, a, b;
let state = 0;
let c = 0;
function setup() {
    textAlign(CENTER, CENTER);
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
        background(255, 0, 0);
        text('Recording!', width / 2, height / 2);
    }
    else if (state === 1) {
        background(0, 255, 0);
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
    b.play();
    state = 2;
}