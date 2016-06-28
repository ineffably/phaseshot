// https://github.com/lean/phaser-es6-webpack
// https://github.com/belohlavek/phaser-es6-boilerplate
// https://github.com/cstuncsik/phaser-es6-demo

import 'pixi';
import 'p2';
import 'phaser';

class Game extends Phaser.Game {
  constructor() {
    const portWidth = 1280;
    const portSize = new Phaser.Point(portWidth, portWidth / 16 * 9);
    const worldSize = portSize;

    super(portSize.x, portSize.y, Phaser.AUTO, 'phase-shot', null);

  }
}


window.game = new Game();