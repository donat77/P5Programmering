let x = 200;
let y = 200;
let a;
let b;
let d = 50;
let speed = 5;

function preload() {
  img = loadImage("mus.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(x, y, d);
  x += speed;

  if (x > width - d / 2 || x < d / 2) {
    speed = -speed;
  }
}
