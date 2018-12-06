function setup() {
  createCanvas(710, 400);
  background(102);/ put setup code here
}

function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);/ put drawing code here
}

function variableEllipse(x, y, px, py) {
  var speed = abs(x-px) + abs(y-py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}
