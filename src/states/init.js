import Phaser from 'phaser';

export default class Init extends Phaser.State {
  init(){
  }

  preload(){
  }

  create(game){
    console.log('Init.create');
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.world.setBounds(0, 0, 3600, 3600 / 16 * 9);

    game.cursors = game.input.keyboard.createCursorKeys();
    game.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    
    this.state.start('Preload');
  }

  render(){
  }

  update(){
  }
}