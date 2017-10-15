//load html first
$(document).ready(function () {

    //pick random number from 19-120
    //define variables
    var wins = 0;
    var losses = 0;
    var userGuess = 0
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    var buttonOne = Math.floor(Math.random() * 12) + 1;
    var buttonTwo = Math.floor(Math.random() * 12) + 1;
    var buttonThree = Math.floor(Math.random() * 12) + 1;
    var buttonFour = Math.floor(Math.random() * 12) + 1;

    //add jquery to display the target number
    $("#targetNumber").append("Number to guess: " + randomNumber);

    //add jquery to display user's guess
    $("#userNumber").append("Your number: " + userGuess);
    
    //add jquery to assign value to the buttons
    $("#crystalOne").attr(buttonOne)
    $("#crystalTwo").attr(buttonTwo)
    $("#crystalThree").attr(buttonThree)
    $("#crystalFour").attr(buttonFour)
    
    //define function that adds up the button presses

    //define function that determines if the player wins updates wins

    //define function that determines if the player loses, updates losses

    //define reset function
    function reset() {
        randomNumber;
        buttonOne;
        buttonTwo;
        buttonThree;
        buttonFour;
    }
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