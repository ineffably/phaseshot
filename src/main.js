// https://github.com/lean/phaser-es6-webpack
// https://github.com/belohlavek/phaser-es6-boilerplate
// https://github.com/cstuncsik/phaser-es6-demo
import 'pixi';
import 'p2';
import Phaser from 'phaser';

import * as states from './states';

const portWidth = 1280;
const portSize = new Phaser.Point(portWidth, portWidth / 16 * 9); 
const game = new Phaser.Game(portSize.x, portSize.y, Phaser.AUTO);
game.portSize = portSize;

Object.keys(states).forEach(state => game.state.add(state, states[state]));

game.state.start('Init');