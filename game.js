class Game {
  constructor() {
    this.fx = new Fx();
    this.player = new Player();
  }

  init() {
    console.log("game initialized");
    this.fx.init();
    this.player.init();
  }

  resize() {
    console.log("game resizing");
  }

  update() {
    console.log("game updating");
    this.player.update();
  }

  render() {
    console.log("game rendering");
    this.fx.fillCanvas("#000");
    this.player.render();
  }
}
