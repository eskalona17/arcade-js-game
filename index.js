let game = new Game();
window.gui = new Gui(game);

window.onload = function () {
  console.log("loading...");
  window.gui.load([
    {
      id: "player-img",
      var: (playerImg = document.createElement("img")),
      file: "assets/Player.png",
    },
    {
      id: "asteroid-img",
      var: (asteroidImg = document.createElement("img")),
      file: "assets/Asteroid.png",
    },
    {
      id: "laser-audio",
      var: (laserAudio = document.createElement("audio")),
      file: "assets/Laser.mp3",
    },
    {
      id: "boom-audio",
      var: (boomAudio = document.createElement("audio")),
      file: "assets/Boom.png",
    },
  ]);
};

window.onresize = function () {
  console.log("resizing");
  window.gui.resize();
};
