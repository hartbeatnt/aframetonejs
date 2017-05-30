import Tone from 'tone';

AFRAME.registerComponent('synth', {
  schema: {
    type: 'string'
  },
  init: function () {
    this.el.voices = this.el.voices || [];
    this.el.voices.push(this);
    this.synth = new Tone.Synth().toMaster();
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
