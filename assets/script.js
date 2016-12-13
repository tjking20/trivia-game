$('document').ready(function(){

// Object of with questions and answers to be pushed into the correct array. 
var triviaOptions =  [{
	question: "What is your favorite color?",
	choices: ["blue","green","brown"],
	correctChoice: "0"
}, {
	question: "what is the color of the sky?",
	choices: ["blue","green","brown"],
	correctChoice: "0"
}, {
	question: "what type of bear is best?",
	choices: ["black","polar","brown"],
	correctChoice: "1"
}];



var userInput = $(this).val();
var questionCount = 0;
var currentQuestion = triviaOptions[questionCount];
var choices = currentQuestion.choices;
var correctCount = 0;
var incorrectCount = -1;

function nextQuestion(){
		$("#questions").empty(); //this empties the questions div of any previous contents
		// $("#submit").text("submit"); //changes the start button to turn into a submit button
		$("#questions").append("<h2>" + currentQuestion.question + "</h2>" );

		for (var j = 0; j < choices.length; j++){
			var buttons = $("<button>")
			.val(j)
			.attr("class", "answerButtons")
			.text(choices[j]);
			$("#questions").append(buttons);
		}

		questionCount++;
}

$("#submit").on("click", function(){
	nextQuestion();
});


$(".answerButtons").on("click", function(){

	if(userInput == currentQuestion.correctChoice){
		correctCount++;
		console.log(correctCount);
		nextQuestion();
	} else{
		incorrectCount++;
		console.log(incorrectCount);
		nextQuestion();
	}

});











}); // this jawn closes the .ready() event listener. leave this fucker alone.