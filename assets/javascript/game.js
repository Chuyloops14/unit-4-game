$( documnent ).ready(function(){
    var Random= Math.floor(Math.radnom()*101+19)

    $('#randomNumber').text(Random);

    var num1 = Math.floor(Math.random()*11+1)
    var num2 = Math.floor(Math.random()*11+1)
    var num3 = Math.floor(Math.random()*11+1)
    var num4 = Math.floor(Math.random()*11+1)

    var userTotal= 0;
    var wins= 0;
    var losses= 0;

$('#numberWins=').text(wins);
$('#nymberLosses').text(losses);

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.Random()*11+1);
    num2= Math.floor(Math.Random()*11+1);
    num3= Math.floor(Math.Random()*11+1);
    num4= Math.floor(Math.Random()*11+1);
    userTotal= 0
    $('#finalTotal').text(userTotal);
}
function yay(){
    alert("You won!");
    wins++;
    $('#numberWins').text(wins);
    reset();
}

function loser(){
    alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
}

$('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("new userTotal= " + usertotal);
    if(userTotal == Random){
        yay();
    }
    else if (userTotal > Random){
        loser();
    }
})

$('#two').on ('click', function(){
    userTotal = userTotal = num2;
    if (userTotal == Random){
        yay();
    }
    else if ( userTotal > Random){
        loser();
    }
})

$('#three').on ('click', function(){
    userTotal = 
})

});