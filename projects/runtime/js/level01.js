var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:300},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:300},
                {type: 'sawblade',x:1200,y:groundY},
                {type: 'sawblade',x:1500,y:310},
                {type: 'sawblade',x:1800,y:300},
                {type: 'sawblade',x:2100,y:groundY},
                {type: 'sawblade',x:2400,y:310},
                {type: 'sawblade',x:2700,y:groundY},
                {type: 'sawblade',x:3000,y:310},
                {type: 'sawblade',x:400,y:300},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:300},
                {type: 'sawblade',x:1200,y:groundY},
                {type: 'sawblade',x:1500,y:310},
                {type: 'sawblade',x:1800,y:300},
                {type: 'sawblade',x:2100,y:groundY},
                {type: 'sawblade',x:2400,y:310},
                {type: 'sawblade',x:2700,y:groundY},
                {type: 'sawblade',x:3000,y:310},
                {type: 'sawblade',x:3300,y:300},
                {type: 'sawblade',x:3600,y:groundY},
                {type: 'sawblade',x:3900,y:300},
                {type: 'sawblade',x:4200,y:groundY},
                {type: 'sawblade',x:4500,y:310},
                {type: 'sawblade',x:4800,y:300},
                {type: 'sawblade',x:5100,y:groundY},
                {type: 'sawblade',x:5400,y:310},
                {type: 'sawblade',x:5700,y:groundY},
                {type: 'sawblade',x:6000,y:310},
        
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createEnemy(x,y) {
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.bitmap('/projects/circularity/img/goomba.png');
                redSquare.x = -25;
                redSquare.y = -25;
                enemy.addChild(redSquare);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -4;
                game.addGameItem(enemy);
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
                game.increaseScore(-25)
            };
            enemy.onProjectileCollision = function () {
                enemy.fadeOut();
            };
        }
        createEnemy(900, groundY-50);
        createEnemy(2700, groundY-50);
        createEnemy(1357, groundY-50);
    
    
        function createReward(x,y) {
            var reward =  game.createGameItem('reward',25);
            var reward1 = draw.bitmap('/projects/circularity/img/trophy.png');
                reward1.x = -25;
                reward1.y = -25;
                reward.addChild(reward1);
                reward.x = x;
                reward.y = y;
                reward.velocityX = -2;
                game.addGameItem(reward);
            reward.onPlayerCollision = function() {
               
                game.increaseScore(1000);
                game.changeIntegrity(50);
                reward.fadeOut(); 
                
            };
        }
        
        createReward(6200, groundY - 100);
    
    
    
    
    
    
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            if (gameItem.type === 'sawblade') {
                createSawBlade(gameItem.x, gameItem.y);
            }
        }
        
        function create1Up(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = -50;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);    
            var obstacleImage = draw.bitmap('/projects/circularity/img/1up.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        };
        create1Up(900,groundY);
        create1Up(1800, groundY);
        create1Up(2400,groundY);
        create1Up(3000,groundY);
        create1Up(3600,groundY);
        create1Up(4200,groundY);
        
        
    
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = y;
                game.addGameItem(myObstacle);    
            var obstacleImage = draw.bitmap('img/sawblade.png');
                myObstacle.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;
        };

    }
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}