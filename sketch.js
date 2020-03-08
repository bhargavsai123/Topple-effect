const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
    box3 = new Box(220,50,50,50);
    ground = new Ground(200,height,400,30);

    console.log(box1.body.position.x);

}

function draw(){
    background(0);

    text(mouseX + ',' + mouseY, 10, 15);

    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    ground.display();
   
}