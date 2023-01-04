class Game {
  constructor() {
    this.fx = new Fx();
    this.player = new Player();
    this.asteroid = new Asteroid();
  }

  init() {
    console.log("game initialized");
    this.fx.init();
    this.player.init();
    this.asteroid.init();
  }

  resize() {
    console.log("game resizing");
  }

  update() {
    console.log("game updating");
    this.player.update();
    this.asteroid.update();
  }

  render() {
    console.log("game rendering");
    this.fx.fillCanvas("#000");
    this.player.render();
    this.asteroid.render();
  }
}
