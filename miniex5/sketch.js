var tok;
var grammar;
var minText;
var mis;
var ran, ran1, ran2, ran3, ran4, ran5, ran6, ran7, ran8, ran9, ran11, ran12, ran13;

function preload(){
  minText = loadStrings('assets/catsinheat.txt');
  mis = loadImage('assets/chilimis.JPG');
}

function setup() {
  createCanvas (400, 350);
  textAlign(RIGHT);
  grammar = RiTa.untokenize(minText);
  tok = split(grammar," ");
  
}

function draw() {
  text("Press mouse button",  width/2, 20);
  
}

function mouseClicked() {
  background(220,20,60);
  image(mis, 140, 220, 120, 95);
  
 
  ran=tok[floor(random(tok.length))];
  ran1=tok[floor(random(tok.length))];
  ran2=tok[floor(random(tok.length))];
  ran3=tok[floor(random(tok.length))];
  ran4=tok[floor(random(tok.length))];
  ran5=tok[floor(random(tok.length))];
  ran6=tok[floor(random(tok.length))];
  ran7=tok[floor(random(tok.length))];
  ran8=tok[floor(random(tok.length))];
  ran9=tok[floor(random(tok.length))];
  ran11=tok[floor(random(tok.length))];
  ran12=tok[floor(random(tok.length))];
  ran13=tok[floor(random(tok.length))];
  
 
  text(ran + " " + ran2 + " " +ran3 + " "+ ran1, width/2, 75);
  text(ran4 + " " + ran5 + " " + ran6 + " " + ran13 + " " + ran7, width/2, 110);
  text(ran8 + " " + ran9 + " " + ran1 +  " " + ran11, width/2, 145);
  text(ran12 + " " + ran13 + " " + ran8 + " " + ran3 + " " + ran, width/2, 180);
  
}