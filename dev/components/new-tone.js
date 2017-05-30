import Tone from 'tone';

AFRAME.registerComponent('new-tone', {
  schema: {
    freq: {type: 'string', default: '440'}
  },
  init: function () {
    this.el.voices = this.el.voices || [];
    this.el.voices.push(this);
    this.freq = +this.data.freq || this.data.freq
    this.synth = new Tone.Synth({
      oscillator : {
        type : 'fmsquare',
        modulationType : 'sawtooth',
        modulationIndex : 3,
        harmonicity: 3.4
      },
      envelope : {
        attack : 0.001,
        decay : 0.1,
        sustain: 0.1,
        release: 0.1
      }
    }).toMaster();
  },
  triggerAttack(freq) {
    this.synth.triggerAttack(freq)
  },
  triggerRelease(freq) {
    this.synth.triggerRelease(freq)
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});
