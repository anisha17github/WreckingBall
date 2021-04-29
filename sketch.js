const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wreckball, box1;
var bg;
var gameState = "onSling";
var Score=0;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
 

    wreckball = new Wreckball(200,250);

    box1 = new Box(600,100,50,50)
    box2 = new Box(650,100,50,50)
    box3 = new Box(700,100,50,50)
    box4 = new Box(600,100,50,50)
    box5 = new Box(650,100,50,50)
    box6 = new Box(700,100,50,50)
    box7 = new Box(600,100,50,50)
    box8 = new Box(650,100,50,50)
    box9 = new Box(700,100,50,50)
    box10 = new Box(600,100,50,50)
    box11 = new Box(650,100,50,50)
    box12 = new Box(700,100,50,50)
    box13 = new Box(600,100,50,50)
    box14 = new Box(650,100,50,50)
    box15 = new Box(700,100,50,50)
    box16 = new Box(650,100,50,50)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(wreckball.body,{x:200, y:50});

    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    //strokeWeight(4);
    textSize(20)
    fill ("white")
    text("Score : "+Score ,width-200, 50)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
   
    ground.display();
   
 

   

    wreckball.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(wreckball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

