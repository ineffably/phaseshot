import Phaser from 'phaser';

export default class Weapon {
  constructor(game, name = 'weapon', projectile = {}, projectileSpeed = 100, position = new Phaser.Point(), fireInterval = 1, parent = null){
    this.game = game;
    this.position = position;
    this.fireInterval = fireInterval;
    this.projectileSpeed = projectileSpeed;
    this.projectile = projectile;
    this.clipSize = 10;
    this.reloadSpeed = 1;
    this.ammoCount = 0;
    this.parent = parent;
  }

  fire(){
    const game = this.game;
    if (game.time.now > this.nextFire && this.projectile.countDead() > 0) {
      // this.nextFire = game.time.now + this.fireInterval;
      // var projectileSpeed = this.projectileSpeed; 
      // var rotation = this.parent.getRotation();
      // var parentVel = this.parent.body.velocity;

      // var projectile = this.projectile.getFirstExists(false);
      // projectile.reset(this.position.x + this.parent.position.x, this.position.y + this.parent.position.y);
      // projectile.position.setTo(projectile.position.x + (Math.cos(rotation) * 32), projectile.position.y + (Math.sin(rotation) * 32));

      // var vel = new Phaser.Point(parentVel.x, parentVel.y);
      // vel.x += Math.cos( rotation ) * projectileSpeed;
      // vel.y += Math.sin( rotation ) * projectileSpeed;
      // projectile.body.velocity = vel;
    }
  }
}