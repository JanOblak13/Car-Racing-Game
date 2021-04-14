var hypnoticBall, database;
var position;
var form,gameState=0,game;

function setup(){
  database = firebase.database();
  createCanvas(500,500);
    game=new Game()
    game.getState()
    game.waiting()
}

function draw(){
  
}
