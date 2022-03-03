let x= 0;//start X position

let y= 490;//start Y position

let speed = 0;//controls de speed of the ball

let bounce = 1;//bounces the ball

let earMoveX = 0;

let earMoveY = 0;

let move= 10;

let mic;

let wallpaper1;

let wallpaper2;

let sketchStarted = false;


function setup() {
  createCanvas(500, 500);


  createButton("start").mousePressed(startSketch);
  mic = new p5.AudioIn();
  mic.start();



  move = (mouseX);

  wallpaper1 = new wallpaper(650, -350, 90, .5);

  wallpaper2 = new wallpaper(525, -100, 80, 1.23 );

  wallpaper3 = new wallpaper(450, -350, 45, .25);

  wallpaper4 = new wallpaper(525, -100, 60, .89 );

  wallpaper5 = new wallpaper(600, -10, 60, 1 );

  wallpaper6 = new wallpaper(300, -350, -20, .25);


}

function draw() {

  if(sketchStarted){
    move=map(mic.getLevel(), 0, 1, 350, 355)

    background(173,216,230);

    angleMode(DEGREES);

    //console.log(move);

    console.log("mic level " + mic.getLevel());

    //console.log( 'my mouse X is: ' + mouseX);

    //console.log( 'my mouse Y is: ' + mouseY);

   // wallpaper(850, -45, 90);

    wallpaper1.display();
    wallpaper2.display();
    wallpaper3.display();
    wallpaper4.display();
    wallpaper5.display();
    wallpaper6.display();

    wallpaper1.move();
    wallpaper2.move();
    wallpaper3.move();
    wallpaper4.move();
    wallpaper5.move();
    wallpaper6.move();

    ground();

    ears();

    head();

    face();

    body();

    stomach();

    feet();

    mouth();

    waterbowl();

    eyes();

    bone(width * -.21, height * -.3, move);

    earMoveX = map(mouseX, 0, width, -22, 10,true);

    earMoveY = map(mouseY, 0, height, -15, 10, true);

    ball();

    startSketch();
  }

}


function startSketch(){
    mic = new p5.AudioIn();
    mic.start();
    sketchStarted = true;
    console.log('start sketch!')
}

function ball(){
  //makes ball move a certan amount after each "draw" loop, realative to MouseY position.
    speed = mouseY/30 * bounce;
    x= x + speed;

    //creates ball
push();
  noStroke();
  fill(255,0, 0)
  ellipse (x, y, 40, 40);
pop();
    //call "-bounce" when ball hits top or lower screen,inverting the y movement direction.
  if (x <=0 || x >=height){
    bounce = bounce *-1;
  }
}

function ears(){
push();
translate(width * 0, height * 0);
  strokeWeight(2);
  fill(16,16,1)
  triangle(width * .644, height * .15, width * .68+ earMoveX, height * .43+ earMoveY, width * .75,height * .15);
  triangle(width * .06, height * .15, width * .116+ earMoveX, height * .43+ earMoveY, width * .172, height * .15);
pop();
}

function bone(xPos, yPos, rotation){
  push();
  noStroke();
  translate(xPos, yPos);
  rotate(move);
  fill(255, 255, 255);
  circle(width * .4, height * .84, width * .06);
  circle(width * .4, height * .78, width * .06);
  circle(width * .58, height * .84, width * .06);
  circle(width * .58, height * .78, width * .06);
  rect(width * .4, height * .78, width * .18, height * .06);
pop();
}

function eyes(){
push();
translate(width * 0, height * 0);
//inner lft eye
  fill(0,0,0);
  circle(width * .29, height * .29, width * .04);
//lft spot
  fill(255,255,255)
  circle(width * .3, height * .27, width * .02);
//outer rt eye
  fill(101,67,33);
  circle(width * .5208, height * .29, width * .09);
//inner rt eye
  fill(0,0,0);
  circle(width * .5208, height * .29, width * .04);
//rt spot
  fill(255,255,255);
  circle(width * .5368, height * .27, width * .02);
pop();
}

function mouth(){
push();
translate(width * 0,height * 0);
  line(width * .404, height * .356, width * .404, height * .39)
  line(width * .37, height * .4, width * .404, height * .39)
  line(width * .44, height * .4, width *  .404, height *  .39)
pop();
}

function head(){
push();
translate(width * 0,height * 0)
  stroke(0, 0, 0);
  strokeWeight(2);
  fill(16,16,1)
  rect(width * .355, height * .46, width * .11, height * .11);
  rect(width * .162, height * .12, width * .49, height * .37, width * .04);
pop();
}

function face() {
push();
translate(width * 0,height * 0)
//lower face
  fill(101,67,33);
  rect(width * .162, height * .35, width * .49, height * .14, width * .04);
//nose
  fill (0,0,0);
  circle(width * .404,height * .35, width * .04);
//outer rt eye
  fill(101,67,33);
  circle(width * .5208, height * .29, width * .09);
//outer lft eye
  fill(101,67,33);
  circle(width * .29, height * .29, width * .09);
pop();
}

function body(){
push();
translate(width * 0,height * 0)
  fill(16,16,1);
  square(width * .27, height * .58, width * .14, height * .04);
  fill(16,16,1);
  square(width * .4, height * .58, width * .14, height * .04);
  square(width * .3048, height * .52, width * .2, height * .04);
  line(width * .35, height * .7, width * .35, height * .6);
  line(width * .464,height * .7, width * .464, height * .6);
pop();
}

function stomach(){
push();
translate(width * 0,height * 0)
  fill(101,67,33);
  rect(width * .352, height * .608, width * .11, height * .11);
pop();
}

function feet(){
push();
translate(width * 0,height * 0)
  fill(101,67,33);
  circle(width * .296, height * .7, width * .07);
  circle(width * .51, height * .7, width * .07);
  circle(width * .326, height * .7, width * .076);
  circle(width * .484, height * .7, width * .076);
pop();
}


function ground(){
push();
translate(width * 0, height * 0);
  fill(193, 154, 107)
  rect(width * 0, height * .6, width * 1, height * 1);
pop();
}

function waterbowl(){
push();
translate(width* 0, height *0);
  rotate(0);
  strokeWeight(1);
  fill(194, 24, 7)
  rect(width * .65, height * .8, width * .2, height * .07);
  fill(137, 237, 240);
  ellipse(width * .75, height * .8, width* .2, height * .04);
  noStroke();
  fill(255, 255, 255)
  ellipse(width * .69, height * .8, width* .08, height * .007);
  ellipse(width * .75, height * .79, width* .05, height * .007);
  ellipse(width * .767, height * .812, width* .05, height * .007);
pop();
}
