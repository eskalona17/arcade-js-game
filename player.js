class Player {
  constructor() {
    this.fx = new Fx();
    this.keyhandler = new keyHandler();
    this.img = null;
    this.laserSound = null;

    this.turnSpeed = 5;
    this.acceleration = 5;
    this.friction = 0.99;

    this.x = 0;
    this.y = 0;
    this.thrust = {
      x: 0,
      y: 0,
    };
    this.angle = 0;
    this.rotation = 0;
  }

  init() {
    this.fx.init();
    this.keyhandler.init();
    this.img = window.gui.getResource("player-img");
    this.laserSound = window.gui.getResource("laser-audio");

    this.x = this.fx.cnv.width / 2 - this.img.width / 2;
    this.y = this.fx.cnv.height / 2 - this.img.height / 2;
    this.thrust = {
      x: 0,
      y: 0,
    };
    this.angle = (270 / 180) * Math.PI;
    this.rotation = 0;
  }
  update() {
    this.rotation = 0;
    this.thrust.x = this.thrust.x * this.friction;
    this.thrust.y = this.thrust.y * this.friction;

    if (this.x > this.fx.cnv.width) {
      this.x = 0 - this.img.width / 2;
    }

    if (this.x < this.img.width < 0) {
      this.x = this.fx.cnv.width;
    }

    if (this.y > this.fx.cnv.height > 0) {
      this.y = 0;
    }

    if (this.y + this.img.width < 0) {
      this.y = this.fx.cnv.height;
    }

    if (this.keyhandler.keys.indexOf("ArrowUp") > -1) {
      this.thrust.x = this.acceleration * Math.cos(this.angle);
      this.thrust.y = this.acceleration * Math.sin(this.angle);
    }

    if (this.keyhandler.keys.indexOf("ArrowLeft") > -1) {
      this.rotation = (-this.turnSpeed / 180) * Math.PI;
    }

    if (this.keyhandler.keys.indexOf("ArrowRight") > -1) {
      this.rotation = (this.turnSpeed / 180) * Math.PI;
    }

    if (this.keyhandler.keys.indexOf(" ") > -1) {
      this.laserSounds.pause();
      this.laserSound.currentTime = 0;
      this.laserSound.play();
    }

    this.angle += this.rotation;
    this.x += this.thrust.x;
    this.y += this.thrust.y;
  }
  render() {
    this.fx.rotateAndDrawImage(this.img, this.x, this.y, this.angle);
  }
}
