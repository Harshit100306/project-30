const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var block1;
var back, backimg;

function preload(){
  backimg = loadImage("background_img.jpg");
}
function setup() {
  
  createCanvas(800,400);
  
  back = createSprite(400, 200, 800, 400);
  back.addImage(backimg);
  

  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(300, 330, 250, 15);
  stand2 = new Ground(600, 200, 200, 15);
  

  block1 = new Box(210, 300,30,40);
  block2 = new Box(240, 300,30,40);
  block3 = new Box(270, 300,30,40);
  block4 = new Box(300, 300,30,40);
  block5 = new Box(330, 300,30,40);
  block6 = new Box(360, 300,30,40);
  block7 = new Box(390, 300,30,40);


  block8 = new Box(240, 260,30,40);
  block9 = new Box(270, 260,30,40);
  block10 = new Box(300, 260,30,40);
  block11 = new Box(330, 260,30,40);
  block12 = new Box(360, 260,30,40);
  

  block13 = new Box(270, 220,30,40);
  block14 = new Box(300, 220,30,40);
  block15 = new Box(330, 220,30,40);


  block16 = new Box(300, 180,30,40);


  block17 = new Box(540, 170,30,40);
  block18 = new Box(570, 170,30,40);
  block19 = new Box(600, 170,30,40);
  block20 = new Box(630, 170,30,40);
  block21 = new Box(660, 170,30,40);


  block22 = new Box(570, 130,30,40);
  block23 = new Box(600, 130,30,40);
  block24 = new Box(630, 130,30,40);


  block25 = new Box(600, 90,30,40);

  var polygon_options ={
    'isStatic':false,
  }

  polygon = new Polygon(50, 250, 15);

  slingshot = new SlingShot(polygon.body, {x: 80, y: 250});


}

function draw() {
  Engine.update(engine);
  background(0);
  drawSprites();

  stand1.display();
  stand2.display();

  fill(255, 190, 51);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill(15, 222, 254);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(115, 229, 20);
  block13.display();
  block14.display();
  block15.display();

  fill(196, 86, 255);
  block16.display();

  fill(15, 222, 254);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(115, 229, 20);
  block22.display();
  block23.display();
  block24.display();

  fill(255, 190, 51);
  block25.display();

  polygon.display();
  slingshot.display();


  

}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body);
  }
}