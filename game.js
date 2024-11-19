let gameState = "start"; // "start", "play", "end"
let ballX = 300;
let ballY = 100;
let velocityY = 0;
let acceleration = 0.1;
let thrust = -0.2;
let goalY = 540;
let maxSafeVelocity = 2;

function setup() {
    createCanvas(600, 550);
  }
  
function drawStartScreen() {
    fill(224, 203, 11);
    textAlign(CENTER, CENTER);
    textSize(45);
    text("FOOTBALL LANDER!", width / 2, height / 2);
    textSize(16);
    text("Press ENTER to Start", width / 2, height / 2 + 50);
  }

function drawGame() {
    field();
    ball(ballX, ballY);

    //goal area
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    rect(200, goalY, 200, 70);
    pop();
    
    //ball mechanics
    velocityY += acceleration;
    ballY += velocityY;
  
    //boundary conditions (at the bottom)
    if (ballY > height) {
      ballY = height;
      velocityY = 0;
    }
  
    //winning or losing conditions (The following 10 lines are written with help of https://chatgpt.com/)
    if (ballY > goalY && ballY < goalY + 10) {
      if (abs(velocityY) <= maxSafeVelocity) {
        gameState = "end";
        gameResult = "win";
      } else {
        gameState = "end";
        gameResult = "lose";
      }
    }
  }

function keyPressed() {
    if (keyCode === ENTER) {
      if (gameState === "start" || gameState === "end") {
        //reset game
        gameState = "play";
        ballY = 50;
        velocityY = 0;
      }
    }
  }

function keyIsDownHandler() {
    //applying thrust when SPACE key is pressed during the game
    if (keyIsDown(32) && gameState === "play") {
      velocityY += thrust;
    }
  }

function drawEndScreen() {
    fill(224, 203, 11);
    textAlign(CENTER, CENTER);
    textSize(24);
    if (gameResult === "win") {
      text("GOAAAL!", width / 2, height / 2 - 20);
    } else {
      text("Too fast! Try again", width / 2, height / 2 - 20);
    }
    textSize(16);
    text("Press ENTER to Restart", width / 2, height / 2 + 20);
  }

function draw() {
    background(3, 52, 166);
  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "play") {
    background(37, 84, 6);
    keyIsDownHandler();
    drawGame();
  } else if (gameState === "end") {
    drawEndScreen();
  }
}
  
function field(x,y){
    push();
    stroke(255, 255, 255);
    strokeWeight(5);
    line(0, 250, 600, 250);
    pop();

    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    ellipse(300, 250, 150);
    pop();
    
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    rect(100, 400, 400, 160);
    pop();

    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    rect(200, 490, 200, 70);
    pop();

    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(300, 450, 10);
    pop();
}

function ball(x,y){
  // The ball
      push();
      strokeWeight(5);
      fill(255, 255, 255);
      ellipse(x, y+50, 80);
      pop();
  
  function shape(x, y, w, h){
      strokeWeight(2);
      fill(0, 0, 0);
      rect(x, y, w, h);
  }
  
  //Central polygon
     shape(x-7, y+45, 15, 14);
  
     push();
     translate(x+2, y+38);
     rotate(0.4);
     shape(0, 0, 14, 16);
     pop();
  
     push();
     translate(x-14, y+43);
     rotate(-0.4);
     shape(0, 0, 14, 16);
     pop();
  
     push();
     translate(x-1, y+34);
     rotate(1);
     shape(0, 0, 11, 15);
     pop();
     
     push();
     translate(x+1, y+32);
     rotate(0.7);
     shape(0, 0, 18, 15);
     pop();
  
  // Up-side polygon
  function oval(x, y, w, h){
      fill(0, 0, 0);
      ellipse (x, y, w, h);
  }
  
     oval(x, y+15, 22, 10);
  
     push();
     translate(x-18, y+15);
     rotate(-1.2);
     shape(0, 0, 3, 18);
     pop();
  
     push();
     translate(x+1, y+22);
     rotate(-1.9);
     shape(0, 0, 3, 17);
     pop();
  
  
  // Down-side polygon (left)
     push();
     translate(x-16, y+76);
     rotate(-0.7);
     shape(0, 0, 3, 18);
     pop();
  
     push();
     translate(x-30, y+75);
     rotate(-1.4);
     shape(0, 0, 3, 15);
     pop();
  
     push();
     translate(x-17, y+83);
     rotate(0.5);
     oval(0, 0, 27, 8);
     pop();
  
  // Down-side polygon (right)
     push();
     translate(x+16, y+75);
     rotate(0.7);
     shape(0, 0, 3, 18);
     pop();
  
     push();
     translate(x+19, y+78);
     rotate(-1.8);
     shape(0, 0, 3, 12);
     pop();
  
     push();
     translate(x+19, y+82);
     rotate(-0.7);
     oval(0, 0, 20, 8);
     pop();
  
  // Middle-side (left)
      oval(x-35, y+43, 10, 24);
  
      push();
      translate(x-34, y+32);
      rotate(-0.4);
      shape(0, 0, 2, 14);
      pop();
  
      push();
      translate(x-28, y+43);
      rotate(0.6);
      shape(0, 0, 2, 17);
      pop();
  
  // Middle-side (right)
      push();
      translate(x+35, y+45);
      oval(0, 0, 8, 18);
      pop();
  
      push();
      translate(x+34, y+31);
      rotate(0.5);
      shape(0, 0, 2, 14);
      pop();
  
      push();
      translate(x+27, y+43);
      rotate(-0.5);
      shape(0, 0, 3, 19);
      pop();
  
  // The lines
  strokeWeight(4);
  line(x+1, y+35, x+1, y+20); //up
  line(x-10, y+44, x-30, y+44); //left-side 
  line(x-5, y+55, x-14, y+80); //down-side (left part)
  line(x+20, y+85, x+6, y+55); //down-side (right part)
  line(x-10, y+44, x+40, y+44); //right-side
  }
