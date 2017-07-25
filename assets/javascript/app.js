$(document).ready(function() {

	//Declare Variables
	var correctAs = 0;
	var incorrectAs = 0; 
	var counter = 0; 
	var secondsLeft = 10; 
	//create an object or array that holds the trivia questions and answers
	var questions = [];
	questions[0] = "Who said 'We have to remember what’s important in life: Friends, waffles, work. Or Waffles friends work. But work has to come third.'?"; 
	questions[1] = "What is Andy Dwyer's band's name?";
	questions[2] = "Who does Leslie Knope Marry?";
	questions[3] = "Where is Tom Haverford from?"; 
	questions[4] = "Who said: 'Sometimes you gotta work a little, so you can ball a lot!'?";
	questions[5] = "What does Ron Swanson keep on his desk?";
	questions[6] = "At the beginning of the show, who is April Ludgate Dating?";
	questions[7] = "Which person is at the top of Leslie Knope's Celebrity Sex List?"
	questions[8] = "Who said: 'Fishing relaxes me. It’s like yoga, except i still get to kill something";
	questions[9] = "Which of the following does April Ludgate not hate?";
	questions[10] = "Who said: 'I hope you brought a change of clothes because your eyes are about to piss tears'"


	var answers = [];
	answers[0] = "Leslie Knope"; 
	answers[1] = "Mouse Rat"; 
	answers[2] = "Ben Wyatt";
	answers[3] = "South Carolina";
	answers[4] = "Tom Haverford";
	answers[5] = "An unexploaded land mine"; 
	answers[6] = "Two gay men";  
	answers[7] = "Joe Biden"; 
	answers[8] = "Ron Swanson"; 
	answers[9] = "Dogs";
	answers[10] = "Jean-Ralphio Saperstein"; 

	var allAnswers = [];
	allAnswers[0] = ["Donna Meagle", "Mark Brandanawicz", "Anne Perkins", "Leslie Knope"];
	allAnswers[1] = ["Scarecrow Boat", "Teddybear Suicide", "Muscle Confusion", "Mouse Rat"];
	allAnswers[2] = ["Ben Wyatt", "Ron Swanson", "Mark Brendanawicz", "Chris Traeger"];
	allAnswers[3] = ["Mumbai", "Pawnee Indiana", "South Carolina", "New York City"]; 
	allAnswers[4] = ["April Ludgate", "Jean-Ralphio Saperstein", "Chris Traeger", "Tom Haverford"];
	allAnswers[5] = ["An unexploaded land mine", "A picture of his ex-wife, Tammy", "A bunch of bananas", "A gun"];
	allAnswers[6] = ["Andy Dwyer", "Two gay men", "A woman", "Tom Haverford"];
	allAnswers[7] = ["Joe Biden", "George Clooney", "Corey Booker", "The Prince of Wales"];
	allAnswers[8] = ["Jerry Gergich", "Ron Swanson", "April Ludgate", "Leslie Knope"];
	allAnswers[9] = ["People", "Going out", "Camping", "Dogs"];
	allAnswers[10] = ["Tom Haverford", "Joan Calamezzo", "Perd Hapley", "Jean-Ralphio Saperstein"];


	


//Here we run a timer counting down form a set number 
	var intervalID;


	$(document).on("click", "#start", displayNextQuestion);

	$(document).on("click", ".choice", function() {
		if ($(this).text() === answers[counter]) { 
			correctAnswer();
			transition();


		}else {
			incorrectAnswer(); 
			transition();
		}

	})

	console.log("correct" + correctAs); 
	console.log("incorrect" + incorrectAs); 

	function displayNextQuestion() {
		$("#start").remove(); 
		$("#timer").html("Time remaining: ");
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
			$("#timer").html("Time remaining: " + secondsLeft + " seconds");
			secondsLeft--;
				if (secondsLeft < 0) {
					incorrectAnswer();
					transition()
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
		$("#gif").append("<img src='assets/images/correct" + counter + ".gif'>");
		correctAs ++; 
	}

	function incorrectAnswer() {
		$("#answers").html("The correct answer was '" + answers[counter] + "'"); 
		$("#gif").append("<img src='assets/images/incorrect" + counter + ".gif'>");
		incorrectAs++; 
	}

	function transition() {
		resetTimer(); 
		counter++;
		setTimeout(clear, 4 * 1000); 
		setTimeout(displayNextQuestion, 4 * 1000);
	}

	function clear() {
		$("#questions").empty();
		$("#answers").empty(); 
		$("#gif").empty();
	}

	function getResults() {
		$("#timer").text("No more questions... Here's how you did!");
		$("#questions").append("<h2>you got " + correctAs + " questions right </h2>");
		$("#questions").append("<h2>you got " + incorrectAs + " questions wrong </h2>");
		if (correctAs > incorrectAs) {
			$("#answers").append("Great job! You're a real Parks and Rec Fan!")
		}
		else{
			$("#answers").append("Time to watch some more Parks and Recreation! You've still got so much to learn!")
		}
		$("#start-button").html("<button id='start'>Take Quiz Again</button>");
		startOver();
	}

	function startOver() {
		$(document).on("click", "#start", function() {
			correctAs = 0; 
			incorrectAs = 0; 
			counter = 0; 
			secondsLeft = 10; 
			clear();
			displayNextQuestion(); 
		})
	}
	
//

	


});

