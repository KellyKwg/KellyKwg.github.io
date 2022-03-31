

let img;

function preload() {
  img = loadImage('https://kellykwg.github.io/Week8/duck.jpeg');

  // Click the > menu to the left and look in
  // the images directory for more images to try!
  // Or upload your own image!x
  // URLs also work, like this:
  // img = loadImage('https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg');
}
function setup() {
  createCanvas(600, 600);

  // Resize the image so it fits on the screen.
  img.resize(width, height);
  
  background(255);
  noStroke();
}

function draw() {

  // Get the color of a random pixel.
  img.loadPixels();
  
  let pixelX = random(width);
  let pixelY = random(height);
  let pixelColor = img.get(pixelX, pixelY);

  // Paint that pixel with a circle.
  fill(pixelColor);
  circle(pixelX, pixelY, 10);
}