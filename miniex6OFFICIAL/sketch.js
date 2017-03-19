var rotc=10;
var rots=40;
var sWeight=10;

var snow;
var place;
var time=1;

function setup() {
  createCanvas(600,600);
  frameRate(9000);
  background(135, 206, 235);
}


function draw() {
  time=time+1;
  if(time>9){
    noLoop();
    time=0;
  }
  stroke(255);
  strokeWeight(sWeight);
  
  push();
  translate(width/2, height/2);
  drawCirkel(9);
  flake(0);
  pop();
}

function drawCirkel(num){
var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
}

function keyPressed(){
  loop();
  background(135,206,235);
}

function flake (snow){
  var branchP=-height/10;
  
  if(snow < 4){
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