import Phaser from 'phaser';

export default class Preload extends Phaser.State {
  init(){
  }

  preload(game){
    console.log('Preload.preload');

    game.load.atlas('shooter', 'images/SpaceShooter.png', 'images/SpaceShooter.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.image('stars', 'images/backgrounds/blue.png');
  }

  create() {
      this.state.start('Game');
  }
  
  render(){
  }

  update(){
  }
}


