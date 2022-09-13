var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "Where did Harry go to school? \n a.Hogwarts\n b.Durmstrang\n c.Yale \n",
  answer: "A",
},
{
  question: "What part of Harry's body was scarred? \n a.Hand\n b.Back\n c.Forehead \n",
  answer: "C"
},
{
  question: "Who as Sirius Black to Harry? \n a.Friend\n b.Godfather\n c.Pet \n",
  answer: "B"
},
{
  question: "The name of Harry's pet was? \n a.Hedwig\n b.Rias\n c.Lupin \n",
  answer: "A"
},
{
  question: "Voldemort's real name was? \n a.Volde Mort\n b.Mathew Vox\n c.Tom Riddle \n",
  answer: "C"
},
{
  question: "How many horcruxes were there? \n a.Five\n b.Seven\n c.Eight \n",
  answer: "B"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to HOW MUCH OF A POTTERHEAD ARE YOU?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right answer!");
    score = score + 1;

  } else {
    console.log("wrong answer!");

  }

  console.log("current score: ", score);
  console.log("- - - - - - - - - - - - -")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score, "points.");
}

welcome();
game();
showScores();