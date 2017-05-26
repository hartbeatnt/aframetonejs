AFRAME.registerComponent('piano-keys', {
  schema: {
    start: { type: 'string', default: 'C4' },
    keys: { type: 'int', default: 12 },
  },
  init: function () {
    const scale = ['A', 'A#','B','C','C#','D','D#','E','F','F#','G','G#'];
    let startOctave = +this.data.start.slice(-1) || 4;
    let startNote = this.data.start.length === 2
      ? this.data.start.slice(0,1)
      : this.data.start.slice(0,2);
    let startIndex = scale.indexOf(startNote);
    if (startIndex < 0) startIndex = 3;
    for (let i = 0; i < this.data.keys; i++) {
      let scaleIndex = (startIndex + i) % 11;
      let octave = startOctave + Math.floor(i/11);
      let note = scale[scaleIndex]+octave;
      console.log(note, scaleIndex, octave)
    }
    
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});