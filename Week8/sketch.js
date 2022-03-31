

let img;

function preload() {
  img = loadImage('https://kellykwg.github.io/Week8/duck.jpeg');

}
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
  circle(pixelX, pixelY, 20);
}