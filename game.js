
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

  let x = 200;
  let y = 200;
  
  function draw(){
      background(24, 84, 28);
      field(100, 100);
      ball(x+100, y);  
  }