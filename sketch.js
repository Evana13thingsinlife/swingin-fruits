const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;
var bg_img;
var bg = "images/bg.jpg";

function preload(){
   bg_img = loadImage('bg_jungle.jpg');
}

function setup(){
   createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    monkey = new Monkey();
    vine1= new Vine();
}

function draw(){
   if(bg_img)
  background(bg_img);

    Engine.update(engine);
    monkey.display();
    vine1.display();
}   

