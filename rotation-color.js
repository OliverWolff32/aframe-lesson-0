AFRAME.registerComponent('rotation-color', {
    
    init: function () {
        //console.log(document.querySelector('[recorder]').components.recorder);

        //document.querySelector('[recorder]').components.recorder.start()

    },

    tick: function () {
        let rotation = this.el.getAttribute('rotation');
        this.el.setAttribute('material', {color: 
            this.rgbToHex(this.getColor(rotation.x), 
            this.getColor(rotation.y),
            this.getColor(rotation.z))});
    },

    getColor: function (int) {
        return Math.floor((255/2)*Math.cos((-2/255)*int) + 255/2);
    },

    componentToHex: function (c) {
        var hex = Math.floor(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },
      
    rgbToHex: function (r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
});
