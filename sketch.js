let mic, recorder, soundFile;
let state = 0;

function setup() {
    let cnv = createCanvas(100, 100);
    cnv.mousePressed(canvasPressed);
    background(220);
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();
}

function canvasPressed() {
    userStartAudio();
    if (state === 0 && mic.enabled) {
        recorder.record(soundFile);
        background(255, 0, 0);
        text('Recording!', width / 2, height / 2);
        state++;
    }
    else if (state === 1) {
        background(0, 255, 0);
        recorder.stop();
        state++;
    }

    else if (state === 2) {
        soundFile.play();
        //save(soundFile, 'mySound.wav');
        state++;
    }
}