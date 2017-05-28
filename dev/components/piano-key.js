const THREE = require('three')

AFRAME.registerComponent('piano-key', {
  schema: {
    note: {type: 'string', default: 'A4'}
  },
  init: function () {
    let color, width, height, depth;
    if (this.data.note[1] === "#") {
      color = 'black';
      width = 0.75;
      height = 1.5;
      depth = 3;
    }
    else {
      color = 'white';
      width = 0.9;
      height = 1.0;
      depth = 4.5;
    }
    this.el.setAttribute('material', 'color', color); 
    this.el.setAttribute('geometry', {
      width,
      height,
      depth
    })
    this.el.setAttribute('click-tone','freq',this.data.note)
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});