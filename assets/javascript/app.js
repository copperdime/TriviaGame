// // pseudocode

// *
// * Game runs on timer set in seconds
// 	Condition timer === 0:
// 		if timer = 0 mls
// 			(user loses due to time up)

// 	Condition timer > 0:
// 		if button pressed evaluate response
// 			if button === true;
// 				Good Job!
// 			if button === false;
// 				You lose!

setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 20);
// setTimeout(countdown, 1000 * 1);

function tenSeconds() {
  $("#time-left").html("<h4>About 10 Seconds Left!</h4>");
  console.log("10 seconds left");
}

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").html("<h4>Time's Up!</h4>");
  console.log("time is up");
  //  The following line will play the audio file we linked to above:
  // audio.play();
}

	/**
	Questions are populated using JQuery. Use an iterative loop
	to control question displayed
	*/
	var questionArr =
	
	[
			question1 = {
			question: "What color are my eyes?",
			answer: ["Brown", "Blue", "Hazel"],
			correctAnswer: 'Brown'
		},
			question2 = {
			question: "How tall am I?",
			answer: ["5'2", "5'5", "5'9"],
			correctAnswer: "5'2"
		},
			question3 = {
			question: "What color is my hair?",
			answer: ["Red", "Brown", "Blond"],
			correctAnswer: "Brown"
		},
			question4 = {
			question: "How old am I?",
			answer: ["25", "30", "36"],
			correctAnswer: "36"
		},
			question5 = {
			question: "What's my weight?",
			answer: ["125lbs", "120lbs", "150lbs"],
			correctAnswer: "125lbs"
		},
			question6 = {
			question: "What's my ethncity?",
			answer: ["Black", "White", "Asian"],
			correctAnswer: "Black"
		},
			question7 = {
			question: "What's my shoe size?",
			answer: ["8", "7", "6"],
			correctAnswer: "8"
		},
			question8 = {
			question: "What's my favorite food?",
			answer: ["Chocolate", "Bread", "Carrots"],
			correctAnswer: "Chocolate"
		},
			question9 = {
			question: "What's my profession?",
			answer: ["Sales Associate", "Engineer", "Medical Doctor"],
			correctAnswer: "Engineer"
		},
			question10 = {
			question: "Where do I live?",
			answer: ["Chicago, IL", "New York, NY", "San Jose, CA"],
			correctAnswer: "San Jose, CA"
		}
];

			var randQ = Math.floor(Math.random() * ((questionArr.length)));
			
  			var postQ = questionArr[randQ].question;
  			var postA = questionArr[randQ].answer;
  			var postC = questionArr[randQ].correctAnswer;
  			console.log(randQ);
  			console.log(postQ);
  			console.log(postA);
  	

			$("#questionAsked").html(postQ);

	  		$("#answers_0").html(postA[0]);
	  		$("#answers_1").html(postA[1]);
	  		$("#answers_2").html(postA[2]);
  		

  			function winOrLoss(){
  				console.log($(this).text(), postC);
  				// if user selects the correct button they win
  				if (postC === $(this).text()){
  					// var trueOrFalse = true;
  					console.log("true");
  					// wins += wins;
  					return;
  				}
  				// if time runs out before user selects a button, they lose
  				else if(timeUp === 0){
  					// losses += losses;
  					console.log("Times up. You lost!");
  					return;
  				}
  				// if user selects a button but it is not the correct one, they lose
  				else{
  					// trueOrFalse = false;
  					console.log("false");
  					// losses += losses;
  					return;
  				}
  			}

  			$(".btn").on("click", winOrLoss);


