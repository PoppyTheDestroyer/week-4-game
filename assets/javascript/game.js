//load html first
$(document).ready(function () {

    //pick random number from 19-120
    //define variables
    var wins = 0;
    var losses = 0;
    var userTotal = 0
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    var buttonOne = Math.floor(Math.random() * 12) + 1;
    var buttonTwo = Math.floor(Math.random() * 12) + 1;
    var buttonThree = Math.floor(Math.random() * 12) + 1;
    var buttonFour = Math.floor(Math.random() * 12) + 1;

    //add jquery to display the target number
    $("#targetNumber").text("Number to guess: " + randomNumber);

    //add jquery to display user's guess
    $("#userNumber").text("Your total: " + userTotal);

    //define function that determines if the player wins/loses updates wins/losses
    function winner() {
        $("#result").text("You Win!");
        wins += 1;
        reset();
    };
    function loser() {
        if (userTotal > randomNumber) {
            $("result").text("You Lose!");
            losses += 1;
            reset();
        }

    };

    //define reset function
    function reset() {
        userTotal = 0
        randomNumber = Math.floor(Math.random() * 102) + 19;
        buttonOne = Math.floor(Math.random() * 12) + 1;
        buttonTwo = Math.floor(Math.random() * 12) + 1;
        buttonThree = Math.floor(Math.random() * 12) + 1;
        buttonFour = Math.floor(Math.random() * 12) + 1;
    }

    //add jquery to assign value to the buttons
    //define function that adds up the button presses
    $("#crystalOne").on("click", function () {
        userTotal = buttonOne + userTotal;
        $("#userNumber").text("Your total: " + userTotal);
        if (userTotal === randomNumber) {
            winner()
        }
        else if (userTotal > randomNumber) {
            loser();
        }
    }),

        $("#crystalTwo").on("click", function () {
            userTotal = buttonTwo + userTotal;
            $("#userNumber").text("Your total: " + userTotal);
            if (userTotal === randomNumber) {
                winner()
            }
            else if (userTotal > randomNumber) {
                loser();
            }
        }),

        $("#crystalThree").on("click", function () {
            userTotal = buttonThree + userTotal;
            $("#userNumber").text("Your total: " + userTotal);
            if (userTotal === randomNumber) {
                winner()
            }
            else if (userTotal > randomNumber) {
                loser();
            }
        }),

        $("#crystalFour").on("click", function () {
            userTotal = buttonFour + userTotal;
            $("#userNumber").text("Your total: " + userTotal);
            if (userTotal === randomNumber) {
                winner()
            }
            else if (userTotal > randomNumber) {
                loser();
            }
        })

    //input display of user's total
    function consoles() {
        console.log(randomNumber);
        console.log(buttonOne);
        console.log(buttonTwo);
        console.log(buttonThree);
        console.log(buttonFour);
    }
    consoles();
});