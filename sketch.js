
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}
function draw() {
  background(0);
  let hr = hour();
  let mn = minute();
  let sc = second();
  textSize(50)
  noStroke();
  fill(255);
  text(hr+':'+mn+':'+ sc,100 ,395);

  strokeWeight(8);
  noFill();
  translate(200,200);
  rotate(-90);
  stroke(255,100,150);
  let end1 = map(sc,0,60 , 0, 360);
  arc(0, 0, 300, 300 ,0, end1);
  stroke(150,100,255);
  let end2 = map(mn,0,60 , 0, 360);
  arc(0, 0, 280, 280 ,0, end2);
  stroke(150,255,100);
  let end3 = map(hr % 12, 0, 12 , 0, 360);
  arc(0, 0, 260, 260 ,0, end3);

  push();
  rotate(end1);
  stroke(255);
  line( 0, 0,150 ,0)
  pop();

  push();
  rotate(end2);
  stroke(255);
  line( 0, 0,115 ,0)
  pop();

  push();
  rotate(end3);
  stroke(255);
  line( 0, 0,80 ,0)
  pop();

  strokeWeight(10);
  stroke(255,0,0);
  point(0,0);

}
