var rotc=10;
var rots=24;
var sWeight=8;

var snow;
var place;

function setup() {
  createCanvas(600,600);
  noLoop();
}



function draw() {
  background(135,206,235);
  stroke(255);
  strokeWeight(sWeight);
  push();
  translate(width/2, height/2);
  flake(0);
  pop();
  drawCirkel(0);
}

function drawCirkel(num){
push();
translate(width/2, height/2);
var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  pop();
}

function keyPressed(){
  redraw();
}

function flake (snow){
  var branchP=-height/10;
  
  if(snow < 7){
    line(0, 0, 0, branchP);
    translate(0, branchP);
    rotate(radians(random(-rotc,rotc)));
    
    
    if(random(10) < 15){
      scale(0.8);
      rotate(radians(rots));
      push();
      flake(snow + 1);
      pop();
      
      rotate(radians(-rots*2));
      push();
      flake(snow + 1);
      pop();
      
    } else{
      flake(snow);
    }
    }
 }