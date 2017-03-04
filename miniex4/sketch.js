var donut;
var posx = 300;
var posy = 300;
var speedx = 2;
var speedy = 1;
var back;

function preload(){
  donut = createImg("./cool/donut.gif");

}
function setup() {
  createCanvas(600, 600);
  back=color(255, 192, 203);
}

function draw() {
  background(back);
  donut.size(160, 123);
  donut.position(posx-80, posy-60.5);
  
   //gitter
  strokeWeight(3);
  stroke(255);
  
  for(var x = 0; x <= width; x += 75) {
    for(var y = 0; y <= height; y += 75) {
      fill(255);
      line(x, y, x, 600);
      line(y, x, 600, x);
    }
  }
  
  //bevægelse
  if (posx > width || posx < 0){
    speedx = speedx * -1;
  }
  if (posy > height || posy < 0){
    speedy = speedy * -1;
  }
  
  posx = posx + speedx;
  posy = posy + speedy;
  
  //højre væg, powderblue
  if(posx==width-2){
    back=color(176,224,230);
  }
  
  //nederste væg, lavender
  if(posy==height-2){
    back=color(230,230,250);
  }
  
  //venstre væg, aquamarine
  if(posx==width-598){
    back=color(127,255,212);
  }
  
  //øverste væg, pink
  if(posy==height-598){
    back=color(255, 192, 203);
  }
}