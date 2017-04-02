var x;
var y;
var heart;
function preload() {
  heart = createImg("assets/anatomicalheart.png");
}

function setup() {
  createCanvas(500, 600);
  x = 250;
  y = 300;
  background(255);
  heart.size(270, 400);
  heart.position(120, 100);
}

function draw() {
  noStroke();
  fill(255,int(random(59,180)),int(random(192,203)), 80);
  ellipse(x, y, 32, 32);

  var r = floor(random(4));

  switch (r) {
    case 0:
      x = x + 3;
      break;
    case 1:
      x = x - 3;
      break;
    case 2:
      y = y + 3;
      break;
    case 3:
      y = y - 3;
      break;
  }


}