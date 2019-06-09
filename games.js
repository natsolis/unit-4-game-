// Random number given to users at the beginning of the game. Might need a for loop.
var randomNumber;
var losses;
var win;
var crystal;
var score = ""


// $(document).ready(function(){
//     var array =[];
//     for(var i = 19; i < 120; i++){
//         console.log("hello world")
//          array.push()
//     }
var randomNumber = Math.floor(Math.random() * 110) + 19;
console.log(randomNumber)
$("#number").text(randomNumber);
function reset(){
    arrayOfCrystal=[];
    addition =[];
    // has to reset the randomNumber
    randomNumber = Math.floor(Math.random() * 110) + 19;
    $("#number").text(randomNumber);
   // also has to reset the crystals and total score 
   e();

}
var crystal;
var arrayOfCrystal = [];
var addition = [];

// The value of the crystals go here, also the function which will give them all different values.
// var crystal = Math.floor(Math.random()) 
// function crystal(){
for (var i = 1; i < 13; i++) {
    arrayOfCrystal.push(i);
    console.log(arrayOfCrystal);
}
crystal = Math.floor(Math.random() * arrayOfCrystal.length);
arrayOfCrystal.splice((crystal - 1), 1);

crystal1 = Math.floor(Math.random() * arrayOfCrystal.length);
arrayOfCrystal.splice((crystal1 - 1), 1);

crystal2 = Math.floor(Math.random() * arrayOfCrystal.length);
arrayOfCrystal.splice((crystal2 - 1), 1);

crystal3 = Math.floor(Math.random() * arrayOfCrystal.length);
arrayOfCrystal.splice((crystal3 - 1), 1);


//  console.log(crystal);}s
function e(){
$("#first").on('click', function() {
    addition.push(crystal);
    console.log(crystal)
    // update DOM
    if (addition.length < 2) {
        $("#score").text(crystal);
    }

    else {
        score = $("#score").text();
        score = parseInt(score);
        score += crystal;
        $("#score").text(score);
        win();
        losses();
       




    }


});
$("#second").on('click', function () {

    addition.push(crystal1);
    console.log(crystal1)
    if (addition.length < 2) {
        $("#score").text(crystal1);
    }

    else {
        score = $("#score").text();
        score = parseInt(score);
        score += crystal1;
        $("#score").text(score);
        console.log(crystal1);
        win();
        losses();
       
    }
});


$("#third").on('click', function () {
    //crystal();
    addition.push(crystal2);
    console.log(crystal2)
    // update DOM
    if (addition.length < 2) {
        $("#score").text(crystal2);
    }

    else {
        score = $("#score").text();
        score = parseInt(score);
        score += crystal2;
        $("#score").text(score);
        console.log(crystal2);
        win();
        losses();
       
    }
});

$("#fourth").on('click', function () {
    //crystal();
    addition.push(crystal3);
    console.log(crystal3)
    // update DOM
    if (addition.length < 2) {
        $("#score").text(crystal3);
    }

    else {
        score = $("#score").text();
        score = parseInt(score);
        score += crystal3;
        $("#score").text(score);
        console.log(crystal3);
        win();
        losses();
      

    }
});

}

e();
// resetAndStart();





// resetAndStart();



// The value of the crystals change when the game resets. 


//The user wins if the number on the screen = the random number 
function win() {
    if (score === randomNumber) {
        var win = $("#wins").text();
        win = parseInt(win);
        win = win+1;
        $("#wins").text(win);  
        reset();  
            alert("You win!");

    }

}



function losses() {
    if (score > randomNumber) {
        var losses = $("#lose").text();
        losses = parseInt(losses);
        losses = losses+1;
        $("#lose").text(losses);
        reset();
        alert(" You Lose!")
    }
}

//  Users lose if the number on the screen goes over the random number. 
// });