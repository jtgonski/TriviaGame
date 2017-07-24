$(document).ready(function() {

// window.onload = function() {
//   $("#start").on("click", stopwatch.recordLap);
//   $("#stop").on("click", stopwatch.stop);
//   $("#reset").on("click", stopwatch.reset);
//   $("#start").on("click", stopwatch.start);
// };

	//Declare Variables
	var correctAs = 0;
	var incorrectAs = 0; 
	//create an object or array that holds the trivia questions and answers
	var questions = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7",
					"question 9", "question 10"];
	var answers = ["<div class='correct'>answer 1</div><div class='incorrect'>other answer</div>", "answer 2", "answer 3", "answer 4", "answer 5", "answer 6", "answer 7", "answer 8", "answer 9", "answer 10"]		

	// var trivia = {
	// 	qs: ["I’m a simple man. I like pretty, dark-haired women and breakfast food.", "Most people would say 'the deets', but I say 'the tails.' Just another example of innovation. "].
	// 	as: ["RS", "TH", "RS", "MLS", "RS", "LK", "TH", "LK", "JRS", "RS"], 
	// 	ra1: ["AD", "TH", "JG"],

	// }	

	


	var i = 0;
	var timerNumber = 5; 
	var intervalID;

	
	$("#timer").html("time remaining: " + timerNumber + " seconds")

	for (var j = 0; j < answers.length; j++) {
		questions[i].addClass("correct"); 
	}

	console.log(questions[3]);



	$(document).on("click", function () {
		function run() {
			intervalID = setInterval(decrement, 1000);
		} 

		function decrement () {
			timerNumber --; 

			$("#timer").html("time remaining: " + timerNumber + " seconds")

			$("#questions").html("<p>" + questions[i] + "</p>" + "<p>" + answers[i] + "</p>");

			if (timerNumber === 0) {
				stop(); 
				reset();
				i++; 
			}
		}

		function stop () {
			clearInterval(intervalID); 
		}

		function reset () {
			timerNumber = 5;
		}

		run();
	})

	
	//set timer div (countdown from 30 seconds);



//set a reset function which resets the timer after each answer
//if timer is > 0
//for questionsAnswers < questions.length, then play the game
//set on click event
//check if click val === correct answer,
//	if yes, correct answer +=1; 
//	else, wrong answers +=1; 
//		  gameQuestions[i]
//if timer === 0
//	 wrong answer +=1; 
//	 move to the next question(?);

// when questions = questions.length, 
// show final page with wrong answers and right answers displayed


});

