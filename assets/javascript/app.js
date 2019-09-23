//Questions
var questions = [{
    ques: "Whos death pushed Goku to go Super Saiyan for the first time?",
    ans: ["Gohan", "Piccolo","Tien","Krillin"],
    correct: "Krillen",
},
{
    ques:"Which fusion only lasts for 30 minutes?",
    ans: ["Potara Fusion","Fusion Dance", "Namekian Fusion", "Majin Fusion"],
    correct: "Fushion Dance",
},
{
    ques:"Which universe won the Tournament of Power?",
    ans: ["Universe 9", "Universe 7", "Universe 5","Universe 8"],
    correct: "Universe 7"
},
{
    ques:"Who is the most reoccuring Dragon Ball movie villian?",
    ans: ["Broly", "Cooler", "Bojack", "Janemba"],
    correct: "Broly"
},
{
    ques:"Which character did Buu not absorb?",
    ans: ["Gohan", "Gotenks", "Piccolo", "Tien"],
    correct: "Tien"
},
{   ques:"Which new level did Goku reach during the Tournament of Power?",
    ans: ["Super Saiyan Blue", "Ultra Instinct", "Super Saiyan Rose", "Super Saiyan 4"],
    correct: "Ultra Instinct"
},
{   ques:"How many androids did Cell need to absorb to become Perfect Cell?",
    ans: ["4", "2", "6", "1"],
    correct: "2"
},
{
    ques:"Which character defeated Cell?",
    ans: ["Gohan", "Goku", "Vegeta", "Trunks"],
    correct: "Gohan"
},
{
    ques:"Which character did Babidi take control of during the Buu saga?",
    ans: ["Vegeta", "Goku", "Piccolo", "Goten"],
    correct: "Vegeta"
},
{
    ques:"What was the name of the organization that created all of the androids in Dragon Ball?",
    ans: ["Capsule Corporation", "Red Ribbon Army", "Ginyu Force", "Cooler's Armored Squadron"],
    correct: "Red Ribbon Army"
},
{    
    ques:"Which character was able to befriend Majin Buu and turn him good?",
    ans: ["Gotenks", "Hercule", "Bibidi", "Yamcha"],
    correct: "Hercule"
},
]   

var counter = 60;
var correct = 0;
var incorrect = 0;
var timer;

var gameStart = $("#startButton").on('click', function(){
    $('#startButton').hide();
    $('#actualGame').show();
});

//loops through questions
function loadQuestions () {
    $('#time-remain').html(counter);
for (var q = 0; q < 11; q++) {
    $('#questions').append('<h5>' + questions[q].ques + '</h5>' + '<hr />');
    console.log(questions[q].ques)
    for (var a = 0; a < 4; a++) {
    $('#answers').append('<label for =' + questions[q].ans[a] + '</label>')
    console.log(questions[q].ans[a])
 }
}
}

loadQuestions()
