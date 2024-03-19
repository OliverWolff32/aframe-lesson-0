AFRAME.registerComponent('random-boxes', {
    
    init: function () {
        let sceneEl = document.querySelector('a-scene');
        let boxEntity = document.createElement('a-entity')
        let boxesX = 30;
        let boxesY = 30;

        for (let i = 0; i < boxesX; i++) {
            for (let j = 0; j < boxesY; j++) {
                let boxI = document.createElement('a-entity');
                    
                    boxI.setAttribute('geometry', "primitive: box")
                    boxI.setAttribute('position', {x: i-boxesX/2, y: j-boxesY/2, z: -30});
                    boxI.setAttribute('scale', '0.6 0.6 0.6');
                    
                    boxI.setAttribute('rotate', this.intToString(i/2, j/2, 15));
                    boxI.setAttribute('rotation-color', '');
                    boxEntity.appendChild(boxI);
            }
        }
        sceneEl.appendChild(boxEntity);
    },
    intToString: function(a, b, c) {
        return a.toString() + ' ' + b.toString() + ' ' + c.toString();
    }
  });
 