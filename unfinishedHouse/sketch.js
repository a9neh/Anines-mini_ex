var xSlider;
var smirk;
var button;

function preload() {
//preloading smirkface
  smirk = loadImage('/assets/smirkface.png');
}

function setup() {
  createCanvas(900,600);
  
  //creating window
  var window = createElement('textArea');
  window.input(myInputEvent);
  window.position(320,300);
  window.size(130, 60);
  window.style("max-width", "130px");
  window.style("max-height", "60px");
  
  button = createButton('Submit');
  button.position(320, 370);
  button.mouseClicked(secret);

  //creating slider
  xSlider = createSlider(0, 80, 80);
  xSlider.position(450, 450);
  xSlider.hide();
  
  //i want the slider to appear when the box is checked, and also the box to disappear
function myCheckedEvent() {
  if (this.checked()) {
    console.log("Checking!");
    xSlider.show();
    this.hide();
  } else {
    console.log("Unchecking!");
    xSlider.hide();
  }
}
  //creating and positioning checkbox
  var checkbox = createCheckbox();
  checkbox.position(540, 380);
  checkbox.changed(myCheckedEvent);
  
  
  //clouds
  sky1 = new Sky();
  sky2 = new Sky();
}


// secret-submission which doesn't work
function secret() {
  var yourSecret = myInputEvent();
  greeting.html('hello '+yourSecret+'!');
  this.value('');
}

function draw() {
  background(135,206,235);
  
  //grass
  fill(60,179,113);
  noStroke();
  rect(0, 450, 900, 150);
  
  //hus
  fill(255,192,203);
  noStroke();
  rect(300, 250, 300, 200);
  
  //bag døren
  fill(5);
  noStroke();
  rect(480, 300, 80, 150);
  image(smirk , 500, 330, 40, 40);
  
  //dør der kan åbnes
  var x = xSlider.value();
  fill(221,160,221);
  noStroke();
  rect(480, 300, x, 150);
  
  //tag
  fill(105);
  noStroke();
  triangle(280, 250, 450, 150, 620, 250);
  
  sky1.skydis1();
  sky2.skydis2();
}

function myInputEvent(){
console.log('you are typing: ', this.value());
}
  
function Sky() {
  //cumulus
  this.skydis1=function() {
  fill(255);
  ellipse(575, 100, 100,80);
  ellipse(650, 100, 80,80);
  ellipse(725, 100, 100,80);
  ellipse(620, 75, 80, 80);
  ellipse(680, 75, 80, 80);
  ellipse(620, 125, 80,80);
  ellipse(680, 125, 80,80);
  }

  this.skydis2=function() {
  //cumulus2
  fill(255);
  ellipse(120, 200, 40,30);
  ellipse(85, 202, 48,40);
  ellipse(60, 202, 48,25);
  ellipse(100, 205, 40,30);
  ellipse(100, 195, 30,30);
  ellipse(100, 195, 30,30);
  ellipse(80, 195, 30,30);
  ellipse(67, 192, 30,20);
}
}