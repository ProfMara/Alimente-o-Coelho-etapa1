const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//declarando as variáveis para fruta, corda, conexão e solo:
var solo, fruta, link, corda;
var mais_leve;



function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;

    solo = new Ground(200, 680, 600, 40);

    mais_leve = {
    
    }

    //criar o corpo da fruta
  
    //cria uma corda
  
    //cria uma composição de corda e fruta
    
    //cria um link entre a corda e a fruta e os junta
   
    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
}

function draw() {
    background("cyan");

    //mostrar o solo
    solo.show();

    //mostrar a corda


    
    //mostrar a fruta   
 

    Engine.update(engine);
}
