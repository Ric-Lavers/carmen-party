let face;
let playersImgUrls = [];

const carmensFace =
  "https://res.cloudinary.com/aeonknight/image/upload/c_scale,h_300,r_1000,w_300/v1618838008/carmen-party/carmen-face_lw2yo9.png";

async function preload() {
  await fetch("/api/cloudinary/carmens-friends")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      playersImgUrls = data;
      playersImgUrls.forEach((imgUrl) => {
        players.push(createPlayer(imgUrl));
      });
    });
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getDistance = (a, b) =>
  Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));

const checkCirclesOverlap = (a, b) => getDistance(a, b) <= a.radius + b.radius;

const players = [];
const radius = 70;
const createPlayer = (imgUrl) => ({
  x: random(width - radius),
  y: random(height - radius),
  radius: getRandomInt(radius - 25, radius + 25),
  xSpeed: 7,
  ySpeed: 7,
  face: loadImage(imgUrl),
});

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Make this values random

  // for (let i = 0; i < 3; i++) {
  //   players.push(createPlayer(carmensFace));
  // }

  // console.log("_PLAYER_1_", players[0]);
  // console.log("_PLAYER_2_", players[1]);
  // console.log(getDistance(players[0], players[1]));
  // console.log(checkCirclesOverlap(players[0], players[1]));
}

function windowReradiusd() {
  reradiusCanvas(windowWidth, windowHeight);
}

const getNearestPlayerX = (player) => {
  let minDistance = 999999999;
  players.forEach((otherPlayer) => {
    if (
      player !== otherPlayer &&
      checkCirclesOverlap(
        { ...player, x: player.x + player.xSpeed },
        otherPlayer
      )
    ) {
      minDistance = Math.min(
        Math.abs(player.x - otherPlayer.x) - player.radius - otherPlayer.radius,
        minDistance
      );
    }
  });
  return minDistance;
};

const getNearestPlayerY = (player) => {
  let minDistance = 999999999;
  players.forEach((otherPlayer) => {
    if (
      player !== otherPlayer &&
      checkCirclesOverlap(
        { ...player, y: player.y + player.ySpeed },
        otherPlayer
      )
    ) {
      minDistance = Math.min(
        Math.abs(player.y - otherPlayer.y) - player.radius - otherPlayer.radius,
        minDistance
      );
    }
  });
  return minDistance;
};

const normalize = (value) => (value > 0 ? 1 : -1);

function update() {
  players.forEach((player) => {
    const minDistanceX = getNearestPlayerX(player);
    const xNormalized = normalize(player.xSpeed);
    player.x +=
      xNormalized * (Math.min(Math.abs(player.xSpeed), minDistanceX) - 0.1);

    if (minDistanceX <= Math.abs(player.xSpeed)) {
      player.xSpeed *= -1;
    }

    const minDistanceY = getNearestPlayerY(player);
    const yNormalized = normalize(player.ySpeed);
    player.y +=
      yNormalized * (Math.min(Math.abs(player.ySpeed), minDistanceY) - 0.1);

    if (minDistanceY <= Math.abs(player.ySpeed)) {
      player.ySpeed *= -1;
    }
  });

  players.forEach((player) => {
    if (player.x + player.radius >= width) {
      player.xSpeed = -7;
      player.x = width - player.radius;
    }
    if (player.x <= player.radius) {
      player.xSpeed = 7;
      player.x = player.radius;
    }
    if (player.y + player.radius >= height) {
      player.ySpeed = -7;
      player.y = height - player.radius;
    }
    if (player.y <= player.radius) {
      player.ySpeed = 7;
      player.y = player.radius;
    }
  });
}

function draw() {
  update();
  background(0);

  players.forEach((player) => {
    image(
      player.face,
      player.x - player.radius,
      player.y - player.radius,
      player.radius * 2,
      player.radius * 2
    );
  });
}
