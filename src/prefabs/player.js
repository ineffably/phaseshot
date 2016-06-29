import Phaser from 'phaser';

export default class Player extends Phaser.Sprite {
  constructor({ game, x, y, asset, frame }) {
    super(game, x, y, asset, frame);
    game.physics.p2.enable(this);
  }

  create(){
  }

  init(){
  }

  render(){
  }

  playerControls(game){
    const cursors = game.cursors;
    const p1 = this;
    
    if (cursors.up.isDown) {
      p1.body.thrust(400);
    }
    
    if (cursors.down.isDown) {
      p1.body.reverse(400);
    }
    
    if (cursors.left.isDown) {
      p1.body.rotateLeft(100);
    } else if (cursors.right.isDown) {
      p1.body.rotateRight(100);
    } else {
      p1.body.setZeroRotation();
    }
    // if (fireButton.isDown) {}       

  }

  update(){
    const game = this.game;
    this.playerControls(game);

  }
}