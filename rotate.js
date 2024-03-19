AFRAME.registerComponent('rotate', {
    schema: {
        type: 'vec3'
    },

    tick: function () {
        this.rotate(); 
    },

    rotate: function() {
        let el = this.el;
        let xSpeed = this.data.x;
        let ySpeed = this.data.y;
        let zSpeed = this.data.z;


        el.object3D.rotation.x += Math.PI/180 * xSpeed/10;
        el.object3D.rotation.y += Math.PI/180 * ySpeed/10;
        el.object3D.rotation.z += Math.PI/180 * zSpeed/10;
    }
});
