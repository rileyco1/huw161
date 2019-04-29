var xPos=7;
var yPos=1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let c = color('cyan');
  fill(c);
  background('magenta');
  noStroke();
  rect(xPos, yPos, 100, 100);
  xPos=xPos+2;
  yPos=yPos+2;
  text(xPos,20,30);
  text(yPos,50,30);
  circle(xPos, yPos-150,50);
  if(xPos>450){
  xPos=7;
  yPos=1;
  }
}
