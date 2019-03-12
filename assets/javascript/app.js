// creat my questions and answers arrays and user choice

var questions = [
    {
        quest: "who is the 44th persident of the U.S?",
        ans: [
            "Trump",
            "Obama",
            "Buch",
            "Clinton"
        ],
        correctAnswer: 1
    },
    {
        quest: "what state is on the Border with Mexico?",
        ans: [
            "Arizona",
            "New York",
            "Delware",
            "Forida"
        ],
        correctAnswer: 0
    },
    {
        quest: "what state is on the Border with Canada?",
        ans: [
            "Arizona",
            "New York",
            "Delware",
            "Forida"
        ],
        correctAnswer: 1
    },
    {
        quest: "how maney amendmends to the constitutaion?",
        ans: [
            "19",
            "10",
            "8",
            "27"
        ],
        correctAnswer: 3
    }

];


var timer = 0;
var timeLimit = 10;
var timerRef = null;
var activeQuestion = questions[0];
var questNu = 0;
var timerDiv = document.getElementById("timer");
var qDiv = document.getElementById("q");
var ansDiv = document.getElementById("ans");
var resDiv = document.getElementById("result");
var corrct = 0;
var incorct = 0;
var misses = 0;




function resetDiv() {
    timerDiv.innerHTML = "";
    qDiv.innerHTML = "";
    ansDiv.innerHTML = "";
    resDiv.innerHTML = "";
}


function startTime() {
    timer = 0;
    timerRef = setInterval(() => {
        timer += 1;
        timerDiv.innerHTML = timer;
        if (timer === timeLimit) {
            stopTimer();
            misses++
            questNu++
            activeQuestion = questions[questNu]
            if (questNu < questions.length) { getQuestion() }

            else {displayresults() }

        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerRef);
    timerRef = null;
    timer = 0;
    timerDiv.innerHTML = timer;
}

function getQuestion() {
    var q = activeQuestion;
    qDiv.innerHTML = q.quest;
    ansDiv.innerHTML = " "
    q.ans.forEach((ans, i) => {
        var anserDiv = document.createElement("div");
        anserDiv.innerHTML = ans;
        anserDiv.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            var ans = setAnswer(i);
            var ansTxt = document.createTextNode(ans);
            resDiv.innerHTML = " "
           resDiv.appendChild(ansTxt);
              
             setTimeout(function(){questNu++
                activeQuestion = questions[questNu]
                if (questNu <= questions.length) { getQuestion() }
                else { displayresults() }},10000)

            


        })
        ansDiv.appendChild(anserDiv);
    });
    startTime();
}

function setAnswer(choise) {
    var q = activeQuestion;
    var correctAnswer = q.correctAnswer;
    if (choise === correctAnswer) { corrct++ }
    else { incorct++ }
    return choise === correctAnswer;

}



function displayresults() {
    document.getElementById("missed").innerHTML= ("missed= ")+misses;
    document.getElementById("correct").innerHTML=("correct= ")+corrct;
    document.getElementById("incorrect").innerHTML=("incorrect= ")+incorct;
}
getQuestion();