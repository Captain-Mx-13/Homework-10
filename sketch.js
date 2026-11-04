function setup() {
  createCanvas(700, 400);
  noStroke();
}

function draw() {
  background(171, 141, 237);

  //sunlines
  stroke(255, 214, 123);
  strokeWeight(10);
  line(350, 150, 0, 80);
  noStroke();

  stroke(255, 214, 123);
  strokeWeight(10);
  line(350, 150, 300, 0);
  noStroke();

  stroke(255, 214, 123);
  strokeWeight(10);
  line(350, 150, 500, 0);
  noStroke();

  stroke(255, 214, 123);
  strokeWeight(10);
  line(350, 150, 700, 200);
  noStroke();

  stroke(255, 214, 123);
  strokeWeight(10);
  line(350, 150, 250, 300);
  noStroke();
 
  // hills
  fill(232, 139, 125);
  ellipse(400, 300, 350, 180);

  fill(237, 168, 90);
  ellipse(100, 300, 450, 200);

  fill(255, 125, 85);
  ellipse(600, 300, 250, 100);

  // ground
  fill(255, 136, 180);
  rect(0, 290, 700, 120);

  // sun
  fill(255, 188, 38);
  circle( width /2, 150, 80);

  //clouds
  fill(255);
  ellipse(100, 80, 80, 30);
  fill(255);
  ellipse(130, 95, 80, 30);
  fill(255);
  ellipse(145, 70, 80, 30);

  fill(255);
  ellipse(600, 70, 100, 40);
  fill(255);
  ellipse(630, 855, 100, 40);
  fill(255);
  ellipse(645, 60, 100, 40);

  fill(255);
  ellipse(450, 160, 70, 20);
  fill(255);
  ellipse(480, 165, 70, 20);
  fill(255);
  ellipse(495, 155, 70, 20);

  fill(255);
  ellipse(200, 140, 70, 20);
  fill(255);
  ellipse(230, 130, 70, 20);
  fill(255);
  ellipse(230, 150, 70, 20);
  fill(255)
  ellipse(240, 140, 70, 20)
}