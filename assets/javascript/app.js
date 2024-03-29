//Questions
var questions = [
{
    question: "Whos death pushed Goku to go Super Saiyan for the first time?",
    answer: ["Gohan", "Piccolo", "Tien", "Krillin"],
    correct: "Krillin",
    image: './assets/images/krillin.gif',
},
{
    question:"Which fusion only lasts for 30 minutes?",
    answer: ["Potara-Fusion", "Fusion-Dance", "Namekian-Fusion", "Majin-Fusion"],
    correct: "Fusion-Dance",
    image: './assets/images/fusion.gif',
},
{
    question:"Which universe won the Tournament of Power?",
    answer: ["Universe-9", "Universe-7", "Universe-5", "Universe-8"],
    correct: "Universe-7",
    image: './assets/images/universe7.png',
},
{
    question:"Who is the most reoccuring Dragon Ball movie villian?",
    answer: ["Broly", "Cooler", "Bojack", "Janemba"],
    correct: "Broly",
    image: './assets/images/broly.gif',
},
{
    question:"Which character did Buu not absorb?",
    answer: ["Gohan", "Gotenks", "Piccolo", "Tien"],
    correct: "Tien",
    image: './assets/images/tien.jpg',
},
{   
    question:"Which new level did Goku reach during the Tournament of Power?",
    answer: ["Super Saiyan Blue", "Ultra-Instinct", "Super Saiyan Rose", "Super Saiyan 4"],
    correct: "Ultra-Instinct",
    image: './assets/images/ultrainstinct.gif',
},
{   question:"How many androids did Cell need to absorb to become Perfect Cell?",
    answer: ["4", "2", "6", "1"],
    correct: "2",
    image: './assets/images/androids.gif',
},
{
    question:"Which character defeated Cell?",
    answer: ["Gohan", "Goku", "Vegeta", "Trunks"],
    correct: "Gohan",
    image: './assets/images/gohan.gif',
},
{
    question:"Which character did Babidi take control of during the Buu saga?",
    answer: ["Vegeta", "Goku", "Piccolo", "Goten"],
    correct: "Vegeta",
    image: './assets/images/majinvegeta.gif',
},
{
    question:"What was the name of the organization that created all of the androids in Dragon Ball?",
    answer: ["Capsule-Corporation", "Red-Ribbon-Army", "Ginyu-Force", "Cooler's Armored Squadron"],
    correct: "Red-Ribbon-Army",
    image: './assets/images/redribbon.jpg',
},
{    
    question:"Which character was able to befriend Majin Buu and turn him good?",
    answer: ["Gotenks", "Hercule", "Bibidi", "Yamcha"],
    correct: "Hercule",
    image: './assets/images/hercule.gif',
},
]   

// Initial Values
var counter = 15;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timer;

//Hides html elements outside of start button
$('#game').hide()
$('#timer').hide()


//Loads result display if there are no more questions
function nextQuestion(){
    var questionOver = (questions.length -1) === currentQuestion
    if (questionOver) {
        resultDisplay()
    } else {
    currentQuestion++;
    loadQuestions();
    }
}

//Function that changes question when timer reachs 0
function timeUp () {
    clearInterval(timer);
    incorrect++;
    $('#game').html('<h5>' + 'Time is up! The correct answer was ' + questions[currentQuestion].correct + '</h5>')
    $('#game').append("<img src =" + questions[currentQuestion].image + ">")
    setTimeout(nextQuestion, 3 * 1000);
}
//Function that controls countdown timer
function countDown() {
    counter--;
    $('#timer').html(counter);
    if (counter === 0){
        timeUp()
    }
}

//Function that starts game
function gameStart () { 
    $("#startButton").on('click', function(){
    $('#startButton').hide();
    $('#instructions').hide();
    $('#game').show()
    $('#timer').show()
    loadQuestions()
});
}

//Function that loads questions
function loadQuestions () {
    counter =15;
    timer = setInterval(countDown, 1000);
    var questionOne = questions[currentQuestion].question
    var answerOne = questions[currentQuestion].answer
    $('#timer').html(counter);
    $('#game').html('<h4>' + questionOne + '</h4>'); 
    $('#game').append(loadChoices(answerOne))
}
//Function that loads answer choices
function loadChoices (answerOne) {
    var result = '';
    for (var i = 0; i < 4; i++) {
        result += ('<p class=ans' + ' ' + 'data-answer=' + answerOne[i] +  '> ' + answerOne[i] + ' ' + '</p>' + '<br>');  
    }
    return result;
}

//Function determines if clicked answer is correct or incorrect
$(document).on('click', '.ans', function (){
    clearInterval(timer)
    var selectedAnswer = $(this).attr('data-answer');
    var correctAnswer = questions[currentQuestion].correct
    var correctImage = questions[currentQuestion].image

    if (correctAnswer === selectedAnswer) {
        correct++
        $('#game').html('<h3>' + 'Correct!' + '</h3>')
        $('#game').append("<img src =" + correctImage + ">")
        setTimeout(nextQuestion, 3 * 1000);
    } else{
        incorrect++
        $('#game').html('<h5>' + 'Incorrect! The correct answer was ' + correctAnswer + '</h5>')
        $('#game').append("<img src =" + correctImage + ">")
        setTimeout(nextQuestion, 3 * 1000)
    }
});

//Function controls what is displayed on game end
function resultDisplay () {
    $('#game').html('<h4>' + 'Correct Answers :' + correct + '</h4>')
    $('#game').append('<h4>'+ 'Incorrect Answers :' +  incorrect + '</h4>')
    $('#game').append('<h4>'+ 'Total Questions :' +  questions.length + '</h4>')
    $('#game').append('<button id=reset>' + 'Reset Game' +  '</button>')
}

//Function resets game after game ends
$(document).on('click', '#reset', function (){
    counter = 10;
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    timer = null;
    loadQuestions();

});

gameStart();
