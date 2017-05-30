AFRAME.registerComponent('piano-keyboard', {
  schema: {
    start: { type: 'string', default: 'C4' },
    notes: { type: 'int', default: 12 },
  },

  init: function () {
    this.el.voices = this.el.voices || [];
    this.createKeyboard();
  },

  triggerAttack: function(note) {
    this.el.voices.forEach(voice=>{
      console.log('note getting passed to voices',note)
      voice.triggerAttack(note)
    })
  },

  triggerRelease: function() {
    this.el.voices.forEach(voice=>{
      voice.triggerRelease()
    })
  },

  createKeyboard: function() {
    let startNote = this.parseNote(this.data.start);
    this.notes = this.getNoteRange(startNote, this.data.notes);
    let i = 0;
    this.notes.forEach(note=>{
      this.createPianoKey(note)
    })
  },

  parseNote: function(str){
    const flatToSharp = { Bb:'A#', Db:'C#', Eb:'D#', Gb:'F#', Ab:'G#' };
    let i = 0;
    while (isNaN(+str[i]) && i < str.length) i++;

    let note = str.slice(0,i);
    note = note[0].toUpperCase().concat(note.slice(1));
    note = flatToSharp[note] || note;
    let octave = +str.slice(i);
    if (isNaN(octave)) octave = 4;
    return { note, octave };

  },

  getNoteRange(start, length) {
    let notes = [];
    const scale = ['C','C#','D','D#','E','F','F#','G','G#','A', 'A#','B'];
    //  add 1 to index to make index 0 truthy and index -1 falsey
    let i = (scale.indexOf(start.note) + 1 || 1) - 1;
    let xPos = 0 - length / 2;
    for (let j = i; j < i + this.data.notes; j++) {
      let noteIndex = j % (scale.length);
      let octave = start.octave + Math.floor(j/(scale.length));
      let note = scale[noteIndex]+octave;
      let position = {};
      if (note[1] !== '#') {
        xPos ++;
        position = { x: xPos, y: 0, z: 0 }
      } else {
        position = { x: xPos + 0.5, y: 0.25, z: -0.75 }
      }
      notes.push({
        note,
        position,
        index: j - i,
      });
    }
    return notes;
  },

  createPianoKey(note) {
    let key = document.createElement('a-box');
    key.setAttribute('piano-key', {note:note.note})
    key.setAttribute('position', note.position)
    this.el.appendChild(key)
  },

  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});