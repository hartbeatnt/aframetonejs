import Tone from 'tone';

AFRAME.registerComponent('click-tone', {
  schema: {
    freq: {type: 'string', default: '440'}
  },
  init: function () {
    this.freq = +this.data.freq || this.data.freq
    this.synth = new Tone.Synth().toMaster();
    this.el.onclick = ()=>{
      console.log(this.freq)
      this.synth.triggerAttackRelease(this.freq, '8n');
    }
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});