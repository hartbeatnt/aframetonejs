const THREE = require('three');

AFRAME.registerComponent('mouse-controls', {
  schema: {},
  init: function () {
      this.clicked = false;
      this.raycaster = new THREE.Raycaster();
      this.scene = this.el.sceneEl;
      this.domEl = this.scene.renderer.domElement;
      this.domEl.addEventListener('mousemove', e => this.onMouseMove(e));
      this.domEl.addEventListener('mousedown', e => this.onMouseDown(e));
      this.domEl.addEventListener('mouseup', e => this.onMouseUp(e));
      this.domEl.addEventListener('click', e => this.onClick(e));
      this.domEl.addEventListener('dblclick', e => this.onDblClick(e));
      this.domEl.addEventListener('scroll', e => this.onScroll(e));
      this.domEl.addEventListener('wheel', e => this.onWheel(e));
      this.intersects = [];
      this.prevIntersects = [];
  },
  
  onMouseMove: function(e){
    const mouse = new THREE.Vector2(
      (e.offsetX / this.domEl.clientWidth)  *  2 - 1,
      (e.offsetY / this.domEl.clientHeight) * -2 + 1 
    );
    this.raycaster.setFromCamera(mouse, this.scene.camera);
    this.intersects = this.raycaster.intersectObjects(this.scene.object3D.children.map(el=>{
      return el.children[0]
    }));
    let prev = this.prevIntersects;
    // this.intersects.forEach((intersect, i) => {
    //   let el = intersect.object.el;
    //   if (!el) return;
    //   let comps = el.components;
    //   return i === 0
    //     ? (
    //         comps.onMouseEnter 
    //           && ( !prev[0] || prev[0].object !== intersect.object ) 
    //           && comps.onMouseEnter(),
    //         comps.onMouseOver 
    //           && comps.onMouseOver()
    //       )
    //     : (
    //         comps.onHidMouseEnter 
    //           && !prev.map(()=>{
    //             return intersect.object
    //           }).includes(intersect.object) 
    //           && comps.onHidMouseEnter(),
    //         comps.onHidMouseOver 
    //           && comps.onHidMouseOver()
    //       )
    // })
    // prev.forEach((intersect, i) => {
    //   const ent = intersect.object.UNI;
    //   if (!ent) return;
    //   let comps = ent.components;
    //   return i === 0
    //     ? comps.onMouseExit 
    //         && ( !this.intersects[0] || this.intersects[0].object !== intersect.object ) 
    //         && comps.onMouseExit()
    //     : comps.onHidMouseExit 
    //         && !this.intersects.map((newIntersect)=>{
    //           return newIntersect.object
    //         }).includes(intersect.object) 
    //         && comps.onHidMouseExit()
    // })
    // this.prevIntersects = this.intersects
  },
  onMouseDown: function(e){
    
  },
  onMouseUp: function(e){

  },
  onClick: function(e){
    this.intersects[0] && this.intersects[0].object.el.emit('click');
  },
  onDblClick: function(e){

  },
  onScroll: function(e){

  },
  onWheel: function(e){

  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});