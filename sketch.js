let x;  //Declares speed of x position of logo
let y;  //Declares speed of y position of logo

let xspeed; //Constant speed
let yspeed;

let dvd;

let r, g, b; //Declares colours for alterations later

function preload() {
  dvd = loadImage("dvdlogo.png"); //Loads DVD logo
}

function setup() {
  createCanvas(windowWidth, windowHeight); //sets width to screen size
  x = random(width); //Random start point
  y = random(height);
  xspeed = 5; //Initialises speed of 5
  yspeed = 5;
  pickColour();
}

function pickColour() {
  r = random(100, 256); //Initialises randomisation of colours between 100 and 255
  g = random(100, 256);
  b = random(100, 256);

}

function draw() {
  background(0); //Background = black

  tint(r, g, b); //Changes colours of the r, g, b values
  image(dvd, x, y); //Draws dvd logo and makes it follow a constant speed of 5


  x = x + xspeed; //DVD logo travels at x/y and it's position is +5 all the time by the x/yspeed
  y = y + yspeed;

  if (x + dvd.width >= width) { //If hits a side then the x-speed reverses which causes it to go back
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColour(); //Also changes colour
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColour();
  }

  if (y + dvd.height >= height) { //Same thing but for y
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColour();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColour();
  }
}
