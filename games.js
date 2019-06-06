// Random number given to users at the beginning of the game. Might need a for loop.
var randomNumber;
var losses;
var win;

// $(document).ready(function(){
//     var array =[];
//     for(var i = 19; i < 120; i++){
//         console.log("hello world")
//          array.push()
//     }
var randomNumber = Math.floor(Math.random() * 110) + 19;
console.log(randomNumber)
$("#number").text(randomNumber);



// The value of the crystals go here, also the function which will give them all different values.
// var crystal = Math.floor(Math.random())
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12);
    console.log(random);
    
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
   
    });
    
    $(".crystals").append(crystal);
}

resetAndStart();

$(".document").on('click', 'crystal', function () {
    var num = parseInt($(this).attr('data-random'));
    
    previous += num
    c
    onsole.log(previous)
    if (previous > randomNumber) {
        losses--;

        $('#losses').html(losses);
        resetAndStart();
    }

    else if (previous === randomNumber) {
        win++;

        $("#win").html(win); 

        resetAndStart();
        alert("YOU WIN!")

    }

});



// The value of the crystals change when the game resets. 


//The user wins if the number on the screen = the random number 


//  Users lose if the number on the screen goes over the random number. 
// });