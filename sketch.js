/* This program simply allows the user to move around an image Nicolas Cage.
It loads a background image, then the interactive image. The interactive image has a transparent effect put on it.
He is in space for he makes up all living things.
I was having a hard time coming up with a good idea for this project, so I decided to make something that is vaguely entertaining while still containing interactive elements for the user to use.
 */

var sound;
var img;
var offset = 0;//sets image postion
var easing = 0.05//moves the image closer to the cursor if the distance is more than one pixel.


function preload(){
  img = loadImage('tadpolegalaxy.jpg');//loads the image to use as the background
  sound = loadSound('lordquotes.mp3');//loads mp3 file to be utilized later
}

function setup() {
  createCanvas(1738, 790);//sets dimensions of background image
  image(img, 0, 0)//sets postion of background image
  loadPixels();//allows the image to actually appear
  img = loadImage('onetruegod.jpg');//loads the interactive image

}

function draw() {
  image(img, 0, 100);
  var dx = (mouseX-img.width/2) - offset;//allows the image to follow the cursor
  offset += dx * easing;
  tint(75, 50);//sets the opacity of the interactive image
  image(img, offset, 100);// the "100" makes the Nicolas Cage picture more center
}

function mousePressed() {//plays series of Nicolas Cage quotes when the mouse is pressed.
  if ( sound.isPlaying() ) {
    sound.stop();//stops sound when mouse is pressed
  } else {
    sound.play();
  }
}
