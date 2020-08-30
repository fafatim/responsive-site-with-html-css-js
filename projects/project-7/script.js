$(document).ready(function(){

    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];
 $("#answer").hide();
    magic8Ball.askQuestion = function(question){
		$("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };

    var onClick = function() {
		  $("#answer").hide();

setTimeout(
          function() {
            var promptQuestion = prompt("Ask Me Anything button");
            magic8Ball.askQuestion(promptQuestion);
          }, 100);
          setTimeout(
                    function() {

                    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
                     $("#8ball").effect("shake");
                  }, 100);




    };

    $("#questionButton").click( onClick );

});
