//Questions
var questions = [
{
    question: "Whos death pushed Goku to go Super Saiyan for the first time?",
    answer: ["Gohan", "Piccolo","Tien","Krillin"],
    correct: "Krillen",
},
{
    question:"Which fusion only lasts for 30 minutes?",
    answer: ["Potara Fusion","Fusion Dance", "Namekian Fusion", "Majin Fusion"],
    correct: "Fushion Dance",
},
{
    question:"Which universe won the Tournament of Power?",
    answer: ["Universe 9", "Universe 7", "Universe 5","Universe 8"],
    correct: "Universe 7"
},
{
    question:"Who is the most reoccuring Dragon Ball movie villian?",
    answer: ["Broly", "Cooler", "Bojack", "Janemba"],
    correct: "Broly"
},
{
    question:"Which character did Buu not absorb?",
    answer: ["Gohan", "Gotenks", "Piccolo", "Tien"],
    correct: "Tien"
},
{   question:"Which new level did Goku reach during the Tournament of Power?",
    answer: ["Super Saiyan Blue", "Ultra Instinct", "Super Saiyan Rose", "Super Saiyan 4"],
    correct: "Ultra Instinct"
},
{   question:"How many androids did Cell need to absorb to become Perfect Cell?",
    answer: ["4", "2", "6", "1"],
    correct: "2"
},
{
    question:"Which character defeated Cell?",
    answer: ["Gohan", "Goku", "Vegeta", "Trunks"],
    correct: "Gohan"
},
{
    question:"Which character did Babidi take control of during the Buu saga?",
    answer: ["Vegeta", "Goku", "Piccolo", "Goten"],
    correct: "Vegeta"
},
{
    question:"What was the name of the organization that created all of the androids in Dragon Ball?",
    answer: ["Capsule Corporation", "Red Ribbon Army", "Ginyu Force", "Cooler's Armored Squadron"],
    correct: "Red Ribbon Army"
},
{    
    question:"Which character was able to befriend Majin Buu and turn him good?",
    answer: ["Gotenks", "Hercule", "Bibidi", "Yamcha"],
    correct: "Hercule"
},
]   
// Initial Values
var counter = 10;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timer;

//Hides html elements outside of start button
$('#game').hide()
$('#timer').hide()



function nextQuestion(){
    var questionOver = (questions.length -1) === currentQuestion
    if (questionOver) {
    console.log(questionOver)
    } else {
    currentQuestion++;
    loadQuestions();
    }
}

//Function that changes questions when timer reachs 0
function timeUp () {
    clearInterval(timer);
    incorrect++;
    nextQuestion();
}
//Function that controls countdown timer
function countDown() {
    counter--;
    $('#timer').html('Timer: ' + counter);
    if (counter === 0){
        timeUp()
    }

}
//Function that starts game
function gameStart () { 
    $("#startButton").on('click', function(){
    $('#startButton').hide();
    $('#game').show()
    $('#timer').show()
    loadQuestions()
});
}

//Function that loads questions
function loadQuestions () {
    counter =10;
    timer = setInterval(countDown, 1000);
    var questionOne = questions[currentQuestion].question
    var answerOne = questions[currentQuestion].answer
    $('#timer').html('Timer: ' + counter);
    $('#game').html('<h4>' + questionOne + '</h4>'); 
    $('#game').append(loadChoices(answerOne))
}
//Function that loads answer choices
function loadChoices (answerOne) {
    var result = '';
    for (var i = 0; i < 4; i++) {
        console.log(answerOne[i])
        result += ('<p class=ans' + ' ' + 'data-answer=' + answerOne[i] +  '> ' + answerOne[i] + ' ' + '</p>');  
    }
    return result;
}

gameStart();
