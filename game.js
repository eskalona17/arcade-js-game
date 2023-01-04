class Game {
  constructor() {
    this.fx = new Fx();
    this.player = new Player();
    this.asteroid = new Asteroid();
    this.asteroidService = new AsteroidService();
  }

  init() {
    console.log("game initialized");
    this.fx.init();
    this.player.init();
    this.asteroidService.init(8);
  }

  resize() {
    console.log("game resizing");
  }

  update() {
    console.log("game updating");
    this.player.update();
    this.asteroidService.update();
  }

  render() {
    console.log("game rendering");
    this.fx.fillCanvas("#000");
    this.player.render();
    this.asteroidService.render();
  }
}
