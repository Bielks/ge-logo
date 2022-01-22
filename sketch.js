const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var borracha;
var ferro;
var pedra


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    borracha = new Borracha(500,300);
    ferro = new Ferro(500, 500);
    pedra = new Pedra(500, 400);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    borracha.display();
    ferro.display();
    pedra.display();
    

    
 
}