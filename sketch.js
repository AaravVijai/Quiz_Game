var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz(quiz.start());
//call the start() method inside the quiz class

}


function draw(){
  
  background("pink");
  
}
