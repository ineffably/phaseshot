import Phaser from 'phaser';

export default class Background extends Phaser.TileSprite {
  constructor({game, x, y, width, height, key, frame }){
    super(game, x, y, width, height, key, frame);
  } 
}

/*
game	Phaser.Game	
A reference to the currently running game.

x	number	
The x coordinate (in world space) to position the TileSprite at.

y	number	
The y coordinate (in world space) to position the TileSprite at.

width	number	
The width of the TileSprite.

height	number	
The height of the TileSprite.

key	string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture	
This is the image or texture used by the TileSprite during rendering. It can be a string which is a reference to the Phaser Image Cache entry, or an instance of a RenderTexture, PIXI.Texture or BitmapData.

frame	string | number	
If this TileSprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
*/