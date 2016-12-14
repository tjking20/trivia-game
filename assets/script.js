$('document').ready(function(){

// Object of with questions and answers to be pushed into the correct array. 
var triviaOptions =  [{
	question: "How many great rings were forged?",
	choices: ["20","9","1", "19"],
	correctChoice: "0"
}, {
	question: "What gift did Galadriel give to Gimli?",
	choices: ["Elvish rope","A dagger","Three strands of her hair", "An axe"],
	correctChoice: "2"
}, {
	question: "What is Gollum's original name?",
	choices: ["Frodo","Smeagol","Bilbo","Sam"],
	correctChoice: "1"
}, {
	question: "Challenge Question: In the book, FellowShip of the Ring, who leads Frodo to Buckleberry Ferry?",
	choices: ["Sam","Merry and Pippen","Farmer Maggot", "Gandalf"],
	correctChoice: "2"
}];


var questionCount = 0;
var currentQuestion = triviaOptions[questionCount];
var choices = currentQuestion.choices;
var correctCount = 0;
var incorrectCount = 0;
var gameStop = 0;

function nextQuestion(){
	
		currentQuestion = triviaOptions[questionCount];//sets the value of currentQuestion
		choices = currentQuestion.choices
		$("#questions").empty(); //empties the questions div of any previous contents


		// line 34-42 selec the current question and answer buttons.
		$("#questions").append("<h2>" + currentQuestion.question + "</h2>" );
		for (var j = 0; j < choices.length; j++){
			var buttons = $("<button>")
			.val(j)
			.attr("class", "answerButtons")
			.text(choices[j]);
			$("#questions").append(buttons);
		}

		addAnswerClickEvents();

		questionCount++;//increments questionCount, and changes currentAnswer
		endQuiz();
		
	

}

// when start button is clicked on the welcome screen, it loads the first question.
$('#start').on("click", function(){
	nextQuestion();
	timer();
});



//gives value to the .answerButton click events.
function addAnswerClickEvents() {
	$("button.answerButtons").on("click", function(){

		if($(this).val() == currentQuestion.correctChoice){
			correctCount++;
		} else{
			incorrectCount++;
		}

		if(currentQuestion > triviaOptions.length){
			summarPage();
		}

		nextQuestion();

	});

}


// The reset function resets all game values, and starts the client back at question 1.

function reset(){
questionCount = 0;
currentQuestion = triviaOptions[questionCount];
choices = currentQuestion.choices;
correctCount = 0;
incorrectCount = 0;

nextQuestion();

}

function summaryPage(){
	$("#questions").empty(); 
	gameStop++;
	$("#timerDisplay").html("<h3>Time's Up!</h3>");

	$("#questions")
	.append("<h2>Game Over</h2>")
	.append("<p> Correct: "+ correctCount +"</p>")
	.append("<p> incorrect: "+ incorrectCount +"</p>");
	$("#quit").text("Reset")
	$("#quit").on("click", function(){
		reset();
	});
}

function endQuiz(){
	$("#endQuiz").empty();//empties the endQuiz div
	var quitButton = $("<button>").attr("id","quit").text("Quit");
	$("#endQuiz").append(quitButton);
	$("#quit").on("click", summaryPage);
		
}


function timer(){
	var counter = 30;
	function timerDisplay(){
		$("#timerDisplay").html("<h3>Seconds Left: " + counter +  "</h3>");
	}
	timerDisplay();
	var interval = setInterval(function() {
	    counter--;
	    if (counter >= 0){
	    	timerDisplay();
	    } if (counter == 0) {
	        clearInterval(interval);
	        summaryPage();

	    } if (gameStop > 0){

	    	clearInterval(interval);
	    }


	}, 1000);

}



}); 




