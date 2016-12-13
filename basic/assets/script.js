// create welcome screen div
// 	-in the welcome screen create onkey event to get started. 
// 	-onkeyevent will trigger the first question
// create "questions" div
// 	-include button function that will provide the user with 4 options.
// 	- button function should be able to push in values via arguments. 
// 	-conditional IF answer is correct, THEN user receives correct message ELSE 
// 	IF the user is incorrect they will get incorrect GIF. 
// create timer
// 	-timer should reset for each question. 
// 	-IF time runs out THEN the question is incorrect


$(document).ready(function(){

	var correctCount = 0
	var incorrectCount = 0
	// var userInput = ""



	$("input[name='question1']").change(function(){
		// e.preventDefault();
		var userInput = $( "input[name = 'question1']:checked" ).val();
		console.log(userInput);

			if (userInput == "Draco Malfoy"){
			console.log("correct");
			console.log(correctCount);

		}else{
			console.log("incorrect");
			incorrectCount++;
			console.log(incorrectCount);
		}
	});




	// $("input[name='question2']").change(function(e){

	// 	e.preventDefault();
	// 	var userInput = $( "input[name = 'question2']:checked" ).val();
	// 	console.log(userInput);

	// 		if (userInput == "rabbit"){
	// 			console.log("correct");
	// 			correctCount++;
	// 			console.log(correctCount);

	// 		}else{
	// 			console.log("incorrect");
	// 			incorrectCount++;
	// 			console.log(incorrectCount);
	// 		}
	// });





	// $("input[name='question3']").change(function(e){

	// 	e.preventDefault();
	// 	var userInput = $( "input[name = 'question3']:checked" ).val();
	// 	console.log(userInput);

	// 		if (userInput == "harry potter"){
	// 			console.log("correct");
	// 			correctCount++;
	// 			console.log(correctCount);

	// 		}else{
	// 			console.log("incorrect");
	// 			incorrectCount++;
	// 			console.log(incorrectCount);
	// 		}
	// });















});