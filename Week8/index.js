

let img;

function preload() {
  img = loadImage('https://kellykwg.github.io/Week8/whiteduck.jpeg');

}
function setup() {
  createCanvas(600, 600);


  img.resize(600,600);
  
  background(0);
  noStroke();
}

function draw() {


  img.loadPixels();
  
  let pixelX = random(width);
  let pixelY = random(height);
  let pixelColor = img.get(pixelX, pixelY);


  fill(pixelColor);
  circle(pixelX, pixelY, 15);
}

function mousePressed() {
  background(0);
}
