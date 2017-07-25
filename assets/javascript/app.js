$(document).ready(function() {

	//Declare Variables
	var correctAs = 0;
	var incorrectAs = 0; 
	var counter = 0; 
	//create an object or array that holds the trivia questions and answers
	var questions = [];
	questions[0] = "who is the best character in Parks and Rec?"; 
	questions[1] = "what is andy dwyer's band name?";
	questions[2] = "Who does Leslie Knope Marry?";
	questions[3] = "Where is Tom Haverford from?"; 

	var answers = [];
	answers[0] = "Leslie Knope"; 
	answers[1] = "mouserat"; 
	answers[2] = "Ben Wyatt";
	answers[3] = "south carolina";

	var allAnswers = [];
	allAnswers[0] = ["Tammy 2", "Mark Brandanawicz", "Anne Perkins", "Leslie Knope"];
	allAnswers[1] = ["neutral wilk hotel", "horny toad", "skunk", "mouserat"];
	allAnswers[2] = ["Ben Wyatt", "ron swanson", "the Prince of Wales", "Chris Traeger"];
	allAnswers[3] = ["Mumbai", "Pawnee Indiana", "south carolina", "New York City"]; 


	var secondsLeft = 5; 
	
	for (var i = 0; i < questions.length; i++); {
		console.log(questions[i]); 
	}

//Here we run a timer counting down form a set number 
	var intervalID;

	function timer() {
		intervalID = setInterval(function() {
			$("#timer").html("time remaining: " + secondsLeft + " seconds");
			
				if (secondsLeft === 0) {
					incorrectAnswer();
					stopTimer(); 
					counter++;
					setTimeout(clear, 1 * 1000); 
					setTimeout(displayNextQuestion, 1 * 1000);

				}
				secondsLeft--;

		}, 1000);
	}

	function stopTimer() {
		clearInterval(intervalID); 
		secondsLeft = 5; 
	}

	function displayNextQuestion() {
		$("#start").remove(); 
		if (counter < questions.length) {

			if (secondsLeft > 0) {
				timer();

				$("#questions").html(questions[counter]); 

				for (var i = 0; i < allAnswers[counter].length; i++) {
					$("#answers").append("<p class = choice>" + allAnswers[counter][i] + "</p>"); 
				}

			} else {
			wrongAnswer(); 
			}
		}

		else {
			clear(); 
			getResults();

		}



	}
	$(document).on("click", "#start", displayNextQuestion);



	$(document).on("click", ".choice", function() {
		if ($(this).text() === answers[counter]) {
			counter++; 
			correctAnswer();
			stopTimer();
			setTimeout(clear, 1 * 1000); 
			setTimeout(displayNextQuestion, 1 * 1000); 

		}else {
			counter++; 
			incorrectAnswer(); 
			stopTimer(); 
			setTimeout(clear, 1 * 1000); 
			setTimeout(displayNextQuestion, 1 * 1000); 
		}

	})

	console.log("correct" + correctAs); 
	console.log("incorrect" + incorrectAs); 


	function correctAnswer() {
		$("#question").text(" "); 
		$("#answers").html("You're Right!"); 
		correctAs ++; 
	}

	function incorrectAnswer() {
		$("#answers").html("nope! the correct answer was " + answers[counter]); 
		incorrectAs++; 
	}

	function clear() {
		$("#questions").empty();
		$("#answers").empty(); 
	}

	function getResults() {
		$("#questions").append("<h2>you got " + correctAs + " questions right </h2>");
		$("#questions").append("<h2>you got " + incorrectAs + " questions wrong </h2>");
	}
	
//

	


});

