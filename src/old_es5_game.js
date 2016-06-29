(function() {
  var portWidth = 1280;
  var portSize = new Phaser.Point(portWidth, portWidth / 16 * 9);
  var worldSize = portSize;
  var cursor, fireButton;
  var go = {}

  function playerControls() {
    var p1 = go.player1;
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

    if (fireButton.isDown) {}

  }

  function preload(game) {
    game.load.atlas('shooter', 'images/SpaceShooter.png', 'images/SpaceShooter.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.image('stars', 'images/backgrounds/blue.png');
  };

  function create(game) {
    // setup world
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.world.setBounds(0, 0, 3600, 3600 / 16 * 9);

    // background stars
    go.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'stars');

    // create game objects
    go.player1 = game.add.sprite(portSize.x / 2, portSize.y / 2, 'shooter', 'playerShip1_blue.png');
    game.physics.p2.enable(go.player1);

    // camera
    game.camera.follow(go.player1);
    game.camera.scale.setTo(1, 1);

    // input
    cursors = this.input.keyboard.createCursorKeys();
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  }

  function update(game) {
    playerControls();
  }

  function render(game) {}

  var game = new Phaser.Game(portSize.x, portSize.y, Phaser.AUTO, 'phase-shot', {
    preload: preload,
    create: create,
    update: update,
    render: render
  });

}());