import Phaser from 'phaser';
import Player from '../prefabs/player';

export default class Game extends Phaser.State {
  init(){
  }

  preload(){
  }

  create(game){
    console.log('Game.create');
    
    this.player = new Player({
        game: game,
        x: game.portSize.x / 2,
        y: game.portSize.y / 2,
        asset: 'shooter',
        frame: 'playerShip1_blue.png'
    });

    game.stage.addChild(this.player);

    game.camera.follow(this.player);
    game.camera.scale.setTo(1, 1);
      
  }

  playerControls(){

  }

  update(){
 
  }

}