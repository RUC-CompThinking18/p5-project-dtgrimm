// This program simply allows the user to move around an image Nicolas Cage.
//It loads a background image, then the interactive image. The interactive image has a transparent effect put on it.
// He is in space for he makes up all living things.

var sound;
var img;
var offset = 0;
var easing = 0.05//moves the image closer to the cursor if the distance is more than one pixel.

function preload(){
  sound = loadSound('lordquotes.mp3');
}



function preload(){
  img = loadImage('tadpolegalaxy.jpg');//loads the image to use as the background
}

function setup() {
  createCanvas(1738, 790);//sets dimensions of background image
  image(img, 0, 0)//sets postion of background image
  loadPixels();//allows the image to actually appear
  img = loadImage('onetruegod.jpg');//loads the interactive image

}

function draw() {
  image(img, 0, 100);//
  var dx = (mouseX-img.width/2) - offset;//allows the image to follow the cursor
  offset += dx * easing;
  tint(75, 50);//sets the opacity of the interactive image
  image(img, offset, 100);
}

function mousePressed() {
  if ( sound.isPlaying() ) {
    sound.stop();
  } else {
    sound.play();
  }
}
