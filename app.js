$(document).ready(function() {
    console.log('ready')
  // all code to manipulate the DOM
  // goes inside this function

// Creates a new game instance, new board, and new players
// Also holds turn counter to determine draw conditions
var player1Name= prompt('Player1: ');
var player1=1;
var player2Name=prompt('Player2: ');
var player2=2;
var turnCounter=1;
var currentPlayer;
var currentPlayerName;
var img1="<img src='buddy.jpg'>";
var img2="<img src='kevin.jpg'>";
var player1Moves =[0,0,0,0,0,0,0,0,0];
var player2Moves=[0,0,0,0,0,0,0,0,0];
//can probably use 1 array since the win conditions are distinct values
turnTracker =function(){
 if(turnCounter % 2 === 0){ 
        currentPlayer = player2;
    }else{
        currentPlayer = player1;
    } 

}



$('.player1Name').html(player1Name+"<br>");
$('.player2Name').html(player2Name+"<br>");

////Toggles Hover Effect for Current Player////
$('.box').on('mouseenter', function(e){ 
   turnTracker();
    if( $(this).hasClass('default')){
        if(currentPlayer===1){$(this).html(img1) 
        };
        if(currentPlayer===2){$(this).html(img2)
        };
        console.log(currentPlayer)
    }});

$('.box').on('mouseleave', function(e){
    turnTracker();
    if($(this).hasClass('default')){
        $(this).html('')
    }});
//////////////////////////////////






//Allows players to make a mark on the board and prevents them from overwritting other turns, also updates Current header
$('.box').on('click', function(e){ 
    
    if($(this).hasClass('default')){
        turnTracker();
        if(currentPlayer === 1){
            $(this).addClass('player1Name');
            $(this).removeClass('default');
            player1Moves[($(this).attr('id'))]=2;
            p1wincheck();
            turnCounter++;
            $('#currentTurn').html("Current Turn:" +"   "+ img2);
            

        } if(currentPlayer ===2){
            $(this).addClass('player2Name');
            $(this).removeClass('default');
            player2Moves[($(this).attr('id'))]=5;
            p2wincheck();
             turnCounter++;
            $('#currentTurn').html("Current Turn:"+"    "+img1);
           
        }
          
    }
    
  
});
/////////////////////////////////////////////////////////////////


//Resets the Board 
reset=function(){

    $('.box').removeClass('player1Name');
    $('.box').removeClass('player2Name');
    $('.box').addClass('default');
    $('.box').html('');
    player1Moves=[0,0,0,0,0,0,0,0];
    player2Moves =[0,0,0,0,0,0,0,0];
   var turnCounter=0;
   turnTracker();
}

$('#reset').on('click', function promptReset(e){
    if(turnCounter!==0){
        var verify=prompt("Current Game Progress will be lost, if you wish to proceed type 'yes' ");
        if(verify!=="yes" || "no"){};
        if(verify==="yes"){
            reset();
        }
        if(verify==="no"){    
        
    }
    
    
    
}})

/////////////////////////////////////////////////////////////////


p1wincheck=function(){

for(i=0; i<=3; i+=3){
     checkvalRow=(player1Moves[i]*player1Moves[i+1]*player1Name[i+2]);
     if(checkvalRow===8){alert(player1Name+' Wins!');
     $('#score1').html($('#score1').html() + 'I');
     reset();
}
}
   
for(i=0;i<=2;i++){
    checkvalCol=(player1Moves[i]*player1Moves[i+3]*player1Moves[i+6]);
    if(checkvalCol===8){alert(player1Name+' Wins!');
    $('#score1').html($('#score1').html() + 'I');
    reset();
}
}
    dlr=(player1Moves[0]*player1Moves[4]*player1Moves[8]);
         
    drl=(player1Moves[2]*player1Moves[4]*player1Moves[6]);

if(drl||dlr===8){alert(player1Name+' Wins!');
    $('#score1').html($('#score1').html() + 'I');
    reset()}
}

p2wincheck=function(){

    for(i=0; i<=3; i+=3){
     checkvalRow=(player2Moves[i]*player2Moves[i+1]*player2Name[i+2]);
     if(checkvalRow===125){alert(player2Name+' Wins!');
      $('#score2').html($('#score2').html() + 'I');
      reset();

 };
}
   
for(i=0;i<=2;i++){
    checkvalCol=(player2Moves[i]*player2Moves[i+3]*player2Moves[i+6]);
    if(checkvalCol===125){alert(player2Name+' Wins!');
     $('#score2').html($('#score2').html() + 'I');
     reset();
 };
}
    dlr=(player2Moves[0]*player2Moves[4]*player2Moves[8]);
         
    drl=(player2Moves[2]*player2Moves[4]*player2Moves[6]);

if(drl||dlr===125){
     alert(player2Name+' Wins!');
    $('#score2').html($('#score2').html() + 'I');
     reset();
};
}



// closes Ready Function


});




























