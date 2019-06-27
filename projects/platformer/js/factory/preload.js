(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', '/projects/platformer/asset/collectable/WiiBulletBillMK8.png');
        game.load.image('platform', '/projects/platformer/asset/collectable/better platform.png');
        game.load.image('db', './asset/collectable/database.png');
        game.load.image('steve', '/projects/platformer/asset/collectable/Propellermushroom.png');
        game.load.image('grace', '/projects/platformer/asset/collectable/1up.png');
        game.load.image('kennedi', '/projects/platformer/asset/collectable/Mushroom2.PNG.png');
        game.load.image('max', '/projects/platformer/asset/collectable/403-4035190_super-leaf-nsmb2-super-mario-leaf.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
