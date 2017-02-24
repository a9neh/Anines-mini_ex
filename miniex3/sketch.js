var mySound;
var bananana;
var c;
function preload() {
  mySound = loadSound('sound3/empirestate.m4a'); 
  bananana = createImg("./images/bananana.gif");
}

function setup() {
createCanvas(820, 600);
mySound.play();


//prikcirkel
frameRate(10); 
}
function draw() {
  bananana.size(150,150)
  bananana.position(333, 219);
  background (255, 192, 203, 20);
  push();
  translate(width/2, height/2); 
  var cir = 360/9*(frameCount%9); 
  rotate(radians(cir)); 
  noStroke(); 
  fill(255, 255, 0); 
  rect(120, 0, 50, 25); 
  pop(); 
  
}