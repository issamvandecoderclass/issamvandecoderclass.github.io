var xSize = 1520;
var ySize = 755;
var bal1;
var player1_y = 70;
var player2_y = 70;
var player2_x = 30;
var player1_x = 1470;
var score_player1 = 0;
var score_player2 = 0;
var distance = 150;

function setup() {
  setFrameRate(35);
  createCanvas(xSize, ySize);
  bal1 = new Bal();
  bal1.xPos = this.xSize / 2;
  bal1.yPos = this.ySize / 2;
  bal1.radius = 10;
  bal1.xSpeed = 8;
  bal1.ySpeed = 8;
}

function draw() {
  background(0, 0, 0, 200);
  textFont("fantasy");
  fill(255);
  textSize(70);
  text(score_player1, 1390, 60);
  fill(255);
  textSize(70);
  text(score_player2, 60, 60);
  bal1.teken();
  bal1.beweeg();
  bal1.check();
  rect(player2_x, player2_y, 20, distance);
  rect(player1_x, player1_y, 20, distance);
  rect(760, 2, 5, 1000);
  if (score_player1 == 10){
    console.log("player 1 heeft gewonnen");
  } if (score_player2 == 10){
    console.log("Player 2 heeft gewonnen joepie");
  }
  if (keyIsDown(UP_ARROW)){
       player1_y -= 18;
       console.log("Boven player 1");
     } else if (keyIsDown(DOWN_ARROW)){
       player1_y += 18;
       console.log("Beneden player 1");
     } if (keyIsDown(87)){
       player2_y -= 18;
       console.log("Boven player 2");
     } else if (keyIsDown(83)){
       player2_y += 18;
       console.log("Beneden player 2");
     } if (keyIsDown(32)){
       bal1.ySpeed = bal1.ySpeed + 7;
       if (bal1.ySpeed > 8){
         bal1.ySpeed = 1;
       }
       console.log("Spatie is ingedrukt");
       console.log("Speed: " + bal1.ySpeed);
     } if (keyIsDown(68)){
       bal1.ySpeed = bal1.ySpeed + 1;
       if (bal1.ySpeed > 8){
         bal1.ySpeed = 1;
       }
       console.log("D is ingedrukt");
       console.log("Speed: " + bal1.ySpeed);
     } if (keyIsDown(190)){
       bal1.ySpeed = bal1.ySpeed - 1;
        if (bal1.ySpeed > 8){
          bal1.ySpeed = 1;
        }
       console.log("> is ingedrukt");
       console.log("Speed: " + bal1.ySpeed)
     } if (bal1.xSpeed > 30){
       bal1.xSpeed = 7;
     } if (player2_y < 0){
        player2_y = 0;
     } if (player2_y > 605){
        player2_y = 605;
     } if (player1_y < 0){
        player1_y = 0;
     } if (player1_y > 605){
        player1_y = 605;
     } if (score_player1 > 1){
       this.break;
       console.log("Stop");
     } if (score_player2 > 1){
       this.break;
       console.log("Stop");
     }
}

function Bal(){
  setFrameRate(35)
  this.xPos;
  this.yPos;
  this.radius;
  this.xSpeed;
  this.ySpeed;

  this.check = function(){
    if (this.yPos > player2_y && this.yPos < player2_y + distance && this.xPos < player2_x + 25){
      this.xSpeed = -(this.xSpeed + (Math.floor(Math.random() * 3)+1));
      console.log(this.xSpeed);
      console.log("Random");
      console.log("Geraakt");
    }if (this.yPos > player1_y && this.yPos < player1_y + distance && this.xPos > player1_x){
      this.xSpeed = -(this.xSpeed + (Math.floor(Math.random() * 3)+1));
      console.log("Random");
      console.log("Geraakt");
     }
  }

  this.teken = function(){
    fill(255, 255, 255);
    ellipse(this.xPos, this.yPos, 2*this.radius, 2*this.radius);
  }

  this.beweeg = function(){
    if (this.xPos > width - this.radius){
      this.xSpeed = -this.xSpeed;
      score_player2 = score_player2 + 1;
      console.log("Score player 2: " + score_player2);
      this.xPos = xSize / 2;
      this.yPos = ySize /2;
      this.ySpeed = this.ySpeed + 0.01;
      this.xSpeed = this.xSpeed + 0.01;
      console.log("Speed: " + this.xSpeed)
    if (score_player2 == 10){
      fill(255);
      textSize(70);
      text("Gefeliciteerd player 2", 1300, 0);
    }
      if (this.xSpeed > 10){
        this.xSpeed = 4;
      }
    }
    if(this.xPos < this.radius){
      this.xSpeed = -this.xSpeed;
      score_player1 = score_player1 + 1;
      console.log("Score player 1: " + score_player1);
      if (score_player1 > 10){
        fill(255);
        textSize(70);
        text("Gefeliciteerd player 1", 1300, 0);
      }
      this.xPos = xSize / 2;
      this.yPos = ySize /2;
      this.ySpeed = this.ySpeed + 0.1;
      this.xSpeed = this.xSpeed + 0.1;
    }
    if (this.yPos > height - this.radius || this.yPos < this.radius){
      this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
}
