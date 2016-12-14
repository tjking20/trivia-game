$('document').ready(function(){

// Object of with questions and answers to be pushed into the correct array. 
var triviaOptions =  [{
	question: "What is your favorite color?",
	choices: ["blue","green","brown"],
	correctChoice: "0"
}, {
	question: "what is the color of the sky?",
	choices: ["gold","black","red"],
	correctChoice: "0"
}, {
	question: "what type of bear is best?",
	choices: ["black","polar","brown"],
	correctChoice: "1"
}, {
	question: "what type of beet is best",
	choices: ["black","polar","brown"],
	correctChoice: "1"
}];


var questionCount = 0;
var currentQuestion = triviaOptions[questionCount];
var choices = currentQuestion.choices;
var correctCount = 0;
var incorrectCount = 0;

function nextQuestion(){
	
		currentQuestion = triviaOptions[questionCount];//does it make a difference if 
		
		//it is in the nexQuestion function or in the buttonClick function?
		$("#questions").empty(); //this empties the questions div of any previous contents
		$("#questions").append("<h2>" + currentQuestion.question + "</h2>" );

		for (var j = 0; j < choices.length; j++){
			var buttons = $("<button>")
			.val(j)
			.attr("class", "answerButtons")
			.text(choices[j]);
			$("#questions").append(buttons);
		}

		addAnswerClickEvents();

		questionCount++;

		$("#endQuiz").empty();
		var quitButton = $("<button>").attr("id","quit").text("Quit");
		$("#endQuiz").append(quitButton);
		$("#quit").on("click", function(){
			$("#questions").empty(); 
			$("#questions")
			.append("<h2>Game Over</h2>")
			.append("<p> Correct: "+ correctCount +"</p>")
			.append("<p> incorrect: "+ incorrectCount +"</p>");
			$("#quit").text("Reset")
			$("#quit").on("click", function(){
				reset();
			});
		});
			
	

}


$('#start').click(nextQuestion)

function addAnswerClickEvents() {
	$("button.answerButtons").on("click", function(){
	// currentQuestion = triviaOptions[questionCount];

	if($(this).val() == currentQuestion.correctChoice){
		correctCount++;
	} else{
		incorrectCount++;
	}
	
	
	
	nextQuestion();


});

}

function reset(){
var questionCount = 0;
var currentQuestion = triviaOptions[questionCount];
var correctCount = 0;
var incorrectCount = 0;

nextQuestion();

}

// var questionCount = 0;
// var currentQuestion = triviaOptions[questionCount];
// var choices = currentQuestion.choices;
// var correctCount = 0;
// var incorrectCount = -1;

// function nextQuestion(){
// console.log(currentQuestion.question)

// questionCount++;
// currentQuestion = triviaOptions[questionCount];


// }

// nextQuestion()
// nextQuestion()
// nextQuestion()



    // var currentQuestion = 0; //start at the first index of the questions array

    // var question = questions[currentQuestion]; //choose the first question
    
    // //display the first question on the page
    // $('body').append(question.question);

    // for (var i=0; i<question.choices.length; i++){
    //     var button = $('<button>').text(question.choices[i]).attr('data-val', i);
    //     $('body').append(button);
    // }

    // $('button').on('click', function(){
    //     if ($(this).data('val') == question.correctChoice){
    //         alert('correct');
    //     }else{
    //         alert('loser');
    //     }

    //     currentQuestion++; //increment to the next question
    // })






}); // this jawn closes the .ready() leave this fucker alone.




