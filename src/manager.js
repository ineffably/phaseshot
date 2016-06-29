import Phaser from 'phaser';

export default class Manager extends Phaser.State {
  init(){
    this.hasRendered = false;
    console.log('init');
  }

  preload(){
    console.log('preload');
  }

  create(){
    console.log('create');

  }

  render(){
    if(!this.hasRendered){
      console.log('render');
      this.hasRendered = true;
    }
    
  }

  udpate(){
    console.log('udpate');
  }
}