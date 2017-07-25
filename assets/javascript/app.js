$(document).ready(function() {

	//Declare Variables
	var correctAs = 0;
	var incorrectAs = 0; 
	var counter = 0; 
	//create an object or array that holds the trivia questions and answers
	var questions = [];
	questions[0] = "Who said 'We have to remember what’s important in life: Friends, waffles, work. Or Waffles friends work. But work has to come third.'?"; 
	questions[1] = "What is andy dwyer's band name?";
	questions[2] = "Who does Leslie Knope Marry?";
	questions[3] = "Where is Tom Haverford from?"; 

	var answers = [];
	answers[0] = "Leslie Knope"; 
	answers[1] = "Mouserat"; 
	answers[2] = "Ben Wyatt";
	answers[3] = "South Carolina";

	var allAnswers = [];
	allAnswers[0] = ["Tammy 2", "Mark Brandanawicz", "Anne Perkins", "Leslie Knope"];
	allAnswers[1] = ["neutral wilk hotel", "horny toad", "skunk", "Mouserat"];
	allAnswers[2] = ["Ben Wyatt", "Ron Wwanson", "the Prince of Wales", "Chris Traeger"];
	allAnswers[3] = ["Mumbai", "Pawnee Indiana", "South Carolina", "New York City"]; 


	var secondsLeft = 10; 
	
	for (var i = 0; i < questions.length; i++); {
		console.log(questions[i]); 
	}

//Here we run a timer counting down form a set number 
	var intervalID;


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

	function displayNextQuestion() {
		$("#start").remove(); 
		$("#timer").html("time remaining: ");
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

	function timer() {
		intervalID = setInterval(function() {
			$("#timer").html("time remaining: " + secondsLeft + " seconds");
			secondsLeft--;
				if (secondsLeft < 0) {
					incorrectAnswer();
					resetTimer(); 
					counter++;
					setTimeout(clear, 3 * 1000); 
					setTimeout(displayNextQuestion, 3 * 1000);

				}

		}, 1000);
	}

	function resetTimer() {
		clearInterval(intervalID); 
		secondsLeft = 10; 
	}

	function correctAnswer() {
		$("#question").text(" "); 
		$("#answers").html("You're Right!"); 
		correctAs ++; 
	}

	function incorrectAnswer() {
		$("#answers").html("The correct answer was " + answers[counter]); 
		incorrectAs++; 
	}

	

	function clear() {
		$("#questions").empty();
		$("#answers").empty(); 
	}

	function getResults() {
		$("#timer").text("No more questions... Here's how you did!");
		$("#questions").append("<h2>you got " + correctAs + " questions right </h2>");
		$("#questions").append("<h2>you got " + incorrectAs + " questions wrong </h2>");
		if (correctAs > incorrectAs) {
			$("#answers").append("great job! You're a real Parks and Rec Fan!")
		}
		else{
			$("#answers").append("Time to watch some more Parks and Recreation! You've still got so much to learn")
		}
	}
	
//

	


});

