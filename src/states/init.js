import Phaser from 'phaser';

export default class Init extends Phaser.State {
  init(){
  }

  preload(){
  }

  create(game){
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);

    game.cursors = game.input.keyboard.createCursorKeys();
    game.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    
    this.state.start('Preload');
  }

  render(){
  }

  update(){
  }
}