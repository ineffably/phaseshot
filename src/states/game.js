import Phaser from 'phaser';
import Player from '../prefabs/player';
import Background from '../prefabs/background';
import Meteor from '../prefabs/meteor';

export default class Game extends Phaser.State {
  init(){
  }

  preload(){
  }

  create(game){
    game.physics.p2.setImpactEvents(true);
    game.world.resize(5120, 5120 / 16 * 9);
    // game.world.setBounds(0, 0, 8000, 8000); // 3600 / 16 * 9
    
    const background = new Background({
      game: game,
      x: 0, 
      y: 0, 
      width: game.world.width, 
      height: game.world.height, 
      key: 'stars'
    });

    const player = new Player({
        game: game,
        x: game.portSize.x,
        y: game.portSize.y,
        asset: 'shooter',
        frame: 'playerShip1_blue.png'
    });

    game.camera.follow(player);
    game.camera.scale.setTo(1, 1);

    game.add.existing(background);
    this.spawnMeteors(game, 100);
    game.add.existing(player);
  }

  spawnMeteors(game, count = 100){
    // const brownMeteors = ['meteorBrown_big1.png', 'meteorBrown_big2.png', 'meteorBrown_big3.png', 'meteorBrown_big4.png'];
    const grayMeteors = ['meteorGrey_big1.png', 'meteorGrey_big2.png', 'meteorGrey_big3.png', 'meteorGrey_big4.png'];
    for(let i = 0; i < count; i++){
      let x = game.rnd.integerInRange(0, game.world.width);
      let y = game.rnd.integerInRange(0, game.world.height);
      let nextMeteor = grayMeteors[game.rnd.integerInRange(0, grayMeteors.length - 1)];
      game.add.existing(new Meteor({
        game: game,
        x: x,
        y: y,
        asset: 'meteors',
        frame: nextMeteor
      }));
    }
  }

  update(){
  }

}