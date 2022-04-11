



function setup() {
  createCanvas(400, 500);
  noStroke();
}
function draw() {
  let x = mouseX;
  let y = mouseY;
  // Inverse x
  let ix = width - mouseX; 
  // Inverse y
  let iy = height - mouseY;
  background(255,225,210);
  fill(153,204,255);
  ellipse(x, height/2, y, y);
  fill(153,153,255,175);
  ellipse(ix, height/2, iy, iy);
}