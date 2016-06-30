import Phaser from 'phaser';

export default class Meteor extends Phaser.Sprite {
  constructor({ game, x, y, asset, frame }) {
    super(game, x, y, asset, frame);
    game.physics.p2.enable(this);
  }
}