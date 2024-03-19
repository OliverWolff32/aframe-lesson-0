AFRAME.registerComponent('wave-color', {

    tick: function () {
        let z = this.el.getAttribute('position').z;
        let el = this.el;
        el.setAttribute('material', {color: 
            this.rgbToHex(Math.floor((z+30)*26), 130 - Math.floor((z+30)*26), 10)});
    },//                            up to 130, 10, 10
    
    componentToHex: function (c) {
        var hex = Math.floor(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },
      
    rgbToHex: function (r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
});
