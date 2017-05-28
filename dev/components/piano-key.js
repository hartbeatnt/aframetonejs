const THREE = require('THREE')

AFRAME.registerComponent('piano-key', {
  schema: {
    note: {type: 'string', default: 'A4'}
  },
  init: function () {
    if (this.data.note[1] === "#") {
      var color = 'black';
      var width = 0.75;
      var height = 1.5;
      var depth = 2;
    }
    else {
      var color = 'white';
      var width = 0.9;
      var height = 1.0;
      var depth = 5.0;
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