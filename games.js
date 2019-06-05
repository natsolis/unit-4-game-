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
     var randomNumber= Math.floor(Math.random() * 19) + 110;
     console.log(randomNumber)
    $("#number").text(randomNumber);



// The value of the crystals go here, also the function which will give them all different values.
var crystal = Math.floor(Math.random())





// The value of the crystals change when the game resets. 


//The user wins if the number on the screen = the random number 


//  Users lose if the number on the screen goes over the random number. 
// });