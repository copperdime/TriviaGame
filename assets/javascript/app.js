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
// var audio = new Audio("raven.mp3");


setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 20);

function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
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
	Questions:
	*
	Questions are populated using JQuery. Use an iterative loop to control question displayed
	*/

	var question1 = {
		question: "What color are my eyes?",
		answer: ["brown", "blue", "green"]
	};
	var question2 = {
		question: "How tall am I?",
		answer: "5'2"
	};
	var question3 = {
		question: "What color is my hair?",
		answer: "black"
	};
	var question4 = {
		question: "How old am I?",
		answer: "36"
	};
	var question5 = {
		question: "Guess my weight?",
		answer: "NOYB"
	};

	var question6 = {
		question: "Guess my ethncity?",
		answer: "black"
	};
	var question7 = {
		question: "Guess my shoe size?",
		answer: "8"
	};
	var question8 = {
		question: "What's my favorite food?",
		answer: "Chocolate"
	};
	var question9 = {
		question: "Guess my profession?",
		answer: "Engineer"
	};
	var question10 = {
		question: "Where do I live?",
		answer: "San Jose"
	};

	var questions = [question1, question2, question3, question4, question5,
	question6, question7, question8, question9, question10]; 
	// individual questions
	var postQ_i0 = questions[0].question;
	var postQ_i1 = questions[1].question;
	var postQ_i2 = questions[2].question;
	var postQ_i3 = questions[3].question;
	var postQ_i4 = questions[4].question;
	var postQ_i5 = questions[5].question;
	var postQ_i6 = questions[6].question;
	var postQ_i7 = questions[7].question;
	var postQ_i8 = questions[8].question;
	var postQ_i9 = questions[9].question;

	// individual answers to the individual questions
	var postA_i0 = questions[0].answers;
	var postA_i1 = questions[1].answers;
	var postA_i2 = questions[2].answers;
	var postA_i3 = questions[3].answers;
	var postA_i4 = questions[4].answers;
	var postA_i5 = questions[5].answers;
	var postA_i6 = questions[6].answers;
	var postA_i7 = questions[7].answers;
	var postA_i8 = questions[8].answers;
	var postA_i9 = questions[9].answers;


	var postQ = [postQ_i0, postQ_i1, postQ_i2, postQ_i3, postQ_i4,
	postQ_i5, postQ_i6, postQ_i7, postQ_i8, postQ_i9];

	var randQ = postQ[Math.floor(Math.random()*postQ.length)];
	// var randA = postA[Math.floor(Math.random()*postA.length)];

  		for (var i = 0 ; i < questions.length; i++){
  				var postQ = questions[i].question;
  			$("#questionAsked").html(randQ);
  			// .appendTo('#questionAsked' + i);
  		}
  		// for $("<button>"){

  		// }
  		// var answer = question1.answer[i];
//   		console.log(questions[0].question);
// //   			var image = $("<img>")
//   				.attr('class', 'crystal')
//   				.attr('width', 240)
//   				.attr('height', 240)
//   				.attr('src', images[i])
//   				.attr('data-randnum', randomNumber)
//   				.appendTo('#image-' + i);
//   		}

// 	Each question is a key and has an answer value.
// 	if value of button = value of key
// 		answer if true;
// 	else 
// 		answer if false;

// *

