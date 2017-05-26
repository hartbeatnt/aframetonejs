const DEFAULT_INDEX = 3;

AFRAME.registerComponent('piano-keys', {
  schema: {
    start: { type: 'string', default: 'C4' },
    notes: { type: 'int', default: 12 },
  },

  init: function () {
    let startNote = this.parseNote(this.data.start);
    this.notes = this.getNoteRange(startNote, this.data.notes);
  },

  parseNote: function(str){
    const flatToSharp = { Bb:'A#', Db:'C#', Eb:'D#', Gb:'F#', Ab:'G#' };
    let i = 0;
    while (isNaN(+str[i]) && i < str.length) i++;

    let note = str.slice(0,i);
    let startNote = str[0].toUpperCase().concat(str.slice(1));
    startNote = flatToSharp[startNote] || startNote;
    let octave = +str.slice(i);
    if (isNaN(octave)) octave = 4;

    return { note, octave };

  },

  getNoteRange(start, length) {
    let notes = [];
    const scale = ['A', 'A#','B','C','C#','D','D#','E','F','F#','G','G#'];
    //  add 1 to index to make index 0 truthy and index -1 falsey
    let i = (scale.indexOf(start.note) + 1 || DEFAULT_INDEX + 1) - 1;
    for (let j = i; j < i + this.data.notes; j++) {
      let noteIndex = j % (scale.length - 1);
      let octave = start.octave + Math.floor(j/(scale.length - 1));
      let note = scale[noteIndex]+octave;
      notes.push({
        note,
        midi: j - i,
      });
    }
    return notes;
  },

  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});