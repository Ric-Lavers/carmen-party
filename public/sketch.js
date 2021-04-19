let x, y, xSpeed, ySpeed, face, r, g, b;

function preload() {
  face = loadImage("carmen-face.png");
}

const getDistance = (a, b) =>
  Math.sqrt(a.x * a.x - b.x * b.x + a.y * a.y - b.y * b.y);

const checkCirclesOverlap = (a, b) => getDistance(a, b) <= a.radius + b.radius;

const players = [];
const radius = 70;
function setup() {
  // createCanvas(1600, 900);
  createCanvas(windowWidth, windowHeight);
  // x = random(width - radius);
  // y = random(height - radius);
  // x2 = random(width - radius);
  // y2 = random(height - radius);
  // xSpeed = 7;
  // ySpeed = 7;

  // Make this values random
  const createPlayer = () => ({
    x: random(width - radius),
    y: random(height - radius),
    radius: radius,
    xSpeed: 7,
    ySpeed: 7,
  });

  for (let i = 0; i < 5; i++) {
    players.push(createPlayer());
  }

  console.log("_PLAYER_1_", players[0]);
  console.log("_PLAYER_2_", players[1]);
  console.log(getDistance(players[0], players[1]));
  console.log(checkCirclesOverlap(players[0], players[1]));
}

function windowReradiusd() {
  reradiusCanvas(windowWidth, windowHeight);
}

function update() {
  players.forEach((player) => {
    // Add your movement logic here for each player
    player.x += player.xSpeed;
    players.forEach((otherPlayer) => {
      if (player !== otherPlayer && checkCirclesOverlap(player, otherPlayer)) {
        player.x -= player.xSpeed;
        player.xSpeed *= -1;
      }
    });
    player.y += player.ySpeed;
    players.forEach((otherPlayer) => {
      if (player !== otherPlayer && checkCirclesOverlap(player, otherPlayer)) {
        player.y -= player.ySpeed;
        player.ySpeed *= -1;
      }
    });
  });

  players.forEach((player) => {
    if (player.x + player.radius * 2 - 2 >= width) {
      player.xSpeed = -7;
      player.x = width - player.radius * 2;
    }
    if (player.x <= 0) {
      player.xSpeed = 7;
      player.x = 0;
    }
    if (player.y + player.radius * 2 - 2 >= height) {
      player.ySpeed = -7;
      player.y = height - player.radius * 2;
    }
    if (player.y <= 0) {
      player.ySpeed = 7;
      player.y = 0;
    }
  });

  // Add your collision logic here
  // players.forEach((player) => {
  //   players.forEach((otherPlayer) => {
  //     // console.log(
  //     //   "_CHECK_CIRCLES_OVERLAP_",
  //     //   checkCirclesOverlap(player, otherPlayer)
  //     // );
  //     if (player !== otherPlayer && checkCirclesOverlap(player, otherPlayer)) {
  //       //   console.log("_WUT_");
  //       //   //   // Add logic for making the player change direction
  //       //   player.xSpeed *= -1;
  //       //   // player.x += player.xSpeed;
  //       //   player.ySpeed *= -1;
  //       //   // player.y += player.ySpeed;
  //       // player.xSpeed = otherPlayer.xSpeed;
  //       // player.ySpeed = otherPlayer.ySpeed;
  //       // otherPlayer.xSpeed = player.xSpeed;
  //       // otherPlayer.ySpeed = player.ySpeed;
  //     }
  //   });
  // });
}

function draw() {
  update();
  background(0);

  // circle(x, y, radius);

  players.forEach((player) => {
    image(face, player.x, player.y, player.radius * 2, player.radius * 2);
  });

  // image(face, x, y, radius, radius);

  // x = x + xSpeed;
  // y = y + ySpeed;

  // if (x + radius - 2 >= width || x <= 0) {
  //   xSpeed = -xSpeed;
  // }
  // if (y + radius - 2 >= height || y <= 0) {
  //   ySpeed = -ySpeed;
  // }
}
