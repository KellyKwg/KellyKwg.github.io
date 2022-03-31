

let img;

function preload() {
  img = loadImage('https://organicfeeds.com/wp-content/uploads/2021/03/How-To-Raise-A-Baby-Duck-scaled-1.jpg');
function setup() {
  createCanvas(600, 600);
  
  img.resize(width, height);
  
  background(255);
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