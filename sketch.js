var bg,bg2,form,system,code,security;
var score=0, dora_Running, obstacle1;
var Gcoin, Scoin, Bcoin, RunnerBg, nextButton;
var  runnerDora;
//var gameState = runner

function preload() {
  bg = loadImage("images/JW-Bg.jpg");
  bg2 = loadImage("images/Lock.jpg");
dora_Running = loadAnimation("images/Running_dora.png","images/Running_dora-2.png")
obstacle1= loadImage("images/Obstacle1.png");
Bcoin = loadImage("images/Bronze_Coin.jpg");
Gcoin = loadImage("images/Gold_Coin.png");
Scoin = loadImage("images/Silver_coin.jpg");
RunnerBg= loadImage("images/Runner_bg.png");
}


// 
function setup() {
  createCanvas(1350,650);
  system = new System();
  security = new Security();
 // gameState = "Runner";
   
  runnerDora = createSprite(100,300, 50,50);
  runnerDora.addAnimation("Img",dora_Running);
  runnerDora.scale = 0.5;
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  runnerDora.display();
    // Add code to display score in the middle of the screen

  textSize(20)
  fill("yelow");
  text("Score : " + score, 510, 280)
  // Add code to display the end screen
if(score === 3){
  clear();
  background(bg2);
  fill("black");
  textSize(40);
  text("TASK UNLOCKED", 580, 50);
  nextButton = createButton("Next -->");
  nextButton.position(1200,600);
  nextButton.display();
}
if(score === 3){
  fill("black");
  textSize(40);
  text("Congratulations!!", 580, 50);
  nextButton = createButton("Next -->");
  nextButton.position(1200,600);
  nextButton.display();
}

if(mousePressedOver(nextButton)){
  clear();
  background(RunnerBg);
 
}



  drawSprites()
}