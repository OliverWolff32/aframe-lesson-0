AFRAME.registerComponent('wave-boxes', {
    
    init: function () {
        let sceneEl = document.querySelector('a-scene');
        let boxEntity = document.createElement('a-entity')
        let boxesX = 10;
        let boxesY = 10;

        for (let i = 0; i < boxesX; i++) {
            for (let j = 0; j < boxesY; j++) {
                let boxI = document.createElement('a-entity');
                    
                    boxI.setAttribute('geometry', "primitive: box")
                    boxI.setAttribute('position', {x: i-boxesX/2 + 30, y: j-boxesY/2, z: -30});
                    boxI.setAttribute('scale', '0.6 0.6 0.6');
                    boxI.setAttribute('material', 'color: #445');

                    boxI.setAttribute('animation', this.animationString(i,j));
                    boxI.setAttribute('wave-color', '')
                    boxEntity.appendChild(boxI);
            }
        }
        sceneEl.appendChild(boxEntity);
    },

    animationString: function (i, j) {
        let delay = (i+j)*100;
        return 'property: object3D.position.z; from: -30; to: -25; dur: 1500; easing: easeInOutSine; loop: true; dir: alternate; delay: ' + delay.toString()
    },

    intToString: function(a, b, c) {
        return a.toString() + ' ' + b.toString() + ' ' + c.toString();
    }
  });
 