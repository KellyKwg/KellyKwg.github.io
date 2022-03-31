

let img;

function preload() {
  img = loadImage('https://i.pinimg.com/474x/99/e6/af/99e6af0602189a28d3fe731565aecd6b--the-grass-baby-ducks.jpg');
function setup() {
  createCanvas(600, 600);
  
  img.resize(width, height);
  
  background(0);
  noStroke();
}

function draw() {
  
  img.loadPixels();
  
  let pixelX = random(width);
  let pixelY = random(height);
  let pixelColor = img.get(pixelX, pixelY);


  fill(pixelColor);
  circle(pixelX, pixelY, 10);
}